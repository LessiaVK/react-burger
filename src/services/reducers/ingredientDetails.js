import {
  ADD_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
  IS_MODAL_OPEN,
} from "../actions/actionTypes";
import { initialState } from "../../initialState";

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
        currentIngredient: {},
      };
    
    case IS_MODAL_OPEN:
      return {
        ...state,
        isOpenModal: action.payload,
      };

    default:
      return state;
  }
};