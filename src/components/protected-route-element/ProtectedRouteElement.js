import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLoginRequest } from "../../services/thunks";
import { getLogout } from "../../services/thunks";
import { getDataUser, getUpdateUser } from "../../services/thunks";
import { userRequest, userSuccess, loginSuccess } from "../../services/selectors";

export const ProtectedRouteElement = ({ element }) => {
    const [form, setValue] = useState({ password: "", email: "", name:"" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // dispatch(getDataUser(navigate));
    let userForm = useSelector(userRequest);
    const isUserLoaded = useSelector(loginSuccess);

    // useEffect(() => {
    //     dispatch(getDataUser(navigate));
    //   }, []);
    
    //   useEffect(() => {
    //     setValue({ ...form, email: userForm.email, name: userForm.name });
    //    }, [userForm]);
console.log("isUserLoaded",isUserLoaded);
    if (!isUserLoaded) {
    return navigate("/login", {replace:true});
  }
// console.log("isUserLoaded",isUserLoaded);
  return element;
  
} 

