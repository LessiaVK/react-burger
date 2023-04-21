import { TInitialState } from "./reducers/todo";

export const initialState: TInitialState = {
  fetchDataReducer: {
    ingredients: [],
    fetchIngredients: [],
    fetchIngredientsRequest: false,
    fetchIngredientsError: false,
  },
  burgerReducer: {
    constructorB: [],
    currentItemsID: [],
  },
  ingredientReducer: {
    isOpenModal: false,
    currentIngredient: "",
  },
  orderReducer: {
    currentOrder: {},
    orderNum: 0,
    orderRequest: true,
    orderFailed: false,
  },
  loginReducer: {
    loginRequest: { "success": false, user: { email: "", name: "" } },
    loginSuccess: false,
    loginError: false,
  },
  logoutReducer: {
    logout: {"success": false, "message": ''},
    logoutSuccess: false,
    logoutError: false,
  },
  registerReducer: {
    registerRequest: { password: "", email: "", name: "" },
    registerSuccess: false,
    registerError: false,
  },
  userReducer: {
    userRequest: { "success": false, user: { email: "", name: "" } },
    userSuccess: false,
    userError: false,
  },
  updateTokenReducer: {
    updateToken: {"success": false, "accessToken": '', "refreshToken": ''},
    updateTokenSuccess: false,
    updateTokenError: false,
  },
  wsReducer: {
    error: false,
    orders: [],
    wsConnected: false,
    dataIsReady: false,
  }


};
