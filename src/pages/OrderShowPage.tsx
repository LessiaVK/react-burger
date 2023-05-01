import React from "react";
import { useDispatch } from "../utils/hooks";

import { OrderFeedDetails } from "../components/order-feed/OrderFeedDetails";

import fStyles from "./FeedPage.module.css";

import { wsConnectionStart } from "../services/actions/wsActions";
import { PATH_WSURL } from "../utils/constants";
import { wsActions } from "../services/store";

export default function OrderPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(wsConnectionStart(PATH_WSURL));
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
