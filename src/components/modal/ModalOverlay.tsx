import React from "react";
import modalStyles from "./Modal.module.css";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "react-redux";
import { FC } from "react";

type TModalOverlayProps = {
  onModalClick: () => void;
};

const ModalOverlay: FC<TModalOverlayProps> = ({ onModalClick }) => {
  const dispatch = useDispatch() as any;

  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
        // dispatch(actionIngredientDetails.deleteIngredientDetails());
        if (typeof onModalClick === "function") {
          onModalClick();
        } else {
          dispatch(actionOrderDetails.orderNumber());
        }
      }}
    ></div>
  );
};

export default ModalOverlay;
