import { useState } from "react";
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

// export function useForm(inputValues: Array<string>) {
//   const [values, setValues] = useState(inputValues);

//   const handleChange = (event) => {
//     const {value, name} = event.target;
//     setValues({...values, [name]: value});
//   };
//   return {values, handleChange, setValues};
// }
