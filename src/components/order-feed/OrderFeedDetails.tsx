import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";

import oFStyles from "./OrderFeed.module.css";
import { ingredientsSelector } from "../../services/selectors";
import { TOrderFeed } from "./OrderFeed";
import { wsOrders } from "../../services/selectors";
import { TIngredient } from "../burger-ingredients/BurgerIngredients";

type TListIngr = {
  ingredients: TIngredient[];
  sumPrices: number;
  createdAt: string;
};

const ListIngredients = (props: TListIngr) => {
  const listIngrs: TIngredient[] = props.ingredients;
  const listIngrsCount: any = [];
  listIngrs.map((item) => {
    if (item) {
      if (listIngrsCount[item._id]) {
        listIngrsCount[item._id].count++;
      } else {
        listIngrsCount[item._id] = item;
        listIngrsCount[item._id].count = 1;
      }
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
                  {item.name}
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
            {props.sumPrices}
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
      return String(item.number) === id;
    });
  }

  const ingredientsBurger = data[0].ingredients;

  const ingredientsResolver = useMemo(() => {
    let imageList: TIngredient[] = [];
    if (dataIngradients.length > 0) {
      imageList = ingredientsBurger.map((idIngredient: string) => {
        const v = dataIngradients.filter((item) => {
          return item._id === idIngredient;
        });
        return v[0];
      });
    }
    return imageList;
  }, [dataIngradients, ingredientsBurger]);

  const sumPrices = useMemo(() => {
    let priceTot = 0;
    if (ingredientsResolver.length > 0) {
      ingredientsResolver.forEach((element) => {
        if (element) priceTot = element.price;
      });
    };
      return priceTot;
  }, [ingredientsResolver]);

  return (
    <div
      className={
        oFStyles.mainColumn + " " + oFStyles.wOrders + " " + oFStyles.toSub
      }
    >
      {data[0] && (
        <>
          <div
            className={
              oFStyles.contentLeft + " text text_type_digits-default pl-10"
            }
          >
            {"#" + data[0].number}
          </div>
          <div
            className={
              oFStyles.alignLeft +
              " text text_type_main-medium pl-10 pr-10 pb-3 pt-5"
            }
          >
            {"#" + data[0].name}
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
          {sumPrices && (
            <ListIngredients
              ingredients={ingredientsResolver}
              sumPrices={sumPrices}
              createdAt={data[0].createdAt}
            />
          )}
        </>
      )}
    </div>
  );
};
