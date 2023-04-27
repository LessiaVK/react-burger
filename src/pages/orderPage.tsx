import React from "react";
import { useSelector, useDispatch } from "../utils/hooks";

import { getIngredients } from "../services/thunks";
import { OrderFeedDetails } from "../components/order-feed/OrderFeedDetails";

import fStyles from "./FeedPage.module.css";

import { wsDataIsReady } from "../services/selectors";
import { wsConnectionStart } from "../services/actions/wsActions";
import { PATH_WSURL } from "../utils/constants";
import { wsActions } from "../services/store";

export default function OrderPage() {
  const dispatch = useDispatch();
  const wsDataReady = useSelector(wsDataIsReady);

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);

  React.useEffect(() => {
    if (!wsDataReady)
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
