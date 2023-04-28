import { TInitialState } from "./reducers/todo";

export const ingredientsSelector = (state: TInitialState) =>
  state.fetchDataReducer.ingredients;
export const fetchIngredientsSelector = (state: TInitialState) =>
  state.fetchDataReducer.ingredients;
// export const fetchIngredientsSelector = (state: TInitialState) =>
//   state.fetchDataReducer.fetchIngredients;
export const fetchIngredientsError = (state: TInitialState) =>
  state.fetchDataReducer.fetchIngredientsError;
export const fetchIngredientsRequest = (state: TInitialState) =>
  state.fetchDataReducer.fetchIngredientsRequest;

export const constructorSelector = (state: TInitialState) => state.burgerReducer.constructorB;
export const currentItemsIDSelector = (state: TInitialState) =>
  state.burgerReducer.currentItemsID;

export const currentIngredientSelector = (state: TInitialState) =>
  state.ingredientReducer.currentIngredient;
export const fetchcurrentItemsID = (state: TInitialState) =>
  state.burgerReducer.currentItemsID;

export const orderNumber = (state: TInitialState) => state.orderReducer.orderNum;
export const orderRequest = (state: TInitialState) => state.orderReducer.orderRequest;
export const orderFailed = (state: TInitialState) => state.orderReducer.orderFailed;

export const loginRequest = (state: TInitialState) => state.loginReducer.loginRequest;
export const loginSuccess = (state: TInitialState) => state.loginReducer.loginSuccess;
export const loginError = (state: TInitialState) => state.loginReducer.loginError;

export const logout = (state: TInitialState) => state.logoutReducer.logout;
export const logoutSuccess = (state: TInitialState) => state.logoutReducer.logoutSuccess;
export const logoutError = (state: TInitialState) => state.logoutReducer.logoutError;

export const registerRequest = (state: TInitialState) => state.registerReducer.user;
export const registerSuccess = (state: TInitialState) => state.registerReducer.registerSuccess;
export const registerError = (state: TInitialState) => state.registerReducer.registerError;
export const user = (state: TInitialState) => state.registerReducer.user;

export const userRequest = (state: TInitialState) => state.userReducer.userRequest;
export const userSuccess = (state: TInitialState) => state.userReducer.userSuccess;
export const userError = (state: TInitialState) => state.userReducer.userError;
export const userIsCheck = (state: TInitialState) => state.userReducer.userIsCheck;

export const updateToken = (state: TInitialState) => state.updateTokenReducer.updateToken;
export const updateTokenSuccess = (state: TInitialState) =>
  state.updateTokenReducer.updateTokenSuccess;
export const updateTokenError = (state: TInitialState) =>
  state.updateTokenReducer.updateTokenError;

  export const wsError = (state: TInitialState) => state.wsReducer.error;
  export const wsOrders = (state: TInitialState) => state.wsReducer.orders;
  export const wsConnected = (state: TInitialState) => state.wsReducer.wsConnected;
  export const wsDataIsReady = (state: TInitialState) => state.wsReducer.dataIsReady;


