import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/AppHeader";
import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from "react-router-dom";

import ConstructorPage from "../../pages/ConstructorPage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ResetPassword } from "../../pages/ResetPasswordPage";
import { ForgotPassword } from "../../pages/ForgotPasswordPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { ListPage } from "../../pages/ListPage";
import { NotFound404 } from "../../pages/NotFound";
import { ProtectedRouteElement } from "../protected-route-element/ProtectedRouteElement";
import { ProtectedRouteLogins } from "../protected-route-element/ProtectedRouteLogins";
import { getCookie } from "../../utils/cookie";
import IngredientPage from "../../pages/IngredientPage";

function App() {
  const flag = getCookie("forgot");
  
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main className={appStyles.appMain}>
          <Routes>
            <Route path="/" element={<ConstructorPage />} />
            <Route
              path="/login"
              element={<ProtectedRouteLogins element={<LoginPage />} />}
            />
            <Route
              path="/register"
              element={<ProtectedRouteLogins element={<RegisterPage />} />}
            />
            <Route
              path="/forgot-password"
              element={<ProtectedRouteLogins element={<ForgotPassword />} />}
            />
            {flag == "1" && (
              <Route path="/reset-password" element={<ResetPassword />} />
            )}
            <Route
              path="/profile"
              element={<ProtectedRouteElement element={<ProfilePage />} />}
            />
            <Route
              path="/profile/:orders"
              element={<ProtectedRouteElement element={<ProfilePage />} />}
            />
            <Route
              path="/profile/:orders/:id"
              element={<ProtectedRouteElement element={<ProfilePage />} />}
            />
            <Route path="/list" element={<ListPage />} />
            <Route path="/ingredients/:id" element={<IngredientPage />} ></Route>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
