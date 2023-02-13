import React from "react";
import AppStyles from './App.module.css';
import Data from "../../utils/data.js";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

async function getDataJson(url, callback) {
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

// React.useEffect(async () => {
//   console.log("useEffect");
//   // getDataJson(url, setFetchedData);
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     setFetchedData(json);
// } catch (e) {
//     console.error(e);
// }
// }, []);



function App() {
  const [getsData, setFetchedData] = React.useState({
    success: false,
    data: [],
  });
  const url = "https://norma.nomoreparties.space/api/ingredients";

  React.useEffect(() => {
    console.log("useEffect");
    getDataJson(url, setFetchedData);
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={AppStyles.appMain}>
        <BurgerIngredients data={getsData.data} />
        <BurgerConstructor data={getsData.data} />
      </main>
      <div id="modalId" />
    </div>
  );
}

export default App;
