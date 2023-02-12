import React from 'react';
import { createPortal } from 'react-dom';
import { Tab, CurrencyIcon,CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './Modal.module.css';

function ModalOverlay(props) {
  // const [current, setCurrent] = React.useState('one')
  let element = document.getElementById(props.modalProps);
  return (
    <div className={ModalStyles.overlay} onClick={e => {props.close(false)}} >
    
    </div>
     
 );
}

export default ModalOverlay;
