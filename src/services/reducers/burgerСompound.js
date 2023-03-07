import { GET_CONSTRUCTOR, FETCH_INGREDIENTS_ID } from "../actions/actionTypes";
import { initialState } from "../initialState";

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONSTRUCTOR:
      return {
        ...state,
        constructor: action.payload,
        currentItemsID: action.payload.map((item) => item._id),
      };

    case FETCH_INGREDIENTS_ID:
      return {
        ...state,
        currentItemsID: action.payload.map((item) => item._id),
      };

    default:
      return state;
  }
};
