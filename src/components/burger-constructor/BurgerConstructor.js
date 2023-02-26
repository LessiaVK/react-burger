import React, { useEffect } from "react";
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
import { DataContext } from "../../services/AppContext.js";
import { checkResponse } from "../../utils/checkResponse";
import { BASE_URL } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  constructorSelector,
  fetchIngredientsSelector,
  fetchcurrentItemsID,
  orderNumber,
} from "../../services/selectors";
import { useDrop, useDrag } from "react-dnd";
import uuid from "react-uuid";
import { GET_CONSTRUCTOR } from "../../services/actions/actionTypes";
import { ElementIngredient } from "./BurgerConstructorElementIngredient";
import { actionBurgerCompound } from "../../services/actions/burgerСompound";
import { actionOrderDetails } from "../../services/actions/orderDetails";

const priceInitState = { totalPrice: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return { totalPrice: action.price };
    case "increment":
      return { totalPrice: state.totalPrice + action.price };
    case "decrement":
      return { totalPrice: state.totalPrice - action.price };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function OrderDetails() {
  const dispatch = useDispatch();
  const data = useSelector(constructorSelector);
  const listIngredients = useSelector(fetchcurrentItemsID);
  const orderId = useSelector(orderNumber);

  const sendOrder = async (callback) => {
    // const listIngredients = data.data.map((item) => item._id);
    const orderBurger = (listIngredients) => {
      return fetch(BASE_URL + "/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          ingredients: listIngredients,
        }),
      });
    };

    const loadOrderNumber = async (orderBurger, listIngredients, callback) => {
      try {
        orderBurger(listIngredients)
          .then(checkResponse)
          .then((json) => dispatch(callback(json.order.number)));
      } catch (error) {
        console.log("getDataJson", error);
      }
    };

    loadOrderNumber(orderBurger, listIngredients, callback);
  };

  useEffect(() => {
    sendOrder(actionOrderDetails.orderNumber);
  }, [listIngredients]);

  return (
    <div className={bCStyles.text}>
      <p className="text text_type_digits-large p-4">{orderId}</p>
      <p className="text text_type_main-medium p-8">идентификатор заказа</p>

      <div className="p-15">
        {/* <CheckMarkIcon type="primary" /> */}
        <img width="80px" src="./check.svg" alt="Знак 'галочка'" />
      </div>

      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive p-2 mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

const BurgerElement = (props) => {
  const [{ isHover }, dropTargerElementRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item) {
      // console.log("dropTargerElementRef");
      // console.log(item);
    },
  });
  return (
    <div ref={dropTargerElementRef}>
      <ConstructorElement
        type={props.type}
        isLocked={true}
        text={props.text}
        price={props.price}
        thumbnail={props.thumbnail}
        extraClass="ml-6"
      />
    </div>
  );
};

function BurgerConstructor(props) {
  const dispatch = useDispatch();
  const data = useSelector(constructorSelector);
  const orderIngerdiens = useSelector(fetchcurrentItemsID);
  const [showProps, setShowProps] = React.useState(false);
  const close = () => {
    setShowProps(false);
  };

  const [{ handlerId }, drop] = useDrop({
    accept: "ingredient",
    canDrop: true,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    hover(item, monitor) {},
  });

  const [{ isHover }, dropTargerRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item) {
      // console.log("drop", item, data);
      let buter = [];
      let flagNotBun = true;
      if (item.element.type == "bun") {
        let ingred = data.filter((item) => item.type !== "bun");
        buter = [
          { ...item.element, dragId: uuid() },
          ...ingred,
          { ...item.element, dragId: uuid() },
        ];
        flagNotBun = false;
      }
      data.forEach((element, i) => {
        if (element.type == "bun" && item.element.type == "bun") {
          data[i] = item.element;
          flagNotBun = false;
        }
      });
      if (flagNotBun) {
        dispatch(
          actionBurgerCompound.getConstructor([
            ...data,
            { ...item.element, dragId: uuid() },
          ])
        );
      } else {
        dispatch(actionBurgerCompound.getConstructor([...buter]));
      }
    },
  });

  let t = new Date();
  let time = t.getTime().toString();
  let elementBorder;
  data.map((element, key) => {
    if (element.type === "bun" && !elementBorder) {
      elementBorder = element;
    }
  });
  const initTotalPriceState = () => {
    if (elementBorder) {
      let price = elementBorder.price * 2;
      return { totalPrice: price };
    } else {
      return { totalPrice: 0 };
    }
  };
  const [totalPriceState, totalPricetDispatcher] = React.useReducer(
    reducer,
    priceInitState,
    initTotalPriceState
  );

  useEffect(() => {
    let price = initTotalPriceState();
    totalPricetDispatcher({ type: "init", price: price.totalPrice });
    data.map((element, key) => {
      if (element.type !== "bun") {
        let keyId = key + time;
        totalPricetDispatcher({ type: "increment", price: element.price });
      }
    });
  }, [data]);

  const onDeleteIngredient = (e) => {
    let data2 = data.filter(function (element, index, arr) {
      return element.dragId != e.dragId;
    });

    dispatch({
      type: GET_CONSTRUCTOR,
      payload: [...data2],
    });
  };

  return (
    <div className={bCStyles.bgMain} ref={dropTargerRef}>
      <div className={bCStyles.bgListStart + " ml-10 mb-2"}>
        {elementBorder && (
          // <BurgerElement type = "top" />
          <BurgerElement
            type="top"
            isLocked={true}
            text={`${elementBorder.name} (верх)`}
            price={elementBorder.price}
            thumbnail={elementBorder.image_mobile}
            extraClass="ml-6"
          />
        )}
      </div>
      {data.length == 0 && (
        <div className={bCStyles.text + " ml-10"}>
          Соберите свой бургер. Перетащите нужные ингредиенты
        </div>
      )}
      <div className={bCStyles.bgList + " ml-10"}>
        {data.map((element, key) => {
          if (element.type !== "bun") {
            let keyId = key + time;
            return (
              <div key={key}>
                <ElementIngredient
                  keyId={keyId}
                  index={key}
                  text={element.name}
                  price={element.price}
                  thumbnail={element.image}
                  onDell={() => onDeleteIngredient(element)}
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
      <div className={bCStyles.bgFooter + " pt-10 pr-4"}>
        <div className={`text text_type_digits-default pr-10 m-6`}>
          <div className={bCStyles.iconFlexRow + " " + bCStyles.scale_1_5}>
            <>{totalPriceState.totalPrice}</>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={(e) => {
            dispatch(actionBurgerCompound.fetchIngredientsID(data));
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
  // data: PropTypes.array.isRequired,
};

export default BurgerConstructor;
