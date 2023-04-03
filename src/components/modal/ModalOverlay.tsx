import React from "react";
import modalStyles from "./Modal.module.css";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "react-redux";
import { FC } from "react";

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
          dispatch(actionOrderDetails.orderNumber());
        }
      }}
    ></div>
  );
};

export default ModalOverlay;
