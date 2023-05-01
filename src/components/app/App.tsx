import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/AppHeader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/hooks";
import { getIngredients } from "../../services/thunks";
import { getDataUser } from "../../services/thunks";
import { userIsCheck } from "../../services/selectors";

import ConstructorPage from "../../pages/ConstructorPage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ResetPassword } from "../../pages/ResetPasswordPage";
import { ForgotPassword } from "../../pages/ForgotPasswordPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { FeedPage } from "../../pages/FeedPage";
import { NotFound404 } from "../../pages/NotFound";
import { ProtectedRouteElement } from "../protected-route-element/ProtectedRouteElement";
import { ProtectedRouteLogins } from "../protected-route-element/ProtectedRouteLogins";
import { getCookie } from "../../utils/cookie";
import IngredientPage from "../../pages/IngredientPage";
import OrderPage from "../../pages/OrderShowPage";
import { ProfileOrdersPage } from "../../pages/ProfileOrdersPage";
import {
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_FORGOT,
  PATH_RESET,
  PATH_PROFILE,
  PATH_FEED,
  PATH_INGREDIENTS,
} from "../../utils/constants";

function App() {
  const dispatch = useDispatch();
  const userIsChecked = useSelector(userIsCheck);

  React.useEffect(() => {
    dispatch(getIngredients());
    dispatch(getDataUser());
  }, []);

  const ModalSwitch = () => {
    const location = useLocation();
    let background = location.state && location.state.background;
    return <>{background ? <ConstructorPage /> : <IngredientPage />}</>;
  };
  const ModalSwitch2 = () => {
    const location = useLocation();
    let background = location.state && location.state.background;
    return <>{background ? <FeedPage /> : <OrderPage />}</>;
  };
  const ModalSwitch3 = () => {
    const location = useLocation();
    let background = location.state && location.state.background;
    return <>{background ? <ProfileOrdersPage /> : <OrderPage />} </>;
  };

  const flag = getCookie("forgot");

  return (
    <div className="App">
      {userIsChecked && (
        <Router>
          <AppHeader />
          <main className={appStyles.appMain}>
            <Routes>
              <Route path="/" element={<ConstructorPage />} />
              <Route
                path={PATH_LOGIN}
                element={<ProtectedRouteLogins element={<LoginPage />} />}
              />
              <Route
                path={PATH_REGISTER}
                element={<ProtectedRouteLogins element={<RegisterPage />} />}
              />
              <Route
                path={PATH_FORGOT}
                element={<ProtectedRouteLogins element={<ForgotPassword />} />}
              />
              {flag == "1" && (
                <Route path={PATH_RESET} element={<ResetPassword />} />
              )}
              <Route
                path={PATH_PROFILE}
                element={<ProtectedRouteElement element={<ProfilePage />} />}
              />
              <Route
                path={PATH_PROFILE + "/orders"}
                element={
                  <ProtectedRouteElement element={<ProfileOrdersPage />} />
                }
              />
              <Route
                path={PATH_PROFILE + "/orders/:id"}
                element={<ProtectedRouteElement element={<ModalSwitch3 />} />}
              />
              <Route path={PATH_FEED} element={<FeedPage />} />

              <Route
                path={PATH_FEED + "/:id"}
                element={<ModalSwitch2 />}
              ></Route>

              <Route
                path={PATH_INGREDIENTS + "/:id"}
                element={<ModalSwitch />}
              ></Route>
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </main>
        </Router>
      )}
    </div>
  );
}

export default App;
