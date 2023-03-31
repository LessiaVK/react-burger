import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NavigateComponent = ({ page, location }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(page, { state: location?.pathname });
  }, []);
  return <></>;
};
