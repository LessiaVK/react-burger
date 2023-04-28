import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks";
import { getDataUser } from "../../services/thunks";
import { loginSuccess } from "../../services/selectors";
import { NavigateComponent } from "./NavigateComponent";

export const ProtectedRouteLogins = (props: any) => {
  const isUserLogin = useSelector(loginSuccess);
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   dispatch(getDataUser());
  // }, []);

  if (isUserLogin) return <NavigateComponent page={location?.state || "/"} />;

  return props.element;
};
