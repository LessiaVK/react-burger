import React from 'react';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/Modal';

function BurgerConstructor(props) {
  // const [current, setCurrent] = React.useState('one')
  const [showProps, setShowProps] = React.useState(false);
  return (
    <div  style={{ display: 'flex',flexDirection: 'column',}}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', 
      overflowY:"scroll", height:"70vh", marginTop: '100px'}}>
       {props.data.map((element ,key )=> {
        return  (<ConstructorElement
        type={element.type}
        key={key}
        isLocked={true}
        text={element.name}
        price={element.price}
        thumbnail={element.image}
      />)
      })} 
  </div>
      <div>
        123
          <Button htmlType="button" type="primary" size="medium" onClick={e => {setShowProps(true)}}>
                Оформить заказ
          </Button>
          <Button htmlType="button" type="primary" size="medium" onClick={e => {setShowProps(true)}}>
                Оформить заказ
          </Button>


      </div>
      {showProps && 
        <Modal modalProps="modalId" overflow = "visible" caption="Инградиент" close= {setShowProps} >
        12345
        </Modal>}
  </div>
  );
}

export default BurgerConstructor;
