import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";

export const ProtectedRouteElement = ({ element }) => {
  const isUserLogin = useSelector(loginSuccess);
  const location = useLocation();

  if (!isUserLogin) {
    return <NavigateComponent page="/login" location={location} />;
  }
  return element;
};
