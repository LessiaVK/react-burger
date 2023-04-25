import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";

import oFStyles from "./OrderFeed.module.css";
import {
  ingredientsSelector,
  constructorSelector,
  currentIngredientSelector,
} from "../../services/selectors";
import { TOrderFeed } from "./OrderFeed";
import { wsOrders, wsConnected } from "../../services/selectors";
import { TDataIngr } from "../burger-ingredients/BurgerIngredients";

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

type TIResolver = {
  ingredients: TDataIngr[];
  price: number;
};

type TOrderIngr = {
  ingredients: TDataIngr[];
  ids: string[];
  createdAt: string;
};

const ingredientsResolver = (
  ingredients: TDataIngr[],
  ids: string[]
): TIResolver => {
  // console.log("ImageListIngredients",props.dataIngradients, props.ingredients);
  let price: number = 0;
  let imageList: TDataIngr[] = [];
  if (ingredients.length > 0) {
    // console.log("ingredients",ingredients,ids);

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

const ListIngredients = (props: TOrderIngr) => {
  const listIngrs: TIResolver = ingredientsResolver(
    props.ingredients,
    props.ids
  );
  const listIngrsCount: any = [];
  // console.log("listIngrs.ingredients",listIngrs.ingredients);

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
      <div className={oFStyles.wOrders + " " + oFStyles.oFeedDetal}>
        {arr.map((item: any) => {
          return (
            <div
              className={
                oFStyles.wOrders80 + " " + oFStyles.mainRow + " " + oFStyles.row_between + ` pl-20 pb-3`
              }
            >
              <div className={
                oFStyles.wOrdersAuto + " " + oFStyles.mainRow + " " + oFStyles.row_between
              }>
                <div
                  className={oFStyles.sizeImg + " constructor-element__price"}
                >
                  <img
                    src={item.image}
                    className={oFStyles.sizePicure}
                    alt="Ингредиент"
                  />
                </div>
                <div className={`text text_type_main-small pl-20`}> {item.name} </div>
              </div>
              <div className={
                oFStyles.wOrdersAuto + " " + oFStyles.mainRow + ` pl-10 pr-10 pb-3`
              }>
              <div className={`text text_type_digits-small pr-2`}>
                {item.count + " X " + listIngrs.price}
                </div>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={
          oFStyles.mainRow + " " + oFStyles.row_between
        }
      >
        <div className={"text text_type_main-small text_color_inactive pl-10 pt-10 pb-15"}>
          <FormattedDate date={new Date(props.createdAt)} />
        </div>

        <div
          className={`constructor-element__price text text_type_digits-small pr-10 pt-7 pb-15`}
        >
          <div className={`text text_type_digits-small pr-2`}>{listIngrs.price}</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export const OrderFeedDetails = () => {
  const dataIngradients = useAppSelector(ingredientsSelector);
  const dataOrders = useAppSelector(wsOrders);
  // console.log("dataOrders", dataOrders);

  let { id } = useParams();
  // console.log("useParams", id, dataOrders);
  const data = dataOrders.orders.filter((item: TOrderFeed, index: number) => {
    // console.log("OrderFeedDetails item", item);
    if (String(item.number) == id) return item;
    return {};
  });
  // console.log("OrderFeedDetails data", data);

  // if (id) {
  //   let data = dataOrders.filter((item: TOrderFeed) => item._id == id);
  //   if (data.length === 1) {

  //   }
  // }
  // if (id_ingr) {
  //   let data = dataIngradients.filter((item: TDataIngr) => item._id == id_ingr);
  //   if (data.length === 1) {

  //   }
  // }

  return (
    <div
      className={
        oFStyles.mainColumn + " " + oFStyles.wOrders + " " + oFStyles.toSub
      }
    >
      <div className={oFStyles.alignCenter + " text text_type_digits-medium"}>
        #{data[0].number}
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
      {/* <div className={"text text_type_main-small text_color_inactive pl-10 pr-10 mb-10"} >
          <FormattedDate date={new Date(data[0].createdAt)} />
      </div> */}

      {/* <img
        className={oFStyles.sizeImg}
        src={element.image}
        alt={"Изображение ингредиента"}
      />
      <p className="text text_type_main-medium m-8">{element.name}</p>
      <div className={oFStyles.DescriptionMain}>
        <div className={oFStyles.Description + " mb-15"}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.calories}
          </p>
        </div>
        <div className={oFStyles.Description}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.proteins}
          </p>
        </div>
        <div className={oFStyles.Description}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.fat}
          </p>
        </div>
        <div className={oFStyles.Description}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.carbohydrates}
          </p>
        </div>
      </div> */}
    </div>
  );
};
