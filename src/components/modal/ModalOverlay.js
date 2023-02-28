import React from "react";
import modalStyles from "./Modal.module.css";
import { actionIngredientDetails } from "../../services/actions/ingredientDetails";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "react-redux";

function ModalOverlay() {
  const dispatch = useDispatch();
  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
        dispatch(actionIngredientDetails.deleteIngredientDetails());
        dispatch(actionOrderDetails.orderNumber());
      }}
    ></div>
  );
}

export default ModalOverlay;
