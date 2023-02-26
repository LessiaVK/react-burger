import { getDataJson } from "../../utils/checkResponse";
import { BASE_URL } from "../../utils/constants";
import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
} from "../actions/actionTypes";

const url = BASE_URL + "/ingredients";

export const actionGetData = {
  fetchIngredients: (data) => ({ type: FETCH_INGREDIENTS, payload: data }),
  fetchIngredientsState: (data) => ({
    type: FETCH_INGREDIENTS_STATE,
    payload: data,
  }),
};

export const fetchData = () => {
  return (dispatch, getState, extra) => {
    dispatch(actionGetData.fetchIngredientsState("process"));

    const setIngredients = (incomingData) => {
      dispatch(actionGetData.fetchIngredients(incomingData.data));
      dispatch(actionGetData.fetchIngredientsState("success"));
    };
    getDataJson(url, setIngredients);
  };
};
