import React from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  // const [current, setCurrent] = React.useState('one')
  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
        props.close(false);
      }}
    ></div>
  );
}

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ModalOverlay;
