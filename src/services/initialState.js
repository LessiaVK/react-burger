export const initialState = {
  fetchDataReducer: {
    ingredients: [],
    fetchIngredients: "none",
  },
  burgerReducer: {
    constructor: [],
    currentItemsID: [],
  },
  ingredientReducer: {
    isOpenModal: false,
    currentIngredient: "",
  },
  orderReducer: {
    currentOrder: {},
    orderNumber: 0,
    orderRequest: true,
    orderFailed: false,
  },
};
