import {
    ADD_INGREDIENT_DETAILS,
    DELETE_INGREDIENT_DETAILS,
  } from "./actionTypes";
  
  export const actionIngredientDetails = {
    addIngredientDetails: (data) => ({
      type: ADD_INGREDIENT_DETAILS,
      payload: data,
    }),
    deleteIngredientDetails: () => ({ type: DELETE_INGREDIENT_DETAILS }),
  };
  