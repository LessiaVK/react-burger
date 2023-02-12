import React , { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Tab, CurrencyIcon,CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './Modal.module.css';
import ModalOverlay from './ModalOverlay';
import PropTypes from 'prop-types';

function Modal(props) {
  // const [current, setCurrent] = React.useState('one')
  let element = document.getElementById(props.modalProps);

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        // console.log('Close')
        props.close(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return createPortal(
    <>
     {props.overflow !== "hidden" &&
      <ModalOverlay close={props.close} />
     }
      <div className={ModalStyles.modal_window} >
      <div className={ModalStyles.caption} >
        <p>{props.caption} </p>
        <div onClick={el => {props.close(false)}}>
        <CloseIcon type="primary" />
        </div>
      </div>
          {props.children}
      </div>
    </>
  ,element);
}

export default Modal;


Modal.propTypes = {
  close: PropTypes.func.isRequired,
  caption: PropTypes.string

}; 
