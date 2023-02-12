import React from 'react';
import { ConstructorElement, Button, CurrencyIcon, CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/Modal';



function BurgerConstructor(props) {
  // const [current, setCurrent] = React.useState('one')
  const [showProps, setShowProps] = React.useState(false);
  return (
    <div  style={{ display: 'flex',flexDirection: 'column',}}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', 
      overflowY:"scroll", height:"70vh", marginTop: '140px'}}>
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
      <div className='p-4' style={{ display: 'flex',justifyContent: 'center',
    alignItems: 'center',
    width:"600px"}}>
        <p>
        <p className={`text text_type_digits-medium p-6`}> 
          600&nbsp;
          <CurrencyIcon style={{width: '22', height: '22'}} type='primary' />
      </p>
        </p>
          <Button htmlType="button" type="primary" size="medium" onClick={e => {setShowProps(true)}}>
                Оформить заказ
          </Button>


      </div>
      {showProps && 
        <Modal modalProps="modalId" overflow = "visible" caption="" close= {setShowProps} >
            <p className='text text_type_digits-large p-4'>
                034536
            </p>
            <p className='text text_type_main-medium p-8'>
                идентификатор заказа
            </p>
            <div className='p-12'> 
                <CheckMarkIcon style={{width: '120px', height: '120px'}} type='primary' />
            </div>
            <p className='text text_type_main-default'>
                Ваш заказ начали готовить
            </p>
            <p className='text text_type_main-default  text_color_inactive p-2'>
                Дождитесь готовности на орбитальной станции
            </p>
          
        </Modal>}
  </div>
  );
}

export default BurgerConstructor;
