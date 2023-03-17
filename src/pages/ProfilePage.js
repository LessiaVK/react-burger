import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../services/thunks";
import { getDataUser, getUpdateUser } from "../services/thunks";
import { userRequest } from "../services/selectors";

import {
  EmailInput,
  PasswordInput,
  Input,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from "./ProfilePage.module.css";

export function ProfilePage() {
  const [form, setValue] = useState({ password: "", email: "", name:"" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userForm = useSelector(userRequest);
  const cancel = () => {
    setValue({ ...form, email: userForm.email, name: userForm.name });
  }
  const update = () => {
    dispatch(getUpdateUser(form));
  }

  const onChangeName = (e) => {
    setValue({ ...form, name: e.target.value });
  };
  const onChangePass = (e) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChangeEmail = (e) => {
    setValue({ ...form, email: e.target.value });
  };

  useEffect(() => {
    dispatch(getDataUser(navigate));
  }, []);

  useEffect(() => {
   setValue({ ...form, email: userForm.email, name: userForm.name });
  }, [userForm]);

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
        <div className="pb-4">
          <div className="text text_type_main-medium text_color_inactive" 
          onClick={(e) => {dispatch(getLogout(navigate));}}
          >
            Выход
          </div>
        </div>
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
          value={form.name ? form.name : ""}
          error={false}
          size={"default"}
          extraClass="ml-1 pb-6"
        />
        <EmailInput
          placeholder={"Логин"}
          onChange={onChangeEmail}
          value={form.email ? form.email : ""}
          error={false}
          size={"default"}
          extraClass="ml-1 pb-6"
        />
        <PasswordInput
          placeholder={"Пароль"}
          onChange={onChangePass}
          value={form.password ?  form.password : ""}
          error={false}
          size={"default"}
          extraClass="ml-1 pb-6"
        />
        <div className={profileStyles.inputsFlexRowCenter}>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={cancel}
          extraClass="ml-10 mr-10"
        >
          Отменить
        </Button>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={update}
        >
          Сохранить
        </Button>
        </div>
      </div>
    </div>
  );
}
