export const ingredientsSelector = (state) => state.rootReducer1.ingredients;
export const constructorSelector = (state) => state.rootReducer1.constructor;
export const openModalSelector = (state) => state.rootReducer1.isOpenModal;
export const currentIngredientSelector = (state) =>
  state.rootReducer1.currentIngredient;
export const currentOrderSelector = (state) => state.rootReducer1.currentOrder;
export const fetchIngredientsSelector = (state) =>
  state.rootReducer1.fetchIngredients;
export const fetchcurrentItemsID = (state) => state.rootReducer1.currentItemsID;
export const orderNumber = (state) => state.rootReducer1.orderNumber;
