import { BASE_URL } from "../../utils/constants";
import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENTS_REQUEST,
} from "../actions/actionTypes";

const url = BASE_URL + "/ingredients";

export const actionGetData = {
  fetchIngredients: (data) => ({ type: FETCH_INGREDIENTS, payload: data }),
  fetchIngredientsState: (data) => ({
    type: FETCH_INGREDIENTS_STATE,
    payload: data,
  }),
  fetchIngredientsError: (data) => ({
    type: FETCH_INGREDIENTS_ERROR,
    payload: data,
  }),
  fetchIngredientsRequest: (data) => ({
    type: FETCH_INGREDIENTS_REQUEST,
    payload: data,
  }),
};


