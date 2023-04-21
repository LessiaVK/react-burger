import { TIngredient } from "../../components/burger-ingredients/BurgerIngredients";
import { TUser, TLogout, TToken } from "../actions/todo";

export type TDataUser = {
  "email": string,
  "name": string,
  "password": string,
} 

export type TFetchDataReducer = {
  ingredients: ReadonlyArray<TIngredient>;
  fetchIngredients: ReadonlyArray<TIngredient>;
  fetchIngredientsRequest: boolean;
  fetchIngredientsError: boolean;
}
export type TBurgerReducer = {
  constructorB: ReadonlyArray<TIngredient>;
  currentItemsID: ReadonlyArray<number>;
}
export type TIngredientReducer = {
  isOpenModal: boolean,
  currentIngredient: string,
}

export type TInitialState = {
  fetchDataReducer: TFetchDataReducer,
  burgerReducer: TBurgerReducer,
  ingredientReducer: TIngredientReducer,
  orderReducer: {
    currentOrder: any,
    orderNum: number | undefined;
    orderRequest: boolean,
    orderFailed: boolean,
  },
  loginReducer: {
    loginRequest: TUser,
    loginSuccess: boolean,
    loginError: boolean,
  },
  logoutReducer: {
    logout: TLogout,
    logoutSuccess: boolean,
    logoutError: boolean,
  },
  registerReducer: {
    registerRequest: TDataUser,
    registerSuccess: boolean,
    registerError: boolean,
  },
  userReducer: {
    userRequest: TUser,
    userSuccess: boolean,
    userError: boolean,
  },
  updateTokenReducer: {
    updateToken: TToken,
    updateTokenSuccess: boolean,
    updateTokenError: boolean,
  },
  wsReducer: {
    error: boolean,
    orders: any,
    wsConnected: boolean,
    dataIsReady: boolean,
  }
};
