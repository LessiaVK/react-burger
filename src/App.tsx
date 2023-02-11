import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './utils/data.js';
import AppHeader from './components/app-header/AppHeader';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';


function App() {
  return (
    <div className="App">
      <AppHeader />
       <div style={{display:"flex", justifyContent:"center"}}> 
          <BurgerIngredients data={Data} />
          <BurgerConstructor />

         
       </div>
        <div id="modalId"/>
    </div>
  );
}

export default App;
