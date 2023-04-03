import { useCallback, useState } from "react";
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
import { PATH_REGISTER } from "../utils/constants";

type TFormEmail = {
  email :string;
  password :string;
}

export function LoginPage() {
  const [form, setValue] = useState<TFormEmail>({ password: "", email: "" });
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();
  const onChangePass = (e: any) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChangeEmail = (e: any) => {
    setValue({ ...form, email: e.target.value });
  };
  let login = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(getLoginRequest(form, navigate));
    },
    [form]
  );

  return (
    <form onSubmit={login}>
      <div
        className={
          loginStyles.inputsCenter + " " + loginStyles.inputsFlexColumn
        }
      >
        <p className="text text_type_main-medium pt-20">Вход</p>
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
          Войти
        </Button>

        <div className={loginStyles.inputsFlexColumn}>
          <p className="text text_type_main-default text_color_inactive pt-4 mt-10">
            Вы — новый пользователь?{" "}
            <Link to={PATH_REGISTER} className={loginStyles.link}>
              Зарегистрироваться
            </Link>
          </p>
          <p className="text text_type_main-default text_color_inactive mt-4">
            Забыли пароль?{" "}
            <Link to="/forgot-password" className={loginStyles.link}>
              Восстановить пароль
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
