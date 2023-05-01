import React, { useEffect } from "react";
import { useDispatch } from "../utils/hooks";
import { useNavigate } from "react-router-dom";

import { OrderFeedDetails } from "../components/order-feed/OrderFeedDetails";
import { getDataUser } from "../services/thunks";

import fStyles from "./FeedPage.module.css";

import { getCookie } from "../utils/cookie";
import { getUpdateToken } from "../services/thunks";
import { PATH_LOGIN, PATH_WSURLCUSTOMER } from "../utils/constants";
import { wsConnectionStart } from "../services/actions/wsActions";
import { wsActions } from "../services/store";

export default function OrderCustomerPage() {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && getCookie("refreshToken")) {
      dispatch(getUpdateToken(getDataUser()));
    } else if (token) getDataUser();
    else navigate(PATH_LOGIN, { replace: true });
  }, []);

  React.useEffect(() => {
    if (token) {
      dispatch(wsConnectionStart(PATH_WSURLCUSTOMER + "?token=" + token));
    }
    return () => {
      dispatch({ type: wsActions.wsClose });
    };
  }, [dispatch]);

  return (
    <div className={fStyles.contentCenter}>
      <OrderFeedDetails />
    </div>
  );
}
