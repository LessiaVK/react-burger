import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import loginStyles from "./LoginPage.module.css";

const codeRequest = async (form,navigate) => {
  return await fetch("https://norma.nomoreparties.space/api/password-reset", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  }).then(res=>res.json()).then(
    data => {
      console.log("codeRequest data",data);
      data.success && navigate('/reset-password', {replace: true});
    }
  );
};

export function ForgotPassword() {
  const [form, setValue] = useState({ email: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setValue({ ...form, email: e.target.value });
  };

  let getCode = useCallback(
    (e) => {
      codeRequest(form,navigate);
    },
    [form]
  );

  return (
    <div
      className={loginStyles.inputsCenter + " " + loginStyles.inputsFlexColumn}
    >
      <>
        <p className="text text_type_main-medium pt-20">
          Восстановление пароля
        </p>
        <EmailInput
          onChange={onChange}
          value={form.email}
          name="email"
          isIcon={false}
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={getCode}
        >
          Восстановить
        </Button>
      </>
      <p className="text text_type_main-default text_color_inactive pt-4 mt-10">
        Вспомнили пароль?{" "}
        <Link to="/login" className={loginStyles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
}