import { actionOrderDetails } from "./actions/orderDetails";
import { BASE_URL } from "../utils/constants";
import { actionGetData } from "./actions/getIngredients";
import { actionRegisterRequest } from "./actions/register";
import { actionLoginRequest } from "./actions/login";
import { getCookie, setCookie } from "../utils/cookie";

export function getLoginRequest(form, navigate) {
  return function (dispatch) {
    dispatch(actionLoginRequest.loginRequest());
    fetch(
    "https://norma.nomoreparties.space/api/auth/login",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie('accessToken'),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    }
  )
    .then((res) => {

   if (res && res.ok) {
      return res.json();
    } else {
      dispatch(actionLoginRequest.loginError());
    }
  }
    )
    .then((data) => {
      dispatch(actionLoginRequest.loginSuccess(data));
      // console.log("codeRequest data", data);
      data.success && navigate("/", { replace: true });
    })
    .catch((err) => {
      dispatch(actionLoginRequest.loginError());
    });
}
};

export function getRegisterRequest(form, navigate) {
  return function (dispatch) {
    dispatch(actionRegisterRequest.registerRequest());
    fetch(
    "https://norma.nomoreparties.space/api/auth/register",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    }
  )
    .then((res) => {

   if (res && res.ok) {
      return res.json();
    } else {
      dispatch(actionRegisterRequest.registerError());
    }
  }
    )
    .then((data) => {
      dispatch(actionRegisterRequest.registerSuccess(data));
      // console.log("codeRequest data", data);
     let authToken = data.accessToken.split('Bearer ')[1];
      if (authToken) {
          setCookie('refreshToken', data.refreshToken, { expires: 20*60 });
        }
       data.success && navigate("/login", { replace: true });
    })
    .catch((err) => {
      dispatch(actionRegisterRequest.registerError());
    });
}
};

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
