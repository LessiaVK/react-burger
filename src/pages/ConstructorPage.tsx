import React from "react";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchIngredientsRequest,
  fetchIngredientsError,
} from "../services/selectors";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../services/thunks";

function ConstructorPage() {
  const dispatch = useDispatch() as any;
  const fetchDataRequest = useSelector(fetchIngredientsRequest);
  const fetchDataError = useSelector(fetchIngredientsError);

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      {!fetchDataRequest && !fetchDataError ? (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      ) : (
        <></>
      )}
    </>
  );
}

export default ConstructorPage;
