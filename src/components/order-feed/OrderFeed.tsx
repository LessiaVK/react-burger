import React, { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";
import Modal from "../modal/Modal";

import oFStyles from "./OrderFeed.module.css";
import { ingredientsSelector } from "../../services/selectors";
import { OrderFeedDetails } from "./OrderFeedDetails";
import { TIngredient } from "../burger-ingredients/BurgerIngredients";
import { TOPZINDEX } from "../../utils/constants";

export type TOrderFeed = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  count?: number;
};

type TOrdersProps = {
  data: TOrderFeed;
  keyIndex: number;
};

const ImageListIngredients = (props: {
  dataIngradients: TIngredient[];
  ingredients: string[];
}) => {
  
  const ingredientsResolver = useMemo(() => {
    let imageList: TIngredient[] = [];
    if (props.dataIngradients.length > 0) {
      imageList = props.ingredients.map((idIngredient: string) => {
        const v = props.dataIngradients.filter((item) => {
          return item._id === idIngredient;
        });
        return v[0];
      });
    }
    return imageList;
  }, [props.dataIngradients, props.ingredients]);

  const sumPrices = useMemo(() => {
    let priceTot = 0;
    if (ingredientsResolver.length > 0) {
      ingredientsResolver.forEach((element) => {
        if (element) priceTot = element.price;
      });
    };
      return priceTot;
  }, [ingredientsResolver]);

  let countBun = 0;
  let maxCount = 0;
  let additionalNumber = 0;
  let imageList: TIngredient[] = [];

  imageList = ingredientsResolver.filter((item: TIngredient) => {
    if (item) {
      if (item.type === "bun") {
        countBun++;
      }
      maxCount++;
      if (maxCount > 5 && item.type !== "bun") {
        additionalNumber++;
      }

      return (item.type !== "bun" || countBun === 1) && maxCount <= 5;
    }
  });

  return (
    <>
      <div className={"text text_type_digits-default  " + oFStyles.imageList}>
        {imageList.map((item: any, index: Number) => {
          const n: Number = TOPZINDEX - Number(index);
          const zIndex: React.CSSProperties = { zIndex: n.toString() };

          return (
            <div
              key={index.toString()}
              className={oFStyles.sizeImg}
              style={zIndex}
            >
              <img
                src={item.image}
                className={oFStyles.sizePicure}
                alt="Ингредиент"
              />
            </div>
          );
        })}
        {additionalNumber > 0 && (
          <div className={oFStyles.sizeImg}>
            <div className={oFStyles.numberInfo}>{additionalNumber}</div>
          </div>
        )}
      </div>
      <div className={"text text_type_main-small  "}>
        <p
          className={`constructor-element__price text text_type_digits-default`}
        >
          {sumPrices}
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </>
  );
};

const Orders = (props: TOrdersProps) => {
  const dataIngradients = useSelector(ingredientsSelector);
  let showStatus = window.location.pathname === "/profile/orders";
  let style = " ";
  let statusOrder = " ";
  switch (props.data.status) {
    case "done":
      statusOrder = "Выполнен";
      style = oFStyles.colorOrders;
      break;
    case "created":
      statusOrder = "Создан";
      style = oFStyles.colorOrdersRed;
      break;
    case "pending":
      statusOrder = "В работе";
      break;
    default:
      break;
  }

  return (
    <div
      key={props.keyIndex + "w1"}
      className={oFStyles.mainColumn + " " + oFStyles.itemOrderBackground}
    >
      <div className={oFStyles.mainRow + " " + oFStyles.row_between}>
        <div className={"text text_type_digits-default  "}>
          #{props.data.number}
        </div>
        <div className={"text text_type_main-small text_color_inactive "}>
          <FormattedDate date={new Date(props.data.createdAt)} />
        </div>
      </div>
      <div
        className={"text text_type_main-medium pb-2 pt-5 " + oFStyles.caption}
        key={props.data._id}
      >
        {props.data.name}
      </div>
      {showStatus && (
        <div className={"text text_type_main-small pb-7 " + style}>
          {statusOrder}
        </div>
      )}
      <div className={oFStyles.mainRow + " " + oFStyles.row_between}>
        <ImageListIngredients
          dataIngradients={dataIngradients}
          ingredients={props.data.ingredients}
        />
      </div>
    </div>
  );
};

function OrderFeed(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
 
  return (
    <div>
      {props.orders.map((ordersElement: TOrderFeed, index: number) => (
        <Link
          key={index}
          to={{
            pathname: location.pathname + `/${ordersElement.number}`,
          }}
          state={{ background: location }}
          className={oFStyles.elementMenu + " " + oFStyles.textWhite}
        >
          <Orders data={ordersElement} keyIndex={index} />
        </Link>
      ))}

      {location.state && (
        <Modal
          close={() => {
            navigate(-1);
          }}
          modalProps="modals"
          caption=""
        >
          <OrderFeedDetails />
        </Modal>
      )}
    </div>
  );
}

export default OrderFeed;
