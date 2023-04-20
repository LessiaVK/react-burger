import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
  FormattedDate
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
  "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3463f7034a000269f45e7",
          "60d3463f7034a000269f45e9",
          "60d3463f7034a000269f45e8",
          "60d3463f7034a000269f45ea"
        ],
        "_id": "",
        "status": "done",
        "number": 0,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
  } ],
  "total": 1,
    "totalToday": 1
}

export type TOrderFeed {
  ingredients: string[],
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string
};

export type TDataIngr = {
  _id?: string | any;
  name?: string;
  ref1?: RefObject<HTMLParagraphElement>;
  type?: string;
  image?: string;
  price?: string;
  data?: any;
  index?:string;
  text?:string;
  key?:string;
};

type TOrdersProps = {
  data: any;
  onClick: () => void;
  className: string;
};

const Orders = (props: TOrdersProps) => {
  props.data.
}

function OrderFeed() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = useSelector(ingredientsSelector);
  const currentOrder = useSelector(currentOrderSelector);
  
  const onClickOrder = () => {

  }
  
  return (
    <div>
      <p className={oFStyles.main + " text text_type_main-large pb-10 pt-10"}>
        Лента заказов
      </p>
      <div className={oFStyles.ofFlex}>
        <Orders data={data} onClick={onClickOrder} className={oFStyles.ofScroll} />
      </div>
      {location.state && (
        <Modal
          close={() => {
            navigate(-1);
          }}
          modalProps="modals"
          caption="Детали ингредиента"
        >
          <OrderFeedDetails />
        </Modal>
      )}
    </div>
  );
}

export default OrderFeed;
