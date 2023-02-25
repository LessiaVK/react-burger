import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from "../constants";
import { getDataJson } from "../../utils/checkResponse";
import { actionCreators } from "../actions/actionCreator";
import { BASE_URL } from "../../utils/constants";
import { FETCH_INGREDIENTS, FETCH_INGREDIENTS_STATE, GET_CONSTRUCTOR, ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS, FETCH_ORDER, IS_MODAL_OPEN } from "../actions/actionTypes";


// async function getDataJson(url, callback, dispatch) {
//     const response = await fetch(url); 
//         if (response.ok) {  
//           const json = await response.json();
//           callback(json);
//         } else {
//           alert(`Ошибка HTTP: ${response.status}`);
//           dispatch(actionCreators.fetchIngredientsState("error")); 
//         }
//   }

export const fetchData = () => {
	return ((dispatch, getState, extra) => {
		    dispatch(actionCreators.fetchIngredientsState("process"));

        const setIngredients = (incomingData) => 
            {
              dispatch(actionCreators.fetchIngredients(incomingData.data));
              dispatch(actionCreators.fetchIngredientsState("success"));           
            } 
        getDataJson(BASE_URL+'/ingredients', setIngredients);	
	});
}


// export const ingredientsReducer = (state = initialState, action) => {
// switch (action.type) {
//   case GET_DATA: {
//     return {
//       ...state,
//               // Запрос начал выполняться
//           isLoading: true,
//               // Сбрасываем статус наличия ошибок от предыдущего запроса 
//               // на случай, если он был и завершился с ошибкой
//               dataFailed: false,
//     };
//   }
//   case GET_DATA_SUCCESS: {
//     return { 
//               ...state, 
//               // Запрос выполнился успешно, помещаем полученные данные в хранилище
//               data: action.data, 
//               // Запрос закончил своё выполнение
//               isLoading: false 
//           };
//   }
//   case GET_DATA_FAILED: {
//     return { 
//               ...state, 
//               // Запрос выполнился с ошибкой, 
//               // выставляем соответсвующие значения в хранилище
//               dataFailed: true, 
//               // Запрос закончил своё выполнение
//               isLoading: false 
//           };
//   }
//       default: {
//           return state
//       }
//   }
// }
