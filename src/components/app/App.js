import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchIngredientsRequest,
  fetchIngredientsError,
} from "../../services/selectors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../../services/thunks";

function App() {
  const dispatch = useDispatch();
  const fetchDataRequest = useSelector(fetchIngredientsRequest);
  const fetchDataError = useSelector(fetchIngredientsError);

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={appStyles.appMain}>
        {!fetchDataRequest && !fetchDataError ? (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}

export default App;
