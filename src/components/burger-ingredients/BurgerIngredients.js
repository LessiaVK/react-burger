import React from 'react';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/Modal';

import bIStyles from './BurgerIngredients.module.css';

const ElementMenu = (props) => {
  return (
    <div className={bIStyles.setka} onClick={el => {props.onSetShowProps(true)} }>
      <img className={bIStyles.size_icon} src={props.element.image} alt=''/>
      <p className={`text text_type_digits-default`}> 
          {props.element.price} &nbsp;
          <CurrencyIcon style={{width: '22', height: '22'}} type='primary' />
      </p>
      {props.element.name}
    </div>
  )
}


const ShowIngredients = (props) => {
  console.log(props.data);
  const dataForShow = props.data.filter(elem => elem.type === props.type);


  return (
      <>
      <p className="text text_type_main-large">
        {props.name}
      </p>
      {dataForShow.map(element => {
          return <ElementMenu element={element} onSetShowProps={props.onSetShowProps}/>
      })}
      </>  
  )
}


function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  const [showProps, setShowProps] = React.useState(false);
  return (
    <div><div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
    <div style={{overflowY:"scroll", height:"70vh"}}>
      <ShowIngredients name="Булки" type="bun"     data={props.data} onSetShowProps={setShowProps}/>
      <ShowIngredients name="Соусы" type="sauce"   data={props.data}/>
      <ShowIngredients name="Начинки"  type="main" data={props.data}/>
      </div>
      {showProps && <Modal modalProps="modalId" caption="Инградиент" close= {setShowProps} />}
    </div>
  );
}

export default BurgerIngredients;
