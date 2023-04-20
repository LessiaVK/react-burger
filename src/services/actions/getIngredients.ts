import { BASE_URL } from "../../utils/constants";
import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENTS_REQUEST,
} from "./actionTypes";
import { IFetchIngredients, IFetchIngredientsState, IFetchIngredientsError, IFetchIngredientsRequest } from "./todo";
import { TIngredient } from "../../components/burger-ingredients/BurgerIngredients";

const url = BASE_URL + "/ingredients";

export const actionGetData = {
  fetchIngredients: (data: TIngredient[]): IFetchIngredients => ({ type: FETCH_INGREDIENTS, payload: data }),
  fetchIngredientsState: (data: TIngredient[]): IFetchIngredientsState => ({
    type: FETCH_INGREDIENTS_STATE,
    payload: data,
  }),
  fetchIngredientsError: (data: boolean): IFetchIngredientsError => ({
    type: FETCH_INGREDIENTS_ERROR,
    payload: data,
  }),
  fetchIngredientsRequest: (data: boolean): IFetchIngredientsRequest => ({
    type: FETCH_INGREDIENTS_REQUEST,
    payload: data,
  }),
};


