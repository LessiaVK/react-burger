import React from 'react';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

import bIStyles from './BurgerIngredients.module.css';
// import { log } from 'console';

const ElementMenu = (props) => {
  return (
    <div key={props.key} className={bIStyles.setka}
      style={{width:"280px"}}
      onClick={el => {props.onSetShowProps(true)} }>
      <img className={bIStyles.size_icon} src={props.element.image} alt=''/>
      <p className={`text text_type_digits-default`}> 
          {props.element.price} &nbsp;
          <CurrencyIcon style={{width: '22', height: '22'}} type='primary' />
      </p>
      <p>
      {props.element.name}
      </p>
    </div>
  )
}

ElementMenu.propTypes = {
  element: PropTypes.object
}; 

const ShowIngredients = (props) => {
  // console.log(props.data);
  const dataForShow = props.data.filter(elem => elem.type === props.type);


  return (
      <>
      <div style={{display:'flex', flex:'none', justifyContent:'flex-start'}}>
          <p className="text text_type_main-medium p-10">
            {props.name}
          </p>
      </div>
      <div style={{display:"flex",flexWrap:"wrap", width:"600px"}}>
      {dataForShow.map((element, key) => {
          let keyId= props.type+key;
          console.log("keyId",keyId);

          return <ElementMenu 
          //  key={keyId}
           element={element} onSetShowProps={props.onSetShowProps}/>
      })}
      </div>  
      </>
  )
}


function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  const [showProps, setShowProps] = React.useState(false);
  return (
    <div>
        <p className="text text_type_main-large p-10" style={{display:'flex', flex:'none', justifyContent:'flex-start'}}>
          Соберите бургер
        </p>
        <div style={{ display: 'flex' }}> 
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
        <div style={{overflowY:"scroll", height:"90vh"}}>
          <ShowIngredients name="Булки" type="bun"     data={props.data} onSetShowProps={setShowProps}/>
          <ShowIngredients name="Соусы" type="sauce"   data={props.data}/>
          <ShowIngredients name="Начинки"  type="main" data={props.data}/>
          </div>
        {showProps && <Modal modalProps="modalId" overflow = "visible" caption="Инградиент" close= {setShowProps} />}
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array 
}; 

export default BurgerIngredients;
