import { rootReducer } from "../services/reducers";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

export type AppDispatch = <TReturnType = void>(action: any) => TReturnType;
export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();
// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
