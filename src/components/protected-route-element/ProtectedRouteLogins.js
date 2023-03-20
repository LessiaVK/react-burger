import { useEffect } from "react";
import { useNavigate, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../services/thunks";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";

export const ProtectedRouteLogins = ({ element }) => {
  const isUserLogin = useSelector(loginSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDataUser(navigate));
  }, []);

  if (isUserLogin) return <NavigateComponent page="/" />;
  // if (isUserLogin) return <Redirect to={location?.state?.from || '/'} />;

  return element;
};
