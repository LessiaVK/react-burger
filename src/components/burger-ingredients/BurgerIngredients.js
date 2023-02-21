import React from "react";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

import bIStyles from "./BurgerIngredients.module.css";
import { DataContext } from "../../services/AppContext.js";

const IngredientDetails = (props) => {
  const { data } = React.useContext(DataContext);
  let elements = data.filter((item) => item._id === props.keyForShow);
  let element = {};
  if (elements.length === 1) {
    element = elements[0];
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

IngredientDetails.propTypes = {
  // data: PropTypes.array.isRequired,
  keyForShow: PropTypes.string.isRequired,
};

const ElementMenu = (props) => {
  return (
    <div
      key={props.tempId}
      className={bIStyles.elementMenu}
      onClick={(el) => {
        props.onSetShowProps(true);
        props.onSetCurrentKey(props.element._id);
      }}
    >
      <img src={props.element.image} alt="Изображение ингредиента" />
      {/* {props.count > 0 && <Counter count={props.count} className='m-1' size='default'/>} */}
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
  );
};

ElementMenu.propTypes = {
  element: PropTypes.object.isRequired,
  tempId: PropTypes.string.isRequired,
};

const ShowIngredients = (props) => {
  const { data } = React.useContext(DataContext);
  // console.log(props.data);
  const dataForShow = data.filter((elem) => elem.type === props.type);
  let t = new Date();
  let time = t.getTime().toString();
  return (
    <>
      <div className={bIStyles.main}>
        <p className="text text_type_main-medium pb-10 pt-10">{props.name}</p>
      </div>
      <div className={bIStyles.bIDescription2}>
        {dataForShow.map((element, key) => {
          let keyId = props.type + key + time;

          return (
            <ElementMenu
              key={element._id}
              tempId={keyId}
              element={element}
              onSetShowProps={props.onSetShowProps}
              onSetCurrentKey={props.onSetCurrentKey}
            />
          );
        })}
      </div>
    </>
  );
};
ShowIngredients.propTypes = {
  // data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  onSetShowProps: PropTypes.func.isRequired,
  onSetCurrentKey: PropTypes.func.isRequired,
};

function BurgerIngredients(props) {
  const { data } = React.useContext(DataContext);
  const [current, setCurrent] = React.useState("one");
  const [showProps, setShowProps] = React.useState(false);
  const [currentKey, setCurrentKey] = React.useState("");
  const close = () => {
    setShowProps(false);
  };

  return (
    <div>
      <p className={bIStyles.main + " text text_type_main-large pb-10 pt-10"}>
        Соберите бургер
      </p>
      <div className={bIStyles.biFlex}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={bIStyles.biScroll}>
        <ShowIngredients
          name="Булки"
          type="bun"
          data={data}
          onSetShowProps={setShowProps}
          onSetCurrentKey={setCurrentKey}
        />
        <ShowIngredients
          name="Соусы"
          type="sauce"
          data={data}
          onSetShowProps={setShowProps}
          onSetCurrentKey={setCurrentKey}
        />
        <ShowIngredients
          name="Начинки"
          type="main"
          data={data}
          onSetShowProps={setShowProps}
          onSetCurrentKey={setCurrentKey}
        />
      </div>
      {showProps && (
        <Modal
          modalProps="modals"
          caption="Детали ингредиента"
          key={currentKey}
          close={close}
        >
          <IngredientDetails keyForShow={currentKey} />
        </Modal>
      )}
    </div>
  );
}
BurgerIngredients.propTypes = {
  // data: PropTypes.array.isRequired,
};

export default BurgerIngredients;
