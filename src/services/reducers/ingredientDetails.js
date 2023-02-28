import {
  ADD_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
} from "../actions/actionTypes";
import { initialState } from "../initialState";

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return {
        ...state,
        currentIngredient: action.payload,
      };

    case DELETE_INGREDIENT_DETAILS:
      return {
        ...state,
        currentIngredient: undefined,
      };

    default:
      return state;
  }
};