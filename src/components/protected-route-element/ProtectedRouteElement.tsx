import { useSelector } from "../../utils/hooks";
import { useLocation, RouteProps } from "react-router-dom";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";
import { PATH_LOGIN } from "../../utils/constants";
import { PropsWithChildren } from "react";

export type ProtectedRouteProps = {
  element: JSX.Element;
} & RouteProps;

export const ProtectedRouteElement: React.FC<ProtectedRouteProps> = ({
  element,
}) => {
  const isUserLogin = useSelector(loginSuccess);
  const location = useLocation();

  if (!isUserLogin) {
    return <NavigateComponent page={PATH_LOGIN} location={location?.pathname} />;
  }
  return element;
};
