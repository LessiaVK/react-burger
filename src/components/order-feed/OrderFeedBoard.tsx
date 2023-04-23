import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/Modal";

import oFStyles from "./OrderFeed.module.css";
import {
  ingredientsSelector,
  constructorSelector,
  currentIngredientSelector,
} from "../../services/selectors";
import { PATH_INGREDIENTS } from "../../utils/constants";
import { RefObject } from "react";
import { StringLiteralLike } from "typescript";
import { OrderFeedDetails } from "./OrderFeedDetails";
import { log } from "console";

const exampleOrder = {
  success: true,
  orders: [
    {
      ingredients: [
        "60d3463f7034a000269f45e7",
        "60d3463f7034a000269f45e9",
        "60d3463f7034a000269f45e8",
        "60d3463f7034a000269f45ea",
      ],
      _id: "",
      status: "done",
      number: 0,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
  ],
  total: 1,
  totalToday: 1,
};

export type TOrderFeed = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

export type TDataIngr = {
  _id?: string | any;
  name?: string;
  ref1?: RefObject<HTMLParagraphElement>;
  type?: string;
  image?: string;
  price?: string;
  data?: any;
  index?: string;
  text?: string;
  key?: string;
};

type TOrdersProps = {
  data: any;
  onClick: () => void;
  className: string;
};

const Orders = (props: TOrdersProps) => {
  return props.data;
};

function OrderFeedBoard(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const data = useSelector(ingredientsSelector);
  // const currentOrder = useSelector(currentOrderSelector);
  console.log("OrderFeedBoard", props);
  let ReadyOrders = [];
  let WorkOrders = [];
  if (props.dataOrders) {
    console.log("dataOrders", props.dataOrders);
    ReadyOrders =
    props.dataOrders["orders"] ?
    props.dataOrders.orders.filter((item: TOrderFeed) => item.status === "done") : [];
   WorkOrders =
    props.dataOrders["orders"] ?
    props.dataOrders.orders.filter((item: TOrderFeed) => item.status === "pending") : [];
  } 
  console.log("ReadyOrders",ReadyOrders);
  
  const onClickOrder = () => {};

  return (
    <div>
      <div className={oFStyles.mainColumn + " " + oFStyles.wOrders}>
          <div className={oFStyles.mainRow + " " + oFStyles.hOrders}>
            <div className={oFStyles.mainColumn}>
              <p className={"text text_type_main-medium pb-10 pt-10"}>Готовы:</p>
              <ul className={"text text_type_digit-medium pb-10 pt-10"}>
                
                {ReadyOrders.map((item: TOrderFeed, index: number) => {
                  if (index < 10) {
                     return (
                      <li
                        className={oFStyles.colorOrders}
                        key={item._id}
                      >
                       {item.number}
                      </li>
                     );
                  }
                //   return null;
                })}
              </ul>
            </div>

            {/* <div className={oFStyles.mainRow}>
              <p className={"text text_type_main-medium pb-10 pt-10"}>Готовы:</p>
              <ul className={oFStyles.feed_list}>
                {ReadyOrders.map((item: TOrderFeed, index: number) => {
                  if (index > 9 && index < 20) {
                    return (
                      <li
                        className={oFStyles.feed_orders_ready_item}
                        key={item._id}
                      >
                        {item.number}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div> */}

            <div className={oFStyles.mainRow}>
              <p className={"text text_type_main-medium pb-10 pt-10"}>В работе:</p>
              <ul className={""}>
                {WorkOrders.map((item: TOrderFeed, index: number) => {
                  if (index > 10) {
                    return null;
                  }
                  return (
                    <li
                      className={oFStyles.feed_orders_work_item}
                      key={item._id}
                    >
                      {item.number}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div >
            <p className={"text text_type_main-medium pt-10"}>
              Выполнено за все время:
            </p>
            <p className={"text text_type_digits-large"}>
              {(props.dataOrders) ? props.dataOrders.total : ""}
              {/* ttt */}
              {/* {wsDataOrders.data ? wsDataOrders.data.total - 1 : "none"} */}
            </p>
          </div>
          <div>
            <p className={"text text_type_main-medium"}>Выполнено за сегодня:</p>
            <p className={"text text_type_digits-large"}>
              {/* ttt */}
              {/* {wsDataOrders.data ? wsDataOrders.data.totalToday - 1 : "none"} */}
              {(props.dataOrders.totalToday) && props.dataOrders.totalToday}
            </p>
          </div>
       
      </div>
    </div>
  );
}

export default OrderFeedBoard;
