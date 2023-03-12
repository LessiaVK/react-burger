import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from "./ProfilePage.module.css";

export function ProfilePage() {
  const [form, setValue] = useState({ password: "", email: "", name:"" });
  const navigate = useNavigate();
  const onChangeName = (e) => {
    setValue({ ...form, name: e.target.value });
  };
  const onChangePass = (e) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChangeEmail = (e) => {
    setValue({ ...form, email: e.target.value });
  };
  return (
    <div className={profileStyles.inputsFlexRow}>
      <div className={profileStyles.inputsFlexColumn + " mr-15 pt-20"}>
        <p className="pb-4">
          <Link
            to="/profile"
            className={profileStyles.textWhite + " text text_type_main-medium"}
          >
            Профиль
          </Link>
        </p>
        <p className="pb-4">
          <Link
            to="/profile/orders"
            className="text text_type_main-medium text_color_inactive"
          >
            История заказов
          </Link>
        </p>
        <p className="pb-4">
          <Link
            to="/login"
            className="text text_type_main-medium text_color_inactive"
          >
            Выход
          </Link>
        </p>
        <p
          className={
            profileStyles.wCol +
            " text text_type_main-default text_color_inactive mt-10"
          }
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={profileStyles.inputsFlexColumn + " pt-20"}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={form.name}
          error={false}
          size={"default"}
          extraClass="ml-1 pb-6"
        />
        <EmailInput
          placeholder={"Логин"}
          onChange={onChangeEmail}
          value={form.email}
          error={false}
          size={"default"}
          extraClass="ml-1 pb-6"
        />
        <PasswordInput
          placeholder={"Пароль"}
          onChange={onChangePass}
          value={form.password}
          error={false}
          size={"default"}
          extraClass="ml-1 pb-6"
        />
      </div>
    </div>
  );
}
