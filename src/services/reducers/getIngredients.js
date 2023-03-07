import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENTS_REQUEST,
} from "../actions/actionTypes";
import { initialState } from "../initialState";

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST:
      return {
        ...state,
        fetchIngredientsRequest: true,
        fetchIngredientsError: false,
      };
    case FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        fetchIngredientsRequest: false,
        fetchIngredientsError: false,
      };

    case FETCH_INGREDIENTS_STATE:
      return {
        ...state,
        fetchIngredients: action.payload,
        fetchIngredientsRequest: false,
        fetchIngredientsError: false,
      };

    case FETCH_INGREDIENTS_ERROR:
      return {
        ...state,
        fetchIngredientsRequest: false,
        fetchIngredientsError: true,
      };

    default:
      return state;
  }
};
