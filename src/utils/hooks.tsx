import { useState } from "react";
import { rootReducer } from "../services/reducers";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
// export function useForm(inputValues: Array<string>) {
//   const [values, setValues] = useState(inputValues);

//   const handleChange = (event) => {
//     const {value, name} = event.target;
//     setValues({...values, [name]: value});
//   };
//   return {values, handleChange, setValues};
// }


export type Dispatch = <TReturnType = void>(action: any) => TReturnType;
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;