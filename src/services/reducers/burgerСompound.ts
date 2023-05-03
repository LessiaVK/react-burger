import { GET_CONSTRUCTOR } from "../actions/actionTypes";
import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TBurgerReducer } from "./todo";

export const burgerReducer = (state = initialState.burgerReducer, action: TTodoActions): TBurgerReducer => {
  switch (action.type) {
    case GET_CONSTRUCTOR:
      return {
        ...state,
        constructorB: action.payload,
        currentItemsID: action.payload.map((item) => item._id),
      };

    default:
      return state;
  }
};
