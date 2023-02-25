// {
//     type: ADD_TODO,
//     text: 'Заменить шланг подачи холодной воды в бойлере',
//     expiresAt: '04.05.2021'
// } 



// Генератор экшена
// const addToDo = (text, expiresAt) => ({
//     type: ADD_TODO,
//     text: text,
//     expiresAt: expiresAt
// }) 

import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from "../constants";
import { BASE_URL } from "../../utils/constants";

const url = BASE_URL + "/ingredients";

  
  // Наш первый thunk
  export function getIngredients() {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
  return function(dispatch) {
        // Проставим флаг в хранилище о том, что мы начали выполнять запрос
        // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
        // ввод на время выполнения запроса
    dispatch({
      type: GET_DATA
    })
        // Запрашиваем данные у сервера
    fetch(url).then( res  => {
      if (res && res.success) {
                // В случае успешного получения данных вызываем экшен
                // для записи полученных данных в хранилище
        dispatch({
          type: GET_DATA_SUCCESS,
          data: res.data
        })
      } else {
                // Если произошла ошибка, отправляем соотвтествующий экшен
        dispatch({
          type: GET_DATA_FAILED
        })
      }
    }).catch( err => {
            // Если сервер не вернул данных, также отправляем экшен об ошибке
            dispatch({
                type: GET_DATA_FAILED
            })
        })
  }
  } 
  
  
  
  