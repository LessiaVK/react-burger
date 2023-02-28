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


