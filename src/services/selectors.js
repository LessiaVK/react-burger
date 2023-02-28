export const ingredientsSelector = (state) =>
  state.fetchDataReducer.ingredients;
export const fetchIngredientsSelector = (state) =>
  state.fetchDataReducer.fetchIngredients;
export const fetchIngredientsError = (state) =>
  state.fetchDataReducer.fetchIngredientsError;
export const fetchIngredientsRequest = (state) =>
  state.fetchDataReducer.fetchIngredientsRequest;

export const constructorSelector = (state) => state.burgerReducer.constructor;
export const currentItemsIDSelector = (state) => state.burgerReducer.currentItemsID;

export const currentIngredientSelector = (state) =>
  state.ingredientReducer.currentIngredient;
export const fetchcurrentItemsID = (state) =>
  state.burgerReducer.currentItemsID;

export const orderNumber = (state) => state.orderReducer.orderNumber;
export const orderRequest = (state) => state.orderReducer.orderRequest;
export const orderFailed = (state) => state.orderReducer.orderFailed;
