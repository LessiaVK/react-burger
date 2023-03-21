import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import loginStyles from "./LoginPage.module.css";

const resetRequest = async (form, navigate) => {
  return await fetch(
    "https://norma.nomoreparties.space/api/password-reset/reset",
    {
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
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("codeRequest data", data);
      data.success && navigate("/login", { replace: true });
    });
};

export function ResetPassword() {
  const [form, setValue] = useState({ password: "", token: "" });
  const navigate = useNavigate();
  const onChangePass = (e) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChange = (e) => {
    setValue({ ...form, token: e.target.value });
  };

  let changePassword = useCallback(
    (e) => {
      e.preventDefault();
      resetRequest(form, navigate);
    },
    [form]
  );

  return (
    <form onSubmit={changePassword}>
      <div
        className={
          loginStyles.inputsCenter + " " + loginStyles.inputsFlexColumn
        }
      >
        <>
          <p className="text text_type_main-medium pt-20">
            Восстановление пароля
          </p>
          <PasswordInput
            placeholder={"Введите новый пароль"}
            onChange={onChangePass}
            value={form.password}
            error={false}
            size={"default"}
            extraClass="ml-1"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            name={"name"}
            onChange={onChange}
            value={form.token}
            error={false}
            size={"default"}
            extraClass="ml-1"
          />
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </>
        <p className="text text_type_main-default text_color_inactive pt-4 mt-10">
          Вспомнили пароль?{" "}
          <Link to="/login" className={loginStyles.link}>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
}
