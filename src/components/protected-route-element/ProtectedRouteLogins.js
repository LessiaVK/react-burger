import { useEffect } from "react";
import { useNavigate, useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../services/thunks";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";

export const ProtectedRouteLogins = ({ element }) => {
  const isUserLogin = useSelector(loginSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(getDataUser(navigate));
  }, []);

  if (isUserLogin) return <NavigateComponent page={location?.state || "/"} />;

  return element;
};
