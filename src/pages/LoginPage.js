import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginRequest } from "../services/thunks";

import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import loginStyles from "./LoginPage.module.css";

export function LoginPage() {
  const [form, setValue] = useState({ password: "", email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangePass = (e) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChangeEmail = (e) => {
    setValue({ ...form, email: e.target.value });
  };
   let login = useCallback(
    (e) => {
      dispatch(getLoginRequest(form, navigate));
    },
    [form]
  );

  return (
    <div className={ loginStyles.inputsCenter + ' ' + loginStyles.inputsFlexColumn }>
      <>
        <p className="text text_type_main-medium pt-20">Вход</p>
        <EmailInput 
          placeholder={"E-mail"}
          onChange={onChangeEmail}
          value={form.email}
          error={false}
          size={"default"}
          extraClass="ml-1"
        />
        <PasswordInput 
          placeholder={"Пароль"}
          onChange={onChangePass}
          value={form.password}
          error={false}
          size={"default"}
          extraClass="ml-1"
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={login}
        >
          Войти
        </Button>
      </>
        <div className={loginStyles.inputsFlexColumn}>
      <p className="text text_type_main-default text_color_inactive pt-4 mt-10">
        Вы — новый пользователь? <Link to='/register' className={loginStyles.link}>Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль? <Link to='/forgot-password' className={loginStyles.link}>Восстановить пароль</Link>
      </p>
      </div>
    </div>
  );
}
