import { combineReducers } from "redux";
import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
  GET_CONSTRUCTOR,
  ADD_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
  FETCH_ORDER,
  IS_MODAL_OPEN,
  FETCH_INGREDIENTS_ID,
} from "../actions/actionTypes";
import { initialState } from "../../initialState";

// // Редьюсер списка дел
//const todoList = (state, action) => { ... }

// // Редьюсер пользователя приложения
// const user = (state, action) => { ... }

// // Редьюсер коллективной работы над списком дел
// const collaboration = (state, action) => { ... }

// Корневой редьюсер
// export const rootReducer = combineReducers({
//     fetchData,
//     rootReduser
//     // todoList,
//     // user,
//     // collaboration
// })
// const initialState = [
//   {
//     isLoading: false,
//     dataFailed: false,
//     data: [],
//   },
// ];

const fetchIngredients = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };

    case FETCH_INGREDIENTS_STATE:
      return {
        ...state,
        fetchIngredients: action.payload,
      };

    case GET_CONSTRUCTOR:
      return {
        ...state,
        constructor: action.payload,
      };

    case ADD_INGREDIENT_DETAILS:
      return {
        ...state,
        currentIngredient: action.payload,
      };

    case DELETE_INGREDIENT_DETAILS:
      return {
        ...state,
        currentIngredient: {},
      };

    case FETCH_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };

    case FETCH_INGREDIENTS_ID:
      return {
        ...state,
        // currentItemsID: action.payload.map(item => item._id) ,
        currentItemsID: action.payload.map((item) => item._id),
      };

    case IS_MODAL_OPEN:
      return {
        ...state,
        isOpenModal: action.payload,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  rootReducer1,
  f: fetchIngredients,
});
// export const rootReducer =combineReducers ({
//         rootReducer1,
//         fetchIngredients
// });

// export const rootReducer1 = combineReducers({
//         rootReducer1,
//         fetchIngredients,
//         // routing: routerReducer,
//         // todoList,
//         // user,
//         // collaboration
//     })
