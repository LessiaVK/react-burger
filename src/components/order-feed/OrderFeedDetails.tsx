import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";

import oFStyles from "./OrderFeed.module.css";
import { ingredientsSelector } from "../../services/selectors";
import { TOrderFeed } from "./OrderFeed";
import { wsOrders, wsConnected } from "../../services/selectors";
import { TIngredient } from "../burger-ingredients/BurgerIngredients";

type TIResolver = {
  ingredients: TIngredient[];
  price: number;
};

type TListIngr = {
  ingredients: TIngredient[];
  ids: string[];
  createdAt: string;
};

const ingredientsResolver = (
  ingredients: TIngredient[],
  ids: string[]
): TIResolver => {
  let price: number = 0;
  let imageList: any = [];
  if (ingredients.length > 0) {
    imageList = ids.map((idIngredient) => {
      const v = ingredients.filter((item) => {
        return item._id == idIngredient;
      });
      if (v.length > 0) {
        price = price + v[0].price;
      }
      return v[0];
    });
  }
  return { ingredients: imageList, price: price };
};

const ListIngredients = (props: TListIngr) => {
  const listIngrs: TIResolver = ingredientsResolver(
    props.ingredients,
    props.ids
  );
  const listIngrsCount: any = [];
    
  listIngrs.ingredients.map((item) => {
    if (listIngrsCount[item._id]) {
      listIngrsCount[item._id].count++;
    } else {
      listIngrsCount[item._id] = item;
      listIngrsCount[item._id].count = 1;
    }
  });
  const arr = Object.values(listIngrsCount);

  return (
    <div className={oFStyles.wOrders}>
      <div
        className={
          oFStyles.noXScrol +
          " " +
          oFStyles.wOrdersIngr +
          " " +
          oFStyles.oFeedDetal +
          " ml-10 mr-10"
        }
      >
        {arr.map((item: any, id: number) => {
          return (
            <div
              key={id}
              className={
                oFStyles.wOrdersIngr +
                " " +
                oFStyles.mainRow +
                " " +
                oFStyles.row_between +
                ` pb-3`
              }
            >
              <div
                className={
                  oFStyles.wOrdersAuto +
                  " " +
                  oFStyles.mainRow +
                  " " +
                  oFStyles.row_between
                }
              >
                <div
                  className={oFStyles.sizeImg2 + " constructor-element__price"}
                >
                  <img
                    src={item.image}
                    className={oFStyles.sizePicure}
                    alt="Ингредиент"
                  />
                </div>
                <div className={"text text_type_main-small pl-7"}>
                  {" "}
                  {item.name}{" "}
                </div>
              </div>
              <div
                className={
                  oFStyles.wOrdersAuto + " " + oFStyles.mainRow + ` pr-10 pb-3`
                }
              >
                <div className="text text_type_digits-default pr-3">
                  {item.count + " X " + item.price}
                </div>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={
          oFStyles.mainRow + " " + oFStyles.row_between + " " + oFStyles.w640
        }
      >
        <div
          className={
            " text text_type_main-small text_color_inactive pl-10 pt-10 pb-15"
          }
        >
          <FormattedDate date={new Date(props.createdAt)} />
        </div>

        <div
          className={`constructor-element__price text text_type_main-small pt-7 pb-15`}
        >
          <div className={`text text_type_digits-default`}>
            {listIngrs.price}
          </div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export const OrderFeedDetails = () => {
  const dataIngradients = useSelector(ingredientsSelector);
  const dataOrders = useSelector(wsOrders);

  let { id } = useParams();
  
  let data: TOrderFeed[] = [];
  data[0] = {
    ingredients: [],
    _id: "",
    status: "",
    number: 0,
    createdAt: "",
    updatedAt: "",
    name: "",
  };

  if (dataOrders.orders) {
    data = dataOrders.orders.filter((item: TOrderFeed, index: number) => {
      return String(item.number) == id;
    });
  }

  return (
    <div
      className={
        oFStyles.mainColumn + " " + oFStyles.wOrders + " " + oFStyles.toSub
      }
    >
      <div
        className={
          oFStyles.contentLeft + " text text_type_digits-default pl-10"
        }
      >
        {(data[0].number) && ("#" + data[0].number)}
      </div>
      <div
        className={
          oFStyles.alignLeft +
          " text text_type_main-medium pl-10 pr-10 pb-3 pt-5"
        }
      >
        {data[0].name}
      </div>
      <div
        className={
          oFStyles.alignLeft +
          " " +
          oFStyles.colorOrders +
          " text text_type_main-small pl-10 pr-10 pb-2"
        }
      >
        {data[0].status == "done" ? "Выполнен" : "В работе"}
      </div>
      <div
        className={
          oFStyles.alignLeft +
          " text text_type_main-medium pl-10 pr-10 pb-3 pt-8"
        }
      >
        Состав:
      </div>
      <ListIngredients
        ingredients={dataIngradients}
        ids={data[0].ingredients}
        createdAt={data[0].createdAt}
      />
    </div>
  );
};
