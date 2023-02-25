import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../services/reducers/getIngredients";
import { fetchIngredientsSelector } from "../../services/selectors";

function App() {
  const dispatch = useDispatch();
  const fetchDataState = useSelector(fetchIngredientsSelector);
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={appStyles.appMain}>
        {fetchDataState == "success" ? (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}

export default App;
