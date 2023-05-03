import { useEffect } from "react";
import { useDispatch } from "../utils/hooks";

import { OrderFeedDetails } from "../components/order-feed/OrderFeedDetails";

import fStyles from "./FeedPage.module.css";

import { getCookie } from "../utils/cookie";
import { PATH_WSURLCUSTOMER } from "../utils/constants";
import { wsConnectionStart } from "../services/actions/wsActions";
import { wsActions } from "../services/store";

export default function OrderCustomerPage() {
  let token = getCookie("token");
  const dispatch = useDispatch();

  useEffect(() => {
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
