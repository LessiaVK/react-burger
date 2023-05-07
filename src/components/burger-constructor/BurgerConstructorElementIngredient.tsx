import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useRef, useCallback } from "react";
import { actionBurgerCompound } from "../../services/actions/burgerСompound";
import { useDispatch, useSelector } from "../../utils/hooks";
import { constructorSelector } from "../../services/selectors";
import { TIngredientBurger } from "./BurgerConstructor";
import { TIngredient } from "../burger-ingredients/BurgerIngredients";

type TDnDCallBack = (dragIndex: number, hoverIndex: number) => any;

export const ElementIngredient = (props: TIngredientBurger) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const data: TIngredient[] = useSelector(constructorSelector);

  const moveCard = useCallback<TDnDCallBack>(
    (dragIndex, hoverIndex) => {
      const dragCard = data[dragIndex];
      const newCards = [...data];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      dispatch(actionBurgerCompound.getConstructor(newCards));
    },
    [data]
  );

  const [{ opacity }, dragRef] = useDrag({
    type: "fraction",
    item: { ...props },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: "fraction",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      if (props.index !== item.index) {
        moveCard(props.index, item.index);
        item.index = props.index;
      }
    },
  });
  dragRef(dropRef(ref));

  return (
    <div test-id="buter" ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        key={props.keyId}
        text={props.text}
        price={props.price}
        thumbnail={props.thumbnail ? props.thumbnail : ""}
        handleClose={props.handleClose}
      />
    </div>
  );
};
