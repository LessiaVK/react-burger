import { GET_CONSTRUCTOR, FETCH_INGREDIENTS_ID } from "./actionTypes";
import { IGetConstractor, IFetchIngredientsID } from "./todo";
import { TIngredient } from "../../components/burger-ingredients/BurgerIngredients";
import { TIngredientBurger } from "../../components/burger-constructor/BurgerConstructor";

export const actionBurgerCompound = {
  getConstructor: (data: TIngredient[]): IGetConstractor => ({ type: GET_CONSTRUCTOR, payload: data }),
  fetchIngredientsID: (data: ReadonlyArray<number>): IFetchIngredientsID => ({ type: FETCH_INGREDIENTS_ID, payload: data }),
};
