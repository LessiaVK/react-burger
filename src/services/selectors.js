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

export const loginRequest = (state) => state.loginReducer.loginRequest;
export const loginSuccess = (state) => state.loginReducer.loginSuccess;
export const loginError = (state) => state.loginReducer.loginError;

// export const logout = (state) => state.logoutReducer.logout;
// export const logoutSuccess = (state) => state.logoutReducer.logoutSuccess;
// export const logoutError = (state) => state.logoutReducer.logoutError;

export const registerRequest = (state) => state.registerReducer.registerRequest;
export const registerSuccess = (state) => state.registerReducer.registerSuccess;
export const registerError = (state) => state.registerReducer.registerError;
export const user = (state) => state.registerReducer.user;

// export const passwordReset = (state) => state.passwordResetReducer.passwordReset;
// export const codeRequest = (state) => state.passwordResetReducer.codeRequest;
// export const passwordSuccess = (state) => state.passwordResetReducer.passwordSuccess;
// export const passwordError = (state) => state.passwordResetReducer.passwordError;