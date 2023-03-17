import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSuccess } from "../../services/selectors";

const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("RedirectPage");
    navigate("/login", { replace: true });
  }, []);
  return <></>;
};

export const ProtectedRouteElement = ({ element }) => {
  const isUserLogin = useSelector(loginSuccess);

  if (!isUserLogin) {
    return <RedirectPage />;
  }
  return element;
};
