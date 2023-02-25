import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./services/store";
import { initialState } from "./initialState";

const store = configureStore(initialState);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { compose, createStore } from 'redux';
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
//////////////////

// import { compose, createStore, applyMiddleware } from 'redux';
// const enhancer = composeEnhancers();
// const store = createStore(rootReducer, enhancer);
////////////////////

// import { createStore, applyMiddleware } from 'redux';

// // Наш усилитель
// const actionLogger = store => next => action => {
//   // Выводим в консоль время события и его содержание
// console.log(`${new Date().getTime()} | Action: ${JSON.stringify(action)}` );
//   // Передаём событие «по конвейеру» дальше
// return next(action);
// };

// // Расширитель хранилища принимает в качестве аргумента усилитель
// const enhancer = applyMiddleware(actionLogger);

// // Инициализируем хранилище, использовав расширитель
// const store = createStore(rootReducer, enhancer);
//////////////////////

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './services/reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));
///////////////////////

// import { createSlice } from '@reduxjs/toolkit
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//   },
// })
////////
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     incrementByValue: (state, action) => state + action.payload,
//   },
// })
////////
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { counterSlice } from './slices'

// const App = (props) => {
//     const dispatch = useDispatch();
//     const { actions } = counterSlice();
//     useEffect(() => {
//         // Отправляем экшен при монтировании компонента
//         dispatch(actions.incrementByValue(1));
//     }, [])

//     // ...
// }

// export default App;

/////////////////////////

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import App from './components/app/app';

// // Корневой редьюсер, который обрабатывает экшены
// import { rootReducer } from './services/reducers';

// // Инициализируем хранилище с помощью корневого редьюсера
// const store = createStore(rootReducer);

// ReactDOM.render(
//     // Оборачиваем приложение компонентом Provider из пакета react-redux
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
