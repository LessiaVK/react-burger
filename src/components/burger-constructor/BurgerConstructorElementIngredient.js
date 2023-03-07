import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useRef, useCallback } from "react";
import { actionBurgerCompound } from "../../services/actions/burgerСompound";
import { useDispatch, useSelector } from "react-redux";
import { constructorSelector } from "../../services/selectors";

export const ElementIngredient = (props) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector(constructorSelector);

  const moveCard = useCallback(
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

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      // console.log("useDrop", props.index, item.index, monitor);
      if (props.index != item.index) {
        moveCard(props.index, item.index);
        item.index = props.index;
      }
    },
  });
  dragRef(dropRef(ref));

  return (
    <div ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        key={props.key}
        text={props.text}
        price={props.price}
        thumbnail={props.thumbnail}
        handleClose={props.onDell}
      />
    </div>
  );
};
