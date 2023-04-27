import React from "react";
import modalStyles from "./Modal.module.css";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "../../utils/hooks";
import { FC } from "react";

type TModalOverlayProps = {
  handleClose?: () => void | undefined;
};

const ModalOverlay: FC<TModalOverlayProps> = ({ handleClose }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
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
