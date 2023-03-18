import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NavigateComponent = ({page}) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(page, {replace:true});
  },[]);
  return (<></>);
}