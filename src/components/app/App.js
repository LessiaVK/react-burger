import React from "react";
import appStyles from "./App.module.css";
import { DataContext } from "../../services/AppContext.js";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import { checkResponse } from "../../utils/checkResponse";
import { BASE_URL } from "../../utils/constants";

async function getDataJson(url, callback) {
  fetch(url).then(checkResponse).then(callback);
}

function App() {
  const [getsData, setGetsData] = React.useState({
    success: false,
    data: [],
  });
  const url = BASE_URL + "/ingredients";

  React.useEffect(() => {
    try {
      getDataJson(url, setGetsData);
    } catch (error) {
      console.log("getDataJson", error);
    }
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={appStyles.appMain}>
        {getsData.success ? (
          <DataContext.Provider value={getsData}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DataContext.Provider>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}

export default App;
