import { combineReducers } from "redux";
import { burgerReducer } from "./burgerСompound";
import { ingredientReducer } from "./ingredientDetails";
import { orderReducer } from "./orderDetails";
import { fetchDataReducer } from "./getIngredients";
import { registerReducer } from "./register";
import { loginReducer } from "./login";
import { logoutReducer } from "./logout";
import { userReducer } from "./user";
import { updateTokenReducer } from "./token";
import { wsReducer } from "./wsReducer";

export const rootReducer = combineReducers({
  fetchDataReducer,
  burgerReducer,
  ingredientReducer,
  orderReducer,
  registerReducer,
  loginReducer,
  logoutReducer,
  userReducer,
  updateTokenReducer,
  wsReducer
});
