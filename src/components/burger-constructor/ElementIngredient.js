import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

export const ElementIngredient =  (props) => {
    const [{ opacity }, dragRef] = useDrag({
        type: 'ingredient', 
        item: { ...props },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.3 : 1
        })
      })

return (
    <div ref={dragRef}>
                <DragIcon type="primary" />
                <ConstructorElement
                  key={props.key}
                  text={props.text}
                  price={props.price}
                  thumbnail={props.thumbnail}
                  handleClose={props.onDell}
                />
              </div>
)
}