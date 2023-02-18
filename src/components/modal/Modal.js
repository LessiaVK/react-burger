import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";

function Modal(props) {
  // const [current, setCurrent] = React.useState('one')
  let element = document.getElementById(props.modalProps);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        props.close();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay close={props.close} />
      <div className={modalStyles.modal_window}>
        <div className={modalStyles.cap + " text text_type_main-large p-10"}>
          <p>{props.caption} </p>
          <div className={modalStyles.close} 
            onClick={(el) => {
              props.close();
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

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  modalProps: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  caption: PropTypes.string,
};
