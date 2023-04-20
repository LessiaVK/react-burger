import React from "react";
import modalStyles from "./Modal.module.css";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { getOrderNumber } from "../../services/thunks";

type TModalOverlayProps = {
  handleClose?: () => void | undefined;
};

const ModalOverlay: FC<TModalOverlayProps> = ({ handleClose }) => {
  const dispatch = useDispatch() as any;

  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
        // dispatch(actionIngredientDetails.deleteIngredientDetails());
        if (typeof handleClose === "function") {
          handleClose();
        } else {
          dispatch(actionOrderDetails.orderNumber(0));
          // dispatch(getOrderNumber());
        }
      }}
    ></div>
  );
};

export default ModalOverlay;
