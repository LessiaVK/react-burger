import { combineReducers } from "redux";
import { burgerReducer } from "./burgerСompound";
import { ingredientReducer } from "./ingredientDetails";
import { orderReducer } from "./orderDetails";
import { fetchDataReducer } from "./getIngredients";
import { registerReducer } from "./register";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  fetchDataReducer,
  burgerReducer,
  ingredientReducer,
  orderReducer,
  registerReducer,
  loginReducer,
});
