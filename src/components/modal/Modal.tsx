import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay";
import { actionOrderDetails } from "../../services/actions/orderDetails";
import { useDispatch } from "../../utils/hooks";
import { ReactNode } from "react";

type TModalProps = {
  modalProps: string;
  close?: () => void;
  caption?: string;
  onClick?: () => void;
  handleClose?: () => void;
  children?: ReactNode;
};

function Modal(props: TModalProps) {
  const dispatch = useDispatch();
  const element = document.getElementById(props.modalProps) as
    | Element
    | DocumentFragment;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (props.close) {
          props.close();
        }
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []); // notice the empty array hear, this is optional

  return createPortal(
    <>
      <ModalOverlay handleClose={props.close} />
      <div className={modalStyles.modal_window} test-id="modals">
        <div className={modalStyles.cap + " text text_type_main-large p-10"}>
          <p>{props.caption} </p>
          <div
            className={modalStyles.close}
            test-id="modalClose"
            onClick={(e) => {
              dispatch(actionOrderDetails.isModal());
              if (props.handleClose) {
                props.handleClose();
              } else if (props.close) {
                props.close();
              } else {
                dispatch(actionOrderDetails.orderNumber());
              }
            }}
          >
            <CloseIcon type="primary" />
          </div>
        </div>
        {props.children}
      </div>
    </>,
    element
  );
}

export default Modal;
