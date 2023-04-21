import { 
    GET_CONSTRUCTOR, 
    FETCH_INGREDIENTS_ID,
    FETCH_INGREDIENTS,
    FETCH_INGREDIENTS_STATE,
    FETCH_INGREDIENTS_ERROR,
    FETCH_INGREDIENTS_REQUEST,
    ADD_INGREDIENT_DETAILS,
    DELETE_INGREDIENT_DETAILS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR,
    ORDER_NUMBER,
    ORDER_NUMBER_SUCCESS,
    ORDER_NUMBER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    UPDATE_TOKEN,
    UPDATE_TOKEN_SUCCESS,
    UPDATE_TOKEN_ERROR,
    USER_REQUEST, USER_SUCCESS, USER_ERROR,
    WS_SEND_MESSAGE, WS_CONNECTION_CLOSED, WS_CONNECTION_END, WS_CONNECTION_ERROR,
    WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_PONG

} from "./actionTypes";

import { TIngredient } from "../../components/burger-ingredients/BurgerIngredients";
import { TIngredientBurger } from "../../components/burger-constructor/BurgerConstructor";

export type TLogout = {
  "success": boolean,
  "message": string
}

export type TUser = {
  "success": boolean,
  "accessToken"?: string,
  "refreshToken"?: string,
  "user": {
    "email": string,
    "name": string
  }
} 

export type TToken = {
  "success": boolean,
  "accessToken": string,
  "refreshToken": string
} 

export type TOrder = {
    createdAt: number;
    ingredients: TIngredient[];
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
  };


export type WSData = {
    orders: [TOrder];
    success: boolean;
    timestamp: number;
    total: number;
    totalToday: number;
  };

export interface IGetConstractor {
    readonly type: typeof GET_CONSTRUCTOR;
    readonly payload: TIngredient[];
}

export interface IFetchIngredientsID {
    readonly type: typeof FETCH_INGREDIENTS_ID;
    readonly payload: ReadonlyArray<number>;
}

export interface IFetchIngredients {
    readonly type: typeof FETCH_INGREDIENTS;
    readonly payload: TIngredient[];
}

export interface IFetchIngredientsState {
    readonly type: typeof FETCH_INGREDIENTS_STATE;
    readonly payload: TIngredient[];
}

export interface IFetchIngredientsError {
    readonly type: typeof FETCH_INGREDIENTS_ERROR;
    readonly payload: boolean;
}

export interface IFetchIngredientsRequest {
    readonly type: typeof FETCH_INGREDIENTS_REQUEST;
    readonly payload: boolean;
}

export interface IAddIngredientDetails {
    readonly type: typeof ADD_INGREDIENT_DETAILS;
    readonly payload: TIngredient | undefined;
}

export interface IDeleteIngredientDetails {
    readonly type: typeof DELETE_INGREDIENT_DETAILS;
}

export interface ILoginRequest {
    readonly type: typeof LOGIN_REQUEST;
    readonly payload: TUser;
}

export interface ILoginSuccess {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: boolean;
}

export interface ILoginError {
    readonly type: typeof LOGIN_ERROR;
    readonly payload: boolean;
}

export interface ILogout {
    readonly type: typeof LOGOUT;
    readonly payload: TLogout;
}

export interface ILogoutSuccess {
    readonly type: typeof LOGOUT_SUCCESS;
    readonly payload: boolean;
}

export interface ILogoutError {
    readonly type: typeof LOGOUT_ERROR;
    readonly payload: boolean;
}

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
  readonly payload: TUser;
}

export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: boolean;
}

export interface IRegisterError {
  readonly type: typeof REGISTER_ERROR;
  readonly payload: boolean;
}

export interface IOrderNumber {
  readonly type: typeof ORDER_NUMBER;
  readonly payload: number | undefined;
}

export interface IOrderSuccess {
  readonly type: typeof ORDER_NUMBER_SUCCESS;
  readonly payload: boolean;
}

export interface IOrderError {
  readonly type: typeof ORDER_NUMBER_ERROR;
  readonly payload: boolean;
}

export interface IUpdateToken {
  readonly type: typeof UPDATE_TOKEN;
  readonly payload: TToken;
}

export interface IUpdateTokenSuccess {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly payload: boolean;
}

export interface IUpdateTokenError {
  readonly type: typeof UPDATE_TOKEN_ERROR;
  readonly payload: boolean;
}

export interface IUserRequest {
  readonly type: typeof USER_REQUEST;
  readonly payload: TUser;
}

export interface IUserSuccess {
  readonly type: typeof USER_SUCCESS;
  readonly payload: boolean;
}

export interface IUserError {
  readonly type: typeof USER_ERROR;
  readonly payload: boolean;
}


// ------------
export interface IWsConnectionStart{
    readonly type: typeof WS_CONNECTION_START;
    payload: string;
  }
  
  export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
  }
  export interface IWsGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    payload: WSData;
  }
  export interface IWsSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
    payload: string;
  }
  export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
  }
  export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
  }
  
  export interface IWsConnectionEnd {
    readonly type: typeof WS_CONNECTION_END;
  }


  export type TTodoActions = 
    | IGetConstractor 
    | IFetchIngredientsID 
    | IFetchIngredients 
    | IFetchIngredientsState 
    | IFetchIngredientsError 
    | IFetchIngredientsRequest 
    | IAddIngredientDetails
    | IDeleteIngredientDetails
    | ILoginRequest 
    | ILoginSuccess 
    | ILoginError 
    | ILogout 
    | ILogoutSuccess 
    | ILogoutError 
    | IRegisterRequest 
    | IRegisterSuccess 
    | IRegisterError 
    | IOrderNumber 
    | IOrderSuccess 
    | IOrderError 
    | IUpdateToken 
    | IUpdateTokenSuccess 
    | IUpdateTokenError 
    | IUserRequest 
    | IUserSuccess 
    | IUserError 
    | IWsConnectionStart
    | IWsConnectionSuccess 
    | IWsGetMessage 
    | IWsSendMessage 
    | IWsConnectionError 
    | IWsConnectionClosed 
    | IWsConnectionEnd;