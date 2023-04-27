import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../utils/hooks";
import { getLogout } from "../services/thunks";
import { getDataUser, getUpdateUser } from "../services/thunks";
import { userRequest } from "../services/selectors";

import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from "./ProfilePage.module.css";
import { getCookie } from "../utils/cookie";
import { getUpdateToken } from "../services/thunks";
import { PATH_LOGIN, PATH_PROFILE, PATH_WSURLCUSTOMER, PATH_WSURL } from "../utils/constants";
import { wsActions } from "../services/store";
import { wsConnectionStart } from "../services/actions/wsActions";
import OrderFeed from "../components/order-feed/OrderFeed";
import fStyles from "./FeedPage.module.css";


export function ProfileOrdersPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = getCookie("token");
  console.log("token", token);
  

  useEffect(() => {
    // let token = getCookie("token");
    if (!token && getCookie("refreshToken")) {
      dispatch(getUpdateToken(getDataUser(navigate)));
    } else if (token) getDataUser(navigate);
    else navigate(PATH_LOGIN, { replace: true });
  }, []);

  const { wsDataOrders, wsConnected } = useSelector((store) => ({
    wsDataOrders: store.wsReducer.orders,
    wsConnected: store.wsReducer.wsConnected,
  }));

  React.useEffect(() => {
  //   if (token) {
  //   dispatch(wsConnectionStart(PATH_WSURLCUSTOMER + "?token=" + token));
  // }
    dispatch(wsConnectionStart(PATH_WSURL));
    
    return () => {
      dispatch({ type: wsActions.wsClose });
    };
  }, [dispatch]);

  const orders = wsDataOrders["orders"] ? wsDataOrders.orders : [];
  

  return (
    <div className={profileStyles.inputsFlexRow}>
      <div className={profileStyles.inputsFlexColumn + " mr-15 mt-20"}>
        <p className="pb-4">
          <Link
            to={PATH_PROFILE}
            className={" text text_type_main-medium text_color_inactive"}
          >
            Профиль
          </Link>
        </p>
        <p className="pb-4">
          <Link
            to={PATH_PROFILE + "/orders"}
            className={profileStyles.textWhite + " text text_type_main-medium"}
          >
            История заказов
          </Link>
        </p>
        <div className="pb-4">
          <div
            className="text text_type_main-medium text_color_inactive pt-3"
            onClick={(e) => {
              dispatch(getLogout(navigate));
            }}
          >
            Выход
          </div>
        </div>
        <p
          className={
            profileStyles.wCol +
            " text text_type_main-default text_color_inactive mt-15"
          }
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={fStyles.f_order_scroll + " text text_type_main-large "}>
          <OrderFeed orders={orders} />
        </div>
    </div>
  );
}
