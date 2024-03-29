import {
  ADD_INGREDIENT_DETAILS
} from "./actionTypes";
import { IAddIngredientDetails } from "./todo";
import { TIngredient } from "../../components/burger-ingredients/BurgerIngredients";

export const actionIngredientDetails = {
  addIngredientDetails: (data: TIngredient | null): IAddIngredientDetails => ({
    type: ADD_INGREDIENT_DETAILS,
    payload: data,
  }),
};
