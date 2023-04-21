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
    console.log("wsUrl",wsUrl);
    
    dispatch(wsConnectionStart(wsUrl));
    return () => {
      console.log("wsClose----");
      
      // dispatch({ type: wsActions.wsClose });
    };
  }, [dispatch]);

  // React.useEffect(() => {
  //   console.log("wsDataOrders1",wsDataOrders1);
  // }, [wsDataOrders1]);

  const dataOrders = wsDataOrders1 && wsDataOrders1 ;
  // const ReadyOrders =
  //   dataOrders && dataOrders.filter((item: TOrder) => item.status === "done");
  // const WorkOrders =
  //   dataOrders &&
  //   dataOrders.filter((item: TOrder) => item.status === "pending");
  
  const orders = wsDataOrders["orders"]   ? wsDataOrders.orders : [];
  console.log("dataOrders",wsDataOrders,orders);
  return (
    <div className="text text_type_main-large pt-10">
      Список заказов
      {orders.map((val : any,index: any) => (
            <div
            key={val._id}
            >
              {val.name}
            </div>
          ))}
      {/* arr.map() */}
    </div>
  );
}
