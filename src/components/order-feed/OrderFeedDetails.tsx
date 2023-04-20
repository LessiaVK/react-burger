import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
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
import { TOrderFeed } from "./OrderFeed";

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

export const OrderFeedDetails = () => {
  let element = useSelector(currentOrderSelector) as any;
  const dataIngradients = useSelector(ingredientsSelector) as any;
  let { id } = useParams();
  if (id) {
    let data = dataIngradients.filter((item: TOrderFeed) => item._id == id);
    if (data.length === 1) {
      //console.log("data", data[0]);
      element = data[0];
    }
  }

  return (
    <div className={oFStyles.sizeMain + " mb-10"}>
      <img
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
      </div>
    </div>
  );
};
