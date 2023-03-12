export const initialState = {
  fetchDataReducer: {
    ingredients: [],
    fetchIngredients: "none",
    fetchIngredientsRequest: false,
    fetchIngredientsError: false,
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
  loginReducer: {
    loginRequest: {},
    loginSuccess: false,
    loginError: false,
  },
  logoutReducer: {
    logout: {},
    logoutSuccess: false,
    loginError: false,
  },
  registerReducer: {
    registerRequest: { password: "", email: "", name: "" },
    registerSuccess: false,
    registerError: false,
  },
  passwordResetReducer: {
    codeRequest: {},
    passwordReset: {},
    passwordSuccess: false,
    passwordError: false,
  },
};
