import { actionOrderDetails } from "./actions/orderDetails";
import { BASE_URL } from "../utils/constants";
import { actionGetData } from "./actions/getIngredients";
import { actionRegisterRequest } from "./actions/register";
import { actionLoginRequest } from "./actions/login";
import { getCookie, setCookie, deleteCookie } from "../utils/cookie";
import { actionLogoutRequest } from "./actions/logout";
import { actionUserRequest } from "./actions/user";
import { actionUpdateToken } from "./actions/token";

const timeExpires = 20 * 60;

//  для получения данных о пользователе
export function getDataUser(navigate) {
  return function (dispatch) {
    dispatch(actionUserRequest.userRequest());
    fetch(BASE_URL + "/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+getCookie("token"),
      }
    })
      .then((res) => {
        console.log("res",res);
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
  };
}

//  для обновления данных о пользователе
export function getUpdateUser(form) {
  return function (dispatch) {
    dispatch(actionUserRequest.userRequest());
    fetch(BASE_URL + "/auth/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+getCookie("token"),  // ?????????
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
  };
}

//  для обновления токена
export function getUpdateToken(navigate) {
  return function (dispatch) {
    dispatch(actionUpdateToken.updateToken());
    fetch(BASE_URL + "/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"token": getCookie("refreshToken")}),
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
        // console.log("codeRequest data", data);
        let authToken = data.accessToken.split("Bearer ")[1];
        if (authToken) {
          setCookie("token", authToken, { expires: timeExpires });
        }
        setCookie("refreshToken", data.refreshToken, {});
        // data.success && navigate("/login", { replace: true });
      })
      .catch((err) => {
        dispatch(actionUpdateToken.updateTokenError());
      });
  };
}

//  для выхода из системы
export function getLogout(navigate) {
  return function (dispatch) {
    dispatch(actionLoginRequest.loginRequest());
    fetch(BASE_URL + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: getCookie("token"),  // ?????????
      },
      body: JSON.stringify({"token": getCookie("refreshToken")}),
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        } else {
          dispatch(actionLogoutRequest.logoutError());
        }
      })
      .then((data) => {
        dispatch(actionLogoutRequest.logoutSuccess(data));
        // console.log("codeRequest data", data);
        deleteCookie('token');
        deleteCookie('refreshToken');
        dispatch(actionLoginRequest.loginRequest());
        data.success && dispatch(actionUserRequest.userSuccess({user:{}}));
        data.success && navigate("/login", { replace: true });
      })
      .catch((err) => {
        dispatch(actionLogoutRequest.logoutError());
      });
  };
}

//  авторизации
export function getLoginRequest(form, navigate) {
  return function (dispatch) {
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
        dispatch(actionLoginRequest.loginSuccess(data));
        // console.log("codeRequest data", data);
        let authToken = data.accessToken.split("Bearer ")[1];
        if (authToken) {
          setCookie("token", authToken, { expires: timeExpires });
        }
        setCookie("refreshToken", data.refreshToken, {});
        data.success && dispatch(actionUserRequest.userSuccess(data));
        data.success && navigate("/", { replace: true });
      })
      .catch((err) => {
        dispatch(actionLoginRequest.loginError());
      });
  };
}

//  для регистрации пользователя
export function getRegisterRequest(form, navigate) {
  return function (dispatch) {
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
        // console.log("codeRequest data", data);
        let authToken = data.accessToken.split("Bearer ")[1];
        if (authToken) {
          setCookie("token", authToken, { expires: timeExpires });
        }
        setCookie("refreshToken", data.refreshToken, {});
        data.success && dispatch(actionUserRequest.userSuccess(data));
        data.success && navigate("/login", { replace: true });
      })
      .catch((err) => {
        dispatch(actionRegisterRequest.registerError());
      });
  };
}

export function getIngredients() {
  return function (dispatch) {
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
        dispatch(actionGetData.fetchIngredientsState(json.data));
      })
      .catch((err) => {
        dispatch(actionGetData.fetchIngredientsError());
      });
  };
}

export function getOrderNumber(orderDetailsID) {
  return function (dispatch) {
    dispatch(actionOrderDetails.orderNumber());

    fetch(BASE_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
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
