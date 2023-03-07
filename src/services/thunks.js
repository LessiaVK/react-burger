import { actionOrderDetails } from "./actions/orderDetails";
import { BASE_URL } from "../utils/constants";
import { actionGetData } from "./actions/getIngredients";

export function getIngredients() {
  return function (dispatch) {
    dispatch(actionGetData.fetchIngredientsRequest());

    fetch(BASE_URL + "/ingredients")
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionGetData.fetchIngredientsError());
        }
      })
      .then((json) => {
        dispatch(actionGetData.fetchIngredients(json.data));
        dispatch(actionGetData.fetchIngredientsState(json.data));
      })
      .catch((err) => {
        dispatch(actionGetData.fetchIngredientsError());
      });
  };
}

export function getOrderNumber(orderDetailsID) {
  return function (dispatch) {
    dispatch(actionOrderDetails.orderNumber());

    fetch(BASE_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ingredients: orderDetailsID,
      }),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionOrderDetails.orderNumberError());
        }
      })
      .then((json) => {
        dispatch(actionOrderDetails.orderNumberSuccess(json.order.number));
      })
      .catch((err) => {
        dispatch(actionOrderDetails.orderNumberError());
      });
  };
}
