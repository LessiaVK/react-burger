import React from "react";
import appStyles from "./App.module.css";
import { DataContext } from "../../services/AppContext.js";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

async function getDataJson(url, callback) {
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    callback(json);
  } else {
    console.log(`Ошибка HTTP: ${response.status}`);
    return Promise.reject(`Ошибка HTTP: ${response.status}`);
  }
}

// const discountInitialState = { discount: null };

//  function reducer(state, action) {
//   switch (action.type) {
//     case "set":
//       return { discount: action.payload };
//     case "reset":
//       return discountInitialState;
//     default:
//       throw new Error(`Wrong type of action: ${action.type}`);
//   }
// }

function App() {
  const [getsData, setgetsData] = React.useState({
    success: false,
    data: [],
  });
  const url = "https://norma.nomoreparties.space/api/ingredients";

  React.useEffect(() => {
    try {
      getDataJson(url, setgetsData);
    } catch (error) {
      console.log("getDataJson", error);
    }
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={appStyles.appMain}>
        {getsData.success ? (
          <DataContext.Provider value={ getsData }>
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
