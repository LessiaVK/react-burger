import React from 'react';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

import bIStyles from './BurgerIngredients.module.css';


const DetailesIngredient = (props) => {
 
  let elements = props.data.filter(item=>item._id == props.keyForShow);
  let element = {};
  if (elements.length == 1) {
    element = elements[0]
  }
  // console.log("DetailesIngredient", props, element);
  

  return (
    <div style={{width:"520px"}} >
      <img style={{width:"480px"}} src={element.image} alt=''/>
      <p>
      {element.name}
      </p>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <p className='text text_type_main-default text_color_inactive p-3'> Калории, ккал </p>
          <p className='text text_type_digits-default text_color_inactive'> {element.calories} </p>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <p className='text text_type_main-default text_color_inactive p-3'> Белки, г </p>
          <p className='text text_type_digits-default text_color_inactive'> {element.proteins} </p>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <p className='text text_type_main-default text_color_inactive p-3'> Жиры, г </p>
          <p className='text text_type_digits-default text_color_inactive'> {element.fat} </p>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <p className='text text_type_main-default text_color_inactive p-3'> Углеводы, г </p>
          <p className='text text_type_digits-default text_color_inactive'> {element.carbohydrates} </p>
        </div>

      </div>
    </div>
  )
}

const ElementMenu = (props) => {
  // console.log("ElementMenu",props);
  return (
    <div key={props.key} className={bIStyles.setka}
      style={{width:"280px"}}
      onClick={el => {
          props.onSetShowProps(true); 
          console.log("props",props,props.element._id);
          props.onSetCurrentKey(props.element._id)} }>
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
          {/* console.log("keyId",keyId,element); */}

          return <ElementMenu 
           key={element._id}
           element={element} onSetShowProps={props.onSetShowProps}
           onSetCurrentKey={props.onSetCurrentKey} />
      })}
      </div>  
      </>
  )
}


function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  const [showProps, setShowProps] = React.useState(false);
  const [currentKey, setCurrentKey] = React.useState('');
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
          <ShowIngredients name="Булки" type="bun"     data={props.data} onSetShowProps={setShowProps} onSetCurrentKey={setCurrentKey} />
          <ShowIngredients name="Соусы" type="sauce"   data={props.data} onSetShowProps={setShowProps} onSetCurrentKey={setCurrentKey} />
          <ShowIngredients name="Начинки"  type="main" data={props.data} onSetShowProps={setShowProps} onSetCurrentKey={setCurrentKey} />
          </div>
        {showProps && <Modal modalProps="modalId" overflow = "visible" 
          caption="Детали ингредиента" key={currentKey}  close= {setShowProps}>
          
          <DetailesIngredient keyForShow={currentKey}  data={props.data}/>
        </Modal>}
    </div>
  );
}
BurgerIngredients.propTypes = {
  data: PropTypes.array 
}; 

export default BurgerIngredients;
