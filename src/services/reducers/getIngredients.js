import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
} from "../actions/actionTypes";
import { initialState } from "../../initialState";

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };

    case FETCH_INGREDIENTS_STATE:
      return {
        ...state,
        fetchIngredients: action.payload,
      };

    default:
      return state;
  }
};
