import React from "react";
import { useSelector, useDispatch } from "../utils/hooks";
import { wsConnectionStart } from "../services/actions/wsActions";
import fStyles from "./FeedPage.module.css";
import OrderFeed from "../components/order-feed/OrderFeed";
import OrderFeedBoard from "../components/order-feed/OrderFeedBoard";
import { PATH_WSURL } from "../utils/constants";

export function FeedPage() {
  const dispatch = useDispatch();

  const { wsDataOrders } = useSelector((store) => ({
    wsDataOrders: store.wsReducer.orders,
  }));

  React.useEffect(() => {
    dispatch(wsConnectionStart(PATH_WSURL));
    /* eslint-disable */
  }, []);

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
