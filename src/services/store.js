import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { rootReducer } from "./reducers";

import thunk from "redux-thunk";

export const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
