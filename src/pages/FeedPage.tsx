import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "../utils/hooks";
import { wsConnectionStart } from "../services/actions/wsActions";
import fStyles from "./FeedPage.module.css";
import OrderFeed from "../components/order-feed/OrderFeed";
import OrderFeedBoard from "../components/order-feed/OrderFeedBoard";
import { PATH_WSURL } from "../utils/constants";
import { wsActions } from "../services/store";
import { isModal } from "../services/selectors";
import { actionOrderDetails } from "../services/actions/orderDetails";

export function FeedPage() {
  const dispatch = useDispatch();
  const modal = useSelector(isModal);
  const location = useLocation();

  const { wsDataOrders } = useSelector((store) => ({
    wsDataOrders: store.wsReducer.orders,
  }));

  React.useEffect(() => {
    if (!modal && location.state == null) {
      dispatch(wsConnectionStart(PATH_WSURL));

      return () => {
        dispatch({ type: wsActions.wsClose });
      };
    } else {
      dispatch(actionOrderDetails.noModal());
    }
  }, [dispatch]);

  const orders = wsDataOrders["orders"] ? wsDataOrders.orders : [];

  return (
    <div className={fStyles.fMainCol + " " + fStyles.fWBig}>
      <div
        className={
          fStyles.fWBig + " text text_type_main-large pl-6 pb-10 pt-10 mb-1"
        }
      >
        Лента заказов
      </div>
      <div className={fStyles.fMainRow}>
        <div className={fStyles.f_order_scroll + " text text_type_main-large "}>
          <OrderFeed orders={orders} />
        </div>
        <div className={fStyles.fWHalf}>
          <OrderFeedBoard dataOrders={wsDataOrders} />
        </div>
      </div>
    </div>
  );
}
