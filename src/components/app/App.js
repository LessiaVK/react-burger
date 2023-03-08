import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/AppHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConstructorPage from "../../pages/ConstructorPage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ResetPassword } from "../../pages/ResetPasswordPage";
import { ForgotPassword } from "../../pages/ForgotPasswordPage";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className={appStyles.appMain}>
        <Router>
          <Routes>
            <Route path="/" element={<ConstructorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
