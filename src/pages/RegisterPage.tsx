import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../utils/hooks";

import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import loginStyles from "./LoginPage.module.css";

import { getRegisterRequest } from "../services/thunks";
import { PATH_LOGIN } from "../utils/constants";

type TFormEmail = {
  email: string;
  password: string;
  name: string;
};

export function RegisterPage() {
  const [form, setValue] = useState<TFormEmail>({
    name: "",
    password: "",
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangePass = (e: any) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChangeName = (e: any) => {
    setValue({ ...form, name: e.target.value });
  };
  const onChangeEmail = (e: any) => {
    setValue({ ...form, email: e.target.value });
  };

  let register = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(getRegisterRequest(form, navigate));
    },
    [form]
  );

  return (
    <form onSubmit={register}>
      <div
        className={
          loginStyles.inputsCenter + " " + loginStyles.inputsFlexColumn
        }
      >
        <>
          <p className="text text_type_main-medium pt-20">Регистрация</p>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onChangeName}
            value={form.name}
            error={false}
            size={"default"}
            extraClass="ml-1"
          />
          <EmailInput
            placeholder={"E-mail"}
            onChange={onChangeEmail}
            value={form.email}
            size={"default"}
            extraClass="ml-1"
          />
          <PasswordInput
            placeholder={"Пароль"}
            onChange={onChangePass}
            value={form.password}
            size={"default"}
            extraClass="ml-1"
          />
          <Button htmlType="submit" type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </>
        <p className="text text_type_main-default text_color_inactive pt-4 mt-10">
          Уже зарегистрированы?{" "}
          <Link to={PATH_LOGIN} className={loginStyles.link}>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
}
