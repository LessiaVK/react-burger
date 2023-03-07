import { GET_CONSTRUCTOR, FETCH_INGREDIENTS_ID } from "./actionTypes";

export const actionBurgerCompound = {
  getConstructor: (data) => ({ type: GET_CONSTRUCTOR, payload: data }),
  fetchIngredientsID: (data) => ({ type: FETCH_INGREDIENTS_ID, payload: data }),
};
