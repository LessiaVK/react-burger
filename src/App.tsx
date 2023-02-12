import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './utils/data.js';
import AppHeader from './components/app-header/AppHeader';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';

async function getDataJson(url : string, callback : any) {
  const response = await fetch(url); 
      if (response.ok) { 
        const json = await response.json();
        // console.log("json=", json);
        callback(json);
      } else {
        alert(`Ошибка HTTP: ${response.status}`);
        //callback(default);
      }
}

function App() {
  const [getsData, setFetchedData] = React.useState({success: false, data: []});
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  React.useEffect(
    () => {
      console.log("useEffect");
      getDataJson(url, setFetchedData);

    },
    []
  );

  return (
    <div className="App">
      <AppHeader />
       <div style={{display:"flex", justifyContent:"center"}}> 
          <BurgerIngredients data={getsData.data} />
          <BurgerConstructor data={getsData.data} />
       </div>
        <div id="modalId"/>
    </div>
  );
}

export default App;
