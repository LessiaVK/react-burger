import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { useLocation } from "react-router-dom";
import { wsConnectionStart } from "../services/actions/wsActions";
import { wsUrl, wsActions } from "../services/store";
import { log } from "console";
import { wsOrders, wsConnected } from "../services/selectors";
import fStyles from "./FeedPage.module.css";
import OrderFeed from "../components/order-feed/OrderFeed";
import OrderFeedBoard from "../components/order-feed/OrderFeedBoard";

export function FeedPage() {
  const dispatch = useAppDispatch();
  // const { wsDataOrders1 } = useAppSelector(wsOrders);
  const { wsDataOrders1 } = useSelector(wsOrders) as any;

  const { wsDataOrders, wsConnected } = useAppSelector((store) => ({
    wsDataOrders: store.wsReducer.orders,
    wsConnected: store.wsReducer.wsConnected,
  }));

  // const { wsDataOrders1, wsConnectedSuccess2 } = useAppSelector((wsOrders, wsConnected) => ({
  //   //ttt
  //   // wsDataOrders: store.ws.data,
  //   // wsConnected: store.ws.wsConnected,
  //   wsDataOrders: [],
  //   wsConnected: false,
  // }));
  const location = useLocation();

  React.useEffect(() => {
    console.log("wsUrl", wsUrl);

    dispatch(wsConnectionStart(wsUrl));
    return () => {
      console.log("wsClose----");

      // dispatch({ type: wsActions.wsClose });
    };
  }, [dispatch]);

  // React.useEffect(() => {
  //   console.log("wsDataOrders1",wsDataOrders1);
  // }, [wsDataOrders1]);

  const dataOrders = wsDataOrders1 && wsDataOrders1;
  // const ReadyOrders =
  //   dataOrders && dataOrders.filter((item: TOrder) => item.status === "done");
  // const WorkOrders =
  //   dataOrders &&
  //   dataOrders.filter((item: TOrder) => item.status === "pending");

  const orders = wsDataOrders["orders"] ? wsDataOrders.orders : [];
  // console.log("dataOrders", wsDataOrders, orders);
  return (
    <div className={fStyles.fMainCol + " " + fStyles.fWBig}>
      <div
        className={fStyles.fWBig + " text text_type_main-large pb-10 pt-10 mb-5"}
      >
        Лента заказов
      </div>
      <div className={fStyles.fMainRow}>
        <div
        className={fStyles.f_order_scroll + " text text_type_main-large "}>
        <OrderFeed orders={orders} />
        </div>
        <div className={fStyles.fWHalf}>
        <OrderFeedBoard dataOrders={dataOrders} />
        </div>
      </div>
      {/* {orders.map((val : any,index: any) => (
            <div
            key={val._id}
            >
              {val.name}
            </div>
          ))} */}
      {/* arr.map() */}
    </div>
  );
}

// <div className={commonStyles.content_panel}>
//   {feed.orders ? (
//     <div className={styles.Feed}>
//       <section className={styles.OrderList}>
//         <p className="text text_type_main-large mb-4">Лента заказов</p>
//         <OrderList />
//       </section>
//       <OrderListInfo />
//     </div>
//   ) : (
//     <p> Идет загрузка... </p>
//   )}
// </div>;
