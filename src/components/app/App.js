import React from "react";
import appStyles from "./App.module.css";
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
    console.log(`Ошибка HTTP: ${response.status}`);
    return Promise.reject(`Ошибка HTTP: ${response.status}`);
  }
}

function App() {
  const [getsData, setFetchedData] = React.useState({
    success: false,
    data: [],
  });
  const url = "https://norma.nomoreparties.space/api/ingredients";

  React.useEffect(() => {
    try {
      getDataJson(url, setFetchedData);
    } catch (error) {
      console.log("getDataJson", error);
    }
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={appStyles.appMain}>
        <BurgerIngredients data={getsData.data} />
        <BurgerConstructor data={getsData.data} />
      </main>
    </div>
  );
}

export default App;
