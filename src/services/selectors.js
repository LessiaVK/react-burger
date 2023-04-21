export const ingredientsSelector = (state) =>
  state.fetchDataReducer.ingredients;
export const fetchIngredientsSelector = (state) =>
  state.fetchDataReducer.fetchIngredients;
export const fetchIngredientsError = (state) =>
  state.fetchDataReducer.fetchIngredientsError;
export const fetchIngredientsRequest = (state) =>
  state.fetchDataReducer.fetchIngredientsRequest;

export const constructorSelector = (state) => state.burgerReducer.constructorB;
export const currentItemsIDSelector = (state) =>
  state.burgerReducer.currentItemsID;

export const currentIngredientSelector = (state) =>
  state.ingredientReducer.currentIngredient;
export const fetchcurrentItemsID = (state) =>
  state.burgerReducer.currentItemsID;

export const orderNumber = (state) => state.orderReducer.orderNum;
export const orderRequest = (state) => state.orderReducer.orderRequest;
export const orderFailed = (state) => state.orderReducer.orderFailed;

export const loginRequest = (state) => state.loginReducer.loginRequest;
export const loginSuccess = (state) => state.loginReducer.loginSuccess;
export const loginError = (state) => state.loginReducer.loginError;

export const logout = (state) => state.logoutReducer.logout;
export const logoutSuccess = (state) => state.logoutReducer.logoutSuccess;
export const logoutError = (state) => state.logoutReducer.logoutError;

export const registerRequest = (state) => state.registerReducer.registerRequest;
export const registerSuccess = (state) => state.registerReducer.registerSuccess;
export const registerError = (state) => state.registerReducer.registerError;
export const user = (state) => state.registerReducer.user;

export const userRequest = (state) => state.userReducer.userRequest;
export const userSuccess = (state) => state.userReducer.userSuccess;
export const userError = (state) => state.userReducer.userError;

export const updateToken = (state) => state.updateTokenReducer.updateToken;
export const updateTokenSuccess = (state) =>
  state.updateTokenReducer.updateTokenSuccess;
export const updateTokenError = (state) =>
  state.updateTokenReducer.updateTokenError;

  export const wsError = (state) => state.wsReducer.error;
  export const wsOrders = (state) => state.wsReducer.orders;
  export const wsConnected = (state) => state.wsReducer.wsConnected;
  export const wsDataIsReady = (state) => state.wsReducer.dataIsReady;


