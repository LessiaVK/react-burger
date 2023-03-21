import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";
import { PATH_LOGIN } from "../../utils/constants";

export const ProtectedRouteElement = ({ element }) => {
  const isUserLogin = useSelector(loginSuccess);
  const location = useLocation();

  if (!isUserLogin) {
    return <NavigateComponent page={PATH_LOGIN} location={location} />;
  }
  return element;
};
