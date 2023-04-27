import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NavigateComponent = (props: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(props.page, { state: props.location?.pathname });
  }, []);
  return <></>;
};
