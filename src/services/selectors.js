export const ingredientsSelector = (state) =>
  state.fetchDataReducer.ingredients;
export const constructorSelector = (state) => state.burgerReducer.constructor;
export const openModalSelector = (state) => state.ingredientReducer.isOpenModal;
export const currentIngredientSelector = (state) =>
  state.ingredientReducer.currentIngredient;
export const currentOrderSelector = (state) => state.orderReducer.currentOrder;
export const fetchIngredientsSelector = (state) =>
  state.fetchDataReducer.fetchIngredients;
export const fetchcurrentItemsID = (state) =>
  state.burgerReducer.currentItemsID;
export const orderNumber = (state) => state.orderReducer.orderNumber;
