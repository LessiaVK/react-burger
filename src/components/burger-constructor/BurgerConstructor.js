import React from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  CheckMarkIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/Modal";
import bCStyles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";

function OrderDetails() {
  return (
    <div className={bCStyles.text}>
      <p className="text text_type_digits-large p-4">034536</p>
      <p className="text text_type_main-medium p-8">идентификатор заказа</p>

      <div className="p-15">
        {/* <CheckMarkIcon type="primary" /> */}
        <img width="80px" src="./check.svg" alt="" />
      </div>

      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive p-2 mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

function BurgerConstructor(props) {
  // const [current, setCurrent] = React.useState('one')
  const [showProps, setShowProps] = React.useState(false);
  const close = () => {
    setShowProps(false);
  };
  let t = new Date();
  let time = t.getTime().toString();
  let elementBorder;
  props.data.map((element, key) => {
    if (element.type == "bun" && !elementBorder) {
      elementBorder = element;
    }
  });
  return (
    <div className={bCStyles.bgMain}>
      <div className={bCStyles.bgListStart + " ml-10 mb-2"}>
        {elementBorder && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${elementBorder.name} (верх)`}
            price={elementBorder.price}
            thumbnail={elementBorder.image_mobile}
            extraClass="ml-6"
          />
        )}
      </div>
      <div className={bCStyles.bgList + " ml-10"}>
        {props.data.map((element, key) => {
          if (element.type !== "bun") {
            let keyId = key + time;
            return (
              <div key={keyId}>
                <DragIcon type="primary" />
                <ConstructorElement
                  key={key}
                  text={element.name}
                  price={element.price}
                  thumbnail={element.image}
                />
              </div>
            );
          }
        })}
      </div>

      {elementBorder && (
        <div className="ml-10 mt-2">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${elementBorder.name} (низ)`}
            price={elementBorder.price}
            thumbnail={elementBorder.image_mobile}
            extraClass="ml-6"
          />
        </div>
      )}
      <div className={bCStyles.bgFooter + " p-4 ml-10"}>
        <div className={`text text_type_digits-default p-5`}>
          <div className={bCStyles.scale_1_5}>
            610 &nbsp;
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={(e) => {
            setShowProps(true);
          }}
        >
          Оформить заказ
        </Button>
      </div>
      {showProps && (
        <Modal
          className={bCStyles.bgMain}
          modalProps="modals"
          caption=""
          close={close}
        >
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerConstructor;
