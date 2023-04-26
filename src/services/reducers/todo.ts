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
  currentIngredient: TIngredient | undefined,
}
export type TOrderReducer = {
  currentOrder: any,
  orderNum: number | undefined;
  orderRequest: boolean,
  orderFailed: boolean,
}
export type TLoginReducer = {
  loginRequest: TUser,
  loginSuccess: boolean,
  loginError: boolean,
}
export type TLogoutReducer = {
  logout: TLogout,
  logoutSuccess: boolean,
  logoutError: boolean,
}
export type TRegisterReducer = {
  user: TUser["user"],
  registerSuccess: boolean,
  registerError: boolean,
}
export type TUserReducer = {
  userRequest: TUser["user"],
  userSuccess: boolean,
  userError: boolean,
}
export type TUpdateTokenReducer = {
  updateToken: TToken,
  updateTokenSuccess: boolean,
  updateTokenError: boolean,
}
export type TWsReducer = {
  error: boolean | undefined,
  orders: any,
  wsConnected: boolean,
  dataIsReady: boolean,
}

export type TInitialState = {
  fetchDataReducer: TFetchDataReducer,
  burgerReducer: TBurgerReducer,
  ingredientReducer: TIngredientReducer,
  orderReducer: TOrderReducer,
  loginReducer: TLoginReducer,
  logoutReducer: TLogoutReducer,
  registerReducer: TRegisterReducer,
  userReducer: TUserReducer,
  updateTokenReducer: TUpdateTokenReducer,
  wsReducer: TWsReducer,
};
