import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../utils/hooks";

import { ingredientsSelector } from "../services/selectors";

import { getIngredients } from "../services/thunks";
import { OrderFeedDetails } from "../components/order-feed/OrderFeedDetails";

import { wsDataIsReady } from "../services/selectors";
import { wsConnectionStart } from "../services/actions/wsActions";
import { wsUrl, wsActions } from "../services/store";


export default function OrderPage() {
  const dispatch = useAppDispatch();
  const wsDataReady = useAppSelector(wsDataIsReady);

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);

  React.useEffect(() => {
    // console.log("wsUrl", wsUrl);
    // if (!wsDataReady) 
    dispatch(wsConnectionStart(wsUrl));
    return () => {
      // console.log("wsClose----");

      // dispatch({ type: wsActions.wsClose });
    };
  }, [dispatch]);

  
  return (
    <>
      <OrderFeedDetails />
    </>
  );
}
