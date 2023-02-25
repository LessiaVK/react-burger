import { guid } from '../utils'
import { ADD_TODO, TOGGLE_TODO } from './constants'
 
// Исходное состояние
const initialState = [
    {
        id: guid(),
        completed: false,
        expiresAt: '08.04.20201',
        text: 'Купить авокадо 4 шт.'
    }
]

// Редьюсер
const todoList = (state = initialState, action) => {
  switch (action.type) {
        // Добавление новой задачи в список дел
    case ADD_TODO:
      return [
        ...state,
        {
          id: guid(),
          text: action.text,
                    expiresAt: action.expiresAt,
          completed: false
        }
      ]
        // Изменение статуса задачи в списке дел
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
        // Реакция на прочие типы экшенов
    default:
      return state
  }
} 
