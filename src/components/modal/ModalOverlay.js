import React from "react";
import modalStyles from "./Modal.module.css";
import { actionIngredientDetails } from "../../services/actions/ingredientDetails";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  const dispatch = useDispatch();
  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
        // dispatch(actionIngredientDetails.deleteIngredientDetails());
        if (props.onClick) {
          props.onClick(e);
        } else {
          dispatch(actionOrderDetails.orderNumber());
        }
      }}
    ></div>
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};

export default ModalOverlay;
