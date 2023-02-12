import React from 'react';
import { Logo , BurgerIcon,ListIcon,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const st = {
  "padding": "12px",
  marginRight:" 30px"
}
function AppHeader() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex',justifyContent: 'space-around',
    alignItems: 'center',
    width:"100vw"}}>
      <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-around'}}>
        
        <BurgerIcon  type="primary" />
            <p style={st} className="text text_type_main-default">
            
              Конструктор
            </p>
      
          <ListIcon type="primary" />
          <p style={st} className="text text_type_main-default text_color_inactive">
          Лента заказов
          </p>
  </div>
     
      <Logo />

      <div style={{display: 'flex', alignItems: 'center'}}>
  <ProfileIcon type="primary" />

  <p style={st} className="text text_type_main-default text_color_inactive">
Личный кабинет
</p>
</div>
  </div>
  );
}

export default AppHeader;
