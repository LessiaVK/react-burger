import React from "react";

import { useSelector, useDispatch } from "../utils/hooks";
import { ingredientsSelector } from "../services/selectors";

import { getIngredients } from "../services/thunks";
import { IngredientDetails } from "../components/burger-ingredients/BurgerIngredients";

export default function IngredientPage() {
  const dispatch = useDispatch() as any;

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const dataIngradients = useSelector(ingredientsSelector);

  return (
    <>
      <IngredientDetails />
    </>
  );
}
