import React from 'react';
import { createPortal } from 'react-dom';
import { Tab, CurrencyIcon,CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './Modal.module.css';


function Modal(props) {
  // const [current, setCurrent] = React.useState('one')
  let element = document.getElementById(props.modalProps);
  return createPortal(
    <div className={ModalStyles.modal_window} >
    <div className={ModalStyles.caption} >
      <p>{props.caption} </p>
      <div onClick={el => {props.close(false)}}>
      <CloseIcon type="primary" />
      </div>
    </div>
      
        modal Window
    </div>
  ,element);
}

export default Modal;
