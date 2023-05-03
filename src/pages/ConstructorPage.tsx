import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";

import { useSelector } from "../utils/hooks";
import {
  fetchIngredientsRequest,
  fetchIngredientsError,
} from "../services/selectors";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function ConstructorPage() {
  const fetchDataRequest = useSelector(fetchIngredientsRequest);
  const fetchDataError = useSelector(fetchIngredientsError);
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
