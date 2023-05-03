import { useLocation } from "react-router-dom";
import { useSelector } from "../../utils/hooks";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";

export const ProtectedRouteLogins = (props: any) => {
  const isUserLogin = useSelector(loginSuccess);
  const location = useLocation();

  if (isUserLogin) return <NavigateComponent page={location?.state || "/"} />;

  return props.element;
};
