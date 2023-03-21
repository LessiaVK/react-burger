import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

import bIStyles from "./BurgerIngredients.module.css";
import {
  ingredientsSelector,
  constructorSelector,
  currentIngredientSelector,
} from "../../services/selectors";
import { useDrag } from "react-dnd";
import { actionIngredientDetails } from "../../services/actions/ingredientDetails";

export const IngredientDetails = () => {
  let element = useSelector(currentIngredientSelector);
  const dataIngradients = useSelector(ingredientsSelector);
  let { id } = useParams();
  if (id) {
    let data = dataIngradients.filter((item) => item._id == id);
    if (data.length == 1) {
      console.log("data", data[0]);
      element = data[0];
    }
  }

  return (
    <div className={bIStyles.sizeMain + " mb-10"}>
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
    </div>
  );
};

const ElementMenu = (props) => {
  const orderList = useSelector(constructorSelector);
  const dispatch = useDispatch();
  const location = useLocation();
  const count = orderList.filter(
    (item) => item._id == props.element._id
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
        pathname: `/ingredients/${props.element._id}`,
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
            <Counter count={count} className="m-1" size="default" />
          )}
        </div>
        <div className={bIStyles.bIDescription}>
          <p
            className={`constructor-element__price text text_type_digits-default`}
          >
            {props.element.price}
            <CurrencyIcon className={bIStyles.sizeIcon} type="primary" />
          </p>
          <p>{props.element.name}</p>
        </div>
      </div>
    </Link>
  );
};

ElementMenu.propTypes = {
  element: PropTypes.object.isRequired,
  tempId: PropTypes.string.isRequired,
};

const ShowIngredients = (props) => {
  const data = useSelector(ingredientsSelector);
  const dataForShow = data.filter((elem) => elem.type === props.type);
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
        {dataForShow.map((element, key) => {
          let keyId = props.type + key + time;

          return (
            <ElementMenu key={element._id} tempId={keyId} element={element} />
          );
        })}
      </div>
    </>
  );
};

function BurgerIngredients(props) {
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null); //represents main section
  const location = useLocation();
  const navigate = useNavigate();
  const data = useSelector(ingredientsSelector);
  const currentIngredient = useSelector(currentIngredientSelector);
  const [current, setCurrent] = React.useState("one");

  const groupList = document.querySelectorAll("[data-group]");
  const arrTab = ["one", "two", "three"];
  const scroll = () => {
    const scrolltop = document.getElementById("ShowIngredients").scrollTop;
    let groupListArr = [...groupList];
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

  const handleScroll = (ref) => {
    let elem = document.getElementById("ShowIngredients");
    elem.scrollTo({
      top: ref.offsetTop - elem.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const onClickTab = (e) => {
    setCurrent(e);
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
        <ShowIngredients name="Булки" type="bun" data={data} ref1={bunRef} />
        <ShowIngredients
          name="Соусы"
          type="sauce"
          data={data}
          ref1={sauceRef}
        />
        <ShowIngredients
          name="Начинки"
          type="main"
          data={data}
          ref1={mainRef}
        />
      </div>
      {location.state && (
        <Modal
          onClick={(e) => {
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
