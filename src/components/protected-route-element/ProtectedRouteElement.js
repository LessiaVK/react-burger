import { useSelector } from "react-redux";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";

export const ProtectedRouteElement = ({ element }) => {
  const isUserLogin = useSelector(loginSuccess);

  if (!isUserLogin) {
    return <NavigateComponent page="/login" />;
  }
  return element;
};
