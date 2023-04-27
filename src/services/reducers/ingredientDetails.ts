import {
  ADD_INGREDIENT_DETAILS
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TIngredientReducer } from "./todo";

export const ingredientReducer = (state = initialState.ingredientReducer, action: TTodoActions): TIngredientReducer => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return {
        ...state,
        currentIngredient: action.payload,
      };

    default:
      return state;
  }
};