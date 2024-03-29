import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/Modal";
import bCStyles from "./BurgerConstructor.module.css";
import { useSelector, useDispatch } from "../../utils/hooks";
import {
  constructorSelector,
  currentItemsIDSelector,
  orderNumber,
  orderRequest,
  orderFailed,
} from "../../services/selectors";
import { useDrop } from "react-dnd";
import uuid from "react-uuid";
import { GET_CONSTRUCTOR } from "../../services/actions/actionTypes";
import { ElementIngredient } from "./BurgerConstructorElementIngredient";
import { actionBurgerCompound } from "../../services/actions/burgerСompound";
import { getOrderNumber } from "../../services/thunks";
import { loginSuccess } from "../../services/selectors";
import { PATH_LOGIN } from "../../utils/constants";
import { TIngredient } from "../burger-ingredients/BurgerIngredients";
const priceInitState = { totalPrice: 0 };

interface IState {
  totalPrice: number;
}

interface IAction {
  price: number;
  type: "init" | "increment" | "decrement";
}

export type TIngredientBurger = {
  index: number;
  keyId: string | undefined;
  text: string;
  thumbnail: string | undefined;
  price: number;
  type?: "top" | "bottom";
  isLocked?: boolean;
  extraClass?: string;
  image_mobile?: any;
  handleClose?: () => void;
};

function reducer(state: IState, action: IAction) {
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
  const orderId = useSelector(orderNumber);

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

const BurgerElement = (props: TIngredientBurger) => {
  const [{ isHover }, dropTargerElementRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item) {
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
        thumbnail={props.thumbnail ? props.thumbnail : ""}
        extraClass="ml-6"
      />
    </div>
  );
};

function BurgerConstructor() {
  const dispatch = useDispatch();
  const data = useSelector(constructorSelector);
  const orderDetailsID = useSelector(currentItemsIDSelector);
  const orderIdRequest = useSelector(orderRequest);
  const orderIdFailed = useSelector(orderFailed);

  const isUserLogin = useSelector(loginSuccess);
  const navigate = useNavigate();

  const [{ handlerId }, drop] = useDrop({
    accept: "ingredient",
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

    drop(item: any) {
      let buter: TIngredient[] = [];
      let flagNotBun = true;
      if (item.element.type === "bun") {
        let ingred = data.filter((item: TIngredient) => item.type !== "bun");
        buter = [
          { ...item.element, dragId: uuid() },
          ...ingred,
          { ...item.element, dragId: uuid() },
        ];
        flagNotBun = false;
      }
      data.forEach((element: TIngredient, index: number) => {
        if (element.type === "bun" && item.element.type === "bun") {
          data[index] = item.element;
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
  let elementBorder: TIngredient | undefined;
  data.map((element: TIngredient) => {
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
    data.map((element: TIngredient) => {
      if (element.type !== "bun") {
        totalPricetDispatcher({ type: "increment", price: element.price });
      }
    });
    /* eslint-disable */
  }, [data]);

  const onDeleteIngredient = (e: TIngredient) => {
    let data2 = data.filter(
      (element: TIngredient, index: number) => element.dragId !== e.dragId
    );

    dispatch({
      type: GET_CONSTRUCTOR,
      payload: [...data2],
    });
  };

  return (
    <div className={bCStyles.bgMain} ref={dropTargerRef} test-id="buter">
      <div className={bCStyles.bgListStart + " ml-10 mb-2"}>
        {elementBorder && (
          <BurgerElement
            type="top"
            index={elementBorder.index}
            // isLocked={true}
            text={`${elementBorder.name} (верх)`}
            price={elementBorder.price}
            thumbnail={elementBorder.image_mobile}
            // extraClass="ml-6"
            keyId={"0"}
          />
        )}
      </div>
      {data.length === 0 && (
        <div
          className={bCStyles.text + " text text_type_main-default ml-10"}
          test-id="emptyBurger"
        >
          Соберите свой бургер. Перетащите нужные ингредиенты
        </div>
      )}
      <div className={bCStyles.bgList + " ml-10"}>
        {data.map((element: TIngredient, index: number) => {
          if (element.type !== "bun") {
            let keyId = index + time;
            return (
              <div key={index}>
                <ElementIngredient
                  keyId={keyId}
                  index={index}
                  text={element.name ? element.name : ""}
                  price={element.price}
                  thumbnail={element.image}
                  handleClose={() => onDeleteIngredient(element)}
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
            if (isUserLogin) {
              totalPriceState.totalPrice > 0 &&
                dispatch(getOrderNumber(orderDetailsID));
            } else {
              navigate(PATH_LOGIN);
            }
          }}
        >
          Оформить заказ
        </Button>
      </div>
      {!orderIdRequest && !orderIdFailed && (
        <Modal modalProps="modals" caption="">
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default BurgerConstructor;
