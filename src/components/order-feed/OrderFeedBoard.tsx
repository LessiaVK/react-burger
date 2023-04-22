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

  const ReadyOrders =
    props.orders &&
    props.orders.filter((item: TOrderFeed) => item.status === "done");
  const WorkOrders =
    props.orders &&
    props.orders.filter((item: TOrderFeed) => item.status === "pending");

  const onClickOrder = () => {};

  return (
    <div>
      {/* <p className={oFStyles.main + " text text_type_main-large pb-10 pt-10"}>
        Лента заказов
      </p> */}
      <div className={oFStyles.ofFlex}>
        {/* <Orders data={data} onClick={onClickOrder} className={oFStyles.ofScroll} /> */}
        {/* {props.orders.map((val : any,index: any) => ( */}

        {/* // <div
            // key={val._id}
            // >
            //   {val.name}
            // </div> */}

        <div className={oFStyles.mainRow}>
          <div className={oFStyles.mainColumn}>
            <div className={oFStyles.mainRow}>
              <p className={"text text_type_main-medium pb-10 pt-10"}>Готовы:</p>
              <ul className={oFStyles.feed_list}>
                {ReadyOrders.map((item: TOrderFeed, index: number) => {
                  if (index < 10) {
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
            </div>

            <div className={oFStyles.mainRow}>
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
            </div>

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

          <div>
            <p className={oFStyles.feed_orders_title}>
              Выполнено за все время:
            </p>
            <p className={oFStyles.feed_orders_count}>
              {/* ttt */}
              {/* {wsDataOrders.data ? wsDataOrders.data.total - 1 : "none"} */}
            </p>
          </div>
          <div>
            <p className={oFStyles.feed_orders_title}>Выполнено за сегодня:</p>
            <p className={oFStyles.feed_orders_count}>
              {/* ttt */}
              {/* {wsDataOrders.data ? wsDataOrders.data.totalToday - 1 : "none"} */}
            </p>
          </div>
        </div>

        {/* ) */}
        {/* )} */}
      </div>
    </div>
  );
}

export default OrderFeedBoard;
