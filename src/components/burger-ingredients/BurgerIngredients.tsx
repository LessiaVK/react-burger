import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";
import Modal from "../modal/Modal";

import bIStyles from "./BurgerIngredients.module.css";
import {
  ingredientsSelector,
  constructorSelector,
  currentIngredientSelector,
} from "../../services/selectors";
import { useDrag } from "react-dnd";
import { actionIngredientDetails } from "../../services/actions/ingredientDetails";
import { PATH_INGREDIENTS } from "../../utils/constants";
import { RefObject } from "react";

export type TIngredient = {
  _id?: string | any;
  keyId?: string;
  dragId?: string;
  name?: string;
  type: string;
  image: string;
  image_large: string;
  image_mobile: string;
  price: number;
  index: number;
  text: string;
  thumbnail: string;
  key?: string;
  ref1?: RefObject<HTMLParagraphElement>;
  data?: any;
  handleClose?: () => void;
  calories: string;
  proteins: string;
  fat: string;
  carbohydrates: string;
};

export type TDataIngr = {
  _id?: string | any;
  name?: string;
  ref1?: RefObject<HTMLParagraphElement>;
  type?: string;
  image?: string;
  price: number;
  data?: any;
  index?: string;
  text?: string;
  key?: string;
};

const ShowIngredient = (props:{element: TIngredient}) => {
  const element = props.element;
  return (
    <>
    <img
        className={bIStyles.sizeImg}
        src={element.image}
        alt={"Изображение ингредиента"}
      />
      <p className="text text_type_main-medium m-8">{element.name}</p>
      <div className={bIStyles.bIDescriptionMain}>
        <div className={bIStyles.bIDescription + " mb-15"}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.calories}
          </p>
        </div>
        <div className={bIStyles.bIDescription}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.proteins}
          </p>
        </div>
        <div className={bIStyles.bIDescription}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.fat}
          </p>
        </div>
        <div className={bIStyles.bIDescription}>
          <p className="text text_type_main-default text_color_inactive p-3">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {element.carbohydrates}
          </p>
        </div>
      </div>
    </>
  )
}

export const IngredientDetails = () => {
  let element = useSelector(currentIngredientSelector);
  const dataIngradients = useSelector(ingredientsSelector);
  let { id } = useParams();
  if (id) {
    let data = dataIngradients.filter((item: TIngredient) => item._id == id);
    if (data.length === 1) {
      //console.log("data", data[0]);
      element = data[0];
    }
  }

  return (
    <div className={bIStyles.sizeMain + " mb-10"}>
      {element && <ShowIngredient element={element} />};
    </div>
  );
};

type TElementMenuProps = {
  element: TDataIngr;
  tempId: string;
};

const ElementMenu = (props: TElementMenuProps) => {
  const orderList = useSelector(constructorSelector);
  const location = useLocation();
  const count = orderList.filter(
    (item: TIngredient) => item._id == props.element._id
  ).length;
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { ...props },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.3 : 1,
    }),
  });

  return (
    <Link
      to={{
        pathname: PATH_INGREDIENTS + `/${props.element._id}`,
      }}
      state={{ background: location }}
      key={props.tempId}
      className={bIStyles.elementMenu + " " + bIStyles.textWhite}
      ref={dragRef}
      style={{ opacity }}
    >
      <div className={bIStyles.elementMenu}>
        <img src={props.element.image} alt="Изображение ингредиента" />
        <div className={bIStyles.count}>
          {count > 0 && (
            <Counter count={count} extraClass="m-1" size="default" />
          )}
        </div>
        <div className={bIStyles.bIDescription}>
          <p
            className={`constructor-element__price text text_type_digits-default`}
          >
            {props.element.price}
            <CurrencyIcon
              // className={bIStyles.sizeIcon}
              type="primary"
            />
          </p>
          <p>{props.element.name}</p>
        </div>
      </div>
    </Link>
  );
};

const ShowIngredients = (props: any) => {
  const data = useSelector(ingredientsSelector);
  const dataForShow = data.filter(
    (elem: TIngredient) => elem.type === props.type
  );
  let t = new Date();
  let time = t.getTime().toString();
  return (
    <>
      <div data-group="group" className={bIStyles.main}>
        <p ref={props.ref1} className="text text_type_main-medium pb-10 pt-10">
          {props.name}
        </p>
      </div>
      <div className={bIStyles.bIDescription2}>
        {dataForShow.map((element: any, key: number) => {
          let keyId = props.type + key + time;

          return (
            <ElementMenu key={element._id} tempId={keyId} element={element} />
          );
        })}
      </div>
    </>
  );
};

function BurgerIngredients() {
  const bunRef = React.useRef<HTMLParagraphElement>(null);
  const sauceRef = React.useRef<HTMLParagraphElement>(null);
  const mainRef = React.useRef<HTMLParagraphElement>(null); //represents main section
  const location = useLocation();
  const navigate = useNavigate();
  const data = useSelector(ingredientsSelector);
  const [current, setCurrent] = React.useState("one");

  const groupList = document.querySelectorAll<HTMLElement>("[data-group]");
  const arrTab = ["one", "two", "three"];
  const scroll = () => {
    const st = document.getElementById("ShowIngredients") as HTMLElement;
    const scrolltop = st.scrollTop;
    const groupListArr = Array.from(groupList);
    let selectElement = -1;
    groupListArr.map((item, id) => {
      if (item.offsetTop > scrolltop && selectElement == -1) {
        selectElement = id;
      }
    });
    if (selectElement >= 0) {
      setCurrent(arrTab[selectElement]);
    }
  };

  const handleScroll = (ref: any) => {
    let elem = document.getElementById("ShowIngredients") as HTMLElement;
    elem.scrollTo({
      top: ref.offsetTop - elem.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const onClickTab = (e: string) => {
    setCurrent(e);
    // console.log("onClickTab",e,bunRef);

    switch (e) {
      case "one":
        handleScroll(bunRef.current);
        break;
      case "two":
        handleScroll(sauceRef.current);
        break;
      case "three":
        handleScroll(mainRef.current);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className={bIStyles.main + " text text_type_main-large pb-10 pt-10"}>
        Соберите бургер
      </p>
      <div className={bIStyles.biFlex}>
        <Tab value="one" active={current === "one"} onClick={onClickTab}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={onClickTab}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={onClickTab}>
          Начинки
        </Tab>
      </div>
      <div id="ShowIngredients" className={bIStyles.biScroll} onScroll={scroll}>
        <ShowIngredients
          name="Булки"
          type="bun"
          data={data}
          ref1={bunRef}
          price={0}
        />
        <ShowIngredients
          name="Соусы"
          type="sauce"
          data={data}
          ref1={sauceRef}
          price={0}
        />
        <ShowIngredients
          name="Начинки"
          type="main"
          data={data}
          ref1={mainRef}
          price={0}
        />
      </div>
      {location.state && (
        <Modal
          close={() => {
            navigate(-1);
          }}
          modalProps="modals"
          caption="Детали ингредиента"
        >
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}

export default BurgerIngredients;
