import { actionOrderDetails } from "./actions/orderDetails";
import { BASE_URL } from "../utils/constants";
import { actionGetData } from "./actions/getIngredients";
import { actionRegisterRequest } from "./actions/register";
import { actionLoginRequest } from "./actions/login";
import { getCookie, setCookie, deleteCookie } from "../utils/cookie";
import { actionLogoutRequest } from "./actions/logout";
import { actionUserRequest } from "./actions/user";
import { actionUpdateToken } from "./actions/token";
import { PATH_LOGIN } from "../utils/constants";
import { TTodoActions } from "./actions/todo";
import { ThunkAction } from "redux-thunk";
import { NavigateFunction } from "react-router";
import { TDataUser } from "./reducers/todo";
import { RootState, AppDispatch } from "../utils/hooks";
import { TFormEmail } from "../pages/LoginPage";

type TApplicationActions = TTodoActions;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

const timeExpires = 20 * 60;

//  для обновления токена
export function getUpdateToken(callback: any) {
  return function (dispatch: AppDispatch) {
    let refreshToken = getCookie("refreshToken");
    dispatch(actionUpdateToken.updateToken());
    fetch(BASE_URL + "/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionUpdateToken.updateTokenError());
        }
      })
      .then((data) => {
        dispatch(actionUpdateToken.updateTokenSuccess(data));
        let authToken = data.accessToken.split("Bearer ")[1];
        if (authToken) {
          setCookie("token", authToken, { path: "/", expires: timeExpires });
        }
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        dispatch(callback);
      })
      .catch((err) => {
        dispatch(actionUpdateToken.updateTokenError());
      });
  };
}

//  для получения данных о пользователе
export function getDataUser(navigate: NavigateFunction) {
  return function (dispatch: AppDispatch) {
    let token = getCookie("token");
    if (token) {
      dispatch(actionUserRequest.userRequest());
      fetch(BASE_URL + "/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          if (res && res.ok) {
            return res.json();
          } else {
            dispatch(actionUserRequest.userError());
          }
        })
        .then((data) => {
          dispatch(actionUserRequest.userSuccess(data));
          dispatch(actionLoginRequest.loginSuccess());
        })
        .catch((err) => {
          dispatch(actionUserRequest.userError());
        });
    }
  };
}

//  для обновления данных о пользователе
export function getUpdateUser(form: TDataUser) {
  return function (dispatch: AppDispatch) {
    let token = getCookie("token");
    if (token) {
      dispatch(actionUserRequest.userRequest());
      fetch(BASE_URL + "/auth/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookie("token"),
        },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (res && res.ok) {
            return res.json();
          } else {
            dispatch(actionUserRequest.userError());
          }
        })
        .then((data) => {
          dispatch(actionUserRequest.userSuccess(data));
        })
        .catch((err) => {
          dispatch(actionUserRequest.userError());
        });
    }
  };
}

//  для выхода из системы
export function getLogout(navigate: NavigateFunction) {
  return function (dispatch: AppDispatch) {
    dispatch(actionLoginRequest.loginRequest());
    fetch(BASE_URL + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionLogoutRequest.logoutError());
        }
      })
      .then((data) => {
        dispatch(actionLogoutRequest.logoutSuccess());
        deleteCookie("token", { path: "/" });
        deleteCookie("refreshToken", { path: "/" });
        dispatch(actionLoginRequest.loginRequest());
        setCookie("forgot", "0", {});
        data.success && dispatch(actionUserRequest.userSuccess(data));
        data.success && navigate(PATH_LOGIN, { replace: true });
      })
      .catch((err) => {
        dispatch(actionLogoutRequest.logoutError());
      });
  };
}

//  авторизации
export function getLoginRequest(form: TFormEmail, navigate: NavigateFunction) {
  return function (dispatch: AppDispatch) {
    dispatch(actionLoginRequest.loginRequest());
    fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionLoginRequest.loginError());
        }
      })
      .then((data) => {
        dispatch(actionLoginRequest.loginSuccess());
        let authToken = data.accessToken.split("Bearer ")[1];
        if (authToken) {
          setCookie("token", authToken, { path: "/", expires: timeExpires });
        }
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        data.success && dispatch(actionUserRequest.userSuccess(data));
        // data.success && navigate("/", { replace: true });
      })
      .catch((err) => {
        dispatch(actionLoginRequest.loginError());
      });
  };
}

//  для регистрации пользователя
export function getRegisterRequest(form: TDataUser, navigate: NavigateFunction) {
  return function (dispatch: AppDispatch) {
    dispatch(actionRegisterRequest.registerRequest());
    fetch(BASE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionRegisterRequest.registerError());
        }
      })
      .then((data) => {
        dispatch(actionRegisterRequest.registerSuccess(data));
        let authToken = data.accessToken.split("Bearer ")[1];
        if (authToken) {
          setCookie("token", authToken, { path: "/", expires: timeExpires });
        }
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        data.success && dispatch(actionUserRequest.userSuccess(data));
        data.success && navigate(PATH_LOGIN, { replace: true });
      })
      .catch((err) => {
        dispatch(actionRegisterRequest.registerError());
      });
  };
}

export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch(actionGetData.fetchIngredientsRequest());

    fetch(BASE_URL + "/ingredients")
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionGetData.fetchIngredientsError());
        }
      })
      .then((json) => {
        dispatch(actionGetData.fetchIngredients(json.data));
      })
      .catch((err) => {
        dispatch(actionGetData.fetchIngredientsError());
      });
  };
}

export function getOrderNumber(orderDetailsID: ReadonlyArray<number>) {
  return function (dispatch: AppDispatch) {
    dispatch(actionOrderDetails.orderNumber());

    fetch(BASE_URL + "/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        ingredients: orderDetailsID,
      }),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionOrderDetails.orderNumberError());
        }
      })
      .then((json) => {
        dispatch(actionOrderDetails.orderNumberSuccess(json.order.number));
      })
      .catch((err) => {
        dispatch(actionOrderDetails.orderNumberError());
      });
  };
}
