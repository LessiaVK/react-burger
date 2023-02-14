import React from "react";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

import bIStyles from "./BurgerIngredients.module.css";

const DetailesIngredient = (props) => {
  let elements = props.data.filter((item) => item._id === props.keyForShow);
  let element = {};
  if (elements.length === 1) {
    element = elements[0];
  }
  // console.log("DetailesIngredient", props, element);

  return (
    <div className={bIStyles.sizeMain + " mb-10"}>
      <img className={bIStyles.sizeImg} src={element.image} alt="" />
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

DetailesIngredient.propTypes = {
  data: PropTypes.array.isRequired,
  keyForShow: PropTypes.string.isRequired,
};

const ElementMenu = (props) => {
  // console.log("ElementMenu",props);
  return (
    <div
      key={props.tempId}
      className={bIStyles.elementMenu}
      onClick={(el) => {
        props.onSetShowProps(true);
        console.log("props", props, props.element._id);
        props.onSetCurrentKey(props.element._id);
      }}
    >
      <img src={props.element.image} alt="" />
      <div className={bIStyles.bIDescription}>
        <p className={`text text_type_digits-default`}>
          {props.element.price} &nbsp;
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
  // console.log(props.data);
  const dataForShow = props.data.filter((elem) => elem.type === props.type);
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
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  onSetShowProps: PropTypes.func.isRequired,
  onSetCurrentKey: PropTypes.func.isRequired,
};

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("one");
  const [showProps, setShowProps] = React.useState(false);
  const [currentKey, setCurrentKey] = React.useState("");
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
      <div style={{ overflowY: "scroll", height: "660px" }}>
        <ShowIngredients
          name="Булки"
          type="bun"
          data={props.data}
          onSetShowProps={setShowProps}
          onSetCurrentKey={setCurrentKey}
        />
        <ShowIngredients
          name="Соусы"
          type="sauce"
          data={props.data}
          onSetShowProps={setShowProps}
          onSetCurrentKey={setCurrentKey}
        />
        <ShowIngredients
          name="Начинки"
          type="main"
          data={props.data}
          onSetShowProps={setShowProps}
          onSetCurrentKey={setCurrentKey}
        />
      </div>
      {showProps && (
        <Modal
          modalProps="modals"
          overflow="visible"
          caption="Детали ингредиента"
          key={currentKey}
          close={setShowProps}
        >
          <DetailesIngredient keyForShow={currentKey} data={props.data} />
        </Modal>
      )}
    </div>
  );
}
BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerIngredients;
