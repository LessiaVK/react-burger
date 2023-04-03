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
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from "./ProfilePage.module.css";
import { getCookie } from "../utils/cookie";
import { getUpdateToken } from "../services/thunks";
import { PATH_LOGIN, PATH_PROFILE } from "../utils/constants";

export function ProfilePage() {
  const [form, setValue] = useState({ password: "", email: "", name: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const userForm = useSelector(userRequest) as any;
  const cancel = () => {
    setValue({ ...form, email: userForm.email, name: userForm.name });
  };

  const update = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let token = getCookie("token");
    if (!token && getCookie("refreshToken")) {
      dispatch(getUpdateToken(getUpdateUser(form)));
    } else if (token) dispatch(getUpdateUser(form));
    else navigate(PATH_LOGIN, { replace: true });
  };

  const onChangeName = (e: any) => {
    setValue({ ...form, name: e.target.value });
  };
  const onChangePass = (e: any) => {
    setValue({ ...form, password: e.target.value });
  };
  const onChangeEmail = (e: any) => {
    setValue({ ...form, email: e.target.value });
  };

  useEffect(() => {
    let token = getCookie("token");
    if (!token && getCookie("refreshToken")) {
      dispatch(getUpdateToken(getDataUser(navigate)));
    } else if (token) getDataUser(navigate);
    else navigate(PATH_LOGIN, { replace: true });
  }, []);

  useEffect(() => {
    setValue({ ...form, email: userForm.email, name: userForm.name });
  }, [userForm]);

  return (
    <div className={profileStyles.inputsFlexRow}>
      <div className={profileStyles.inputsFlexColumn + " mr-15 pt-20"}>
        <p className="pb-4">
          <Link
            to={PATH_PROFILE}
            className={profileStyles.textWhite + " text text_type_main-medium"}
          >
            Профиль
          </Link>
        </p>
        <p className="pb-4">
          <Link
            to={PATH_PROFILE + "/orders"}
            className="text text_type_main-medium text_color_inactive"
          >
            История заказов
          </Link>
        </p>
        <div className="pb-4">
          <div
            className="text text_type_main-medium text_color_inactive"
            onClick={(e) => {
              dispatch(getLogout(navigate));
            }}
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
      <form onSubmit={update} onReset={cancel}>
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
            size={"default"}
            extraClass="ml-1 pb-6"
          />
          <PasswordInput
            placeholder={"Пароль"}
            onChange={onChangePass}
            value={form.password ? form.password : ""}
            size={"default"}
            extraClass="ml-1 pb-6"
          />
          <div className={profileStyles.inputsFlexRowCenter}>
            <Button
              htmlType="reset"
              type="primary"
              size="medium"
              extraClass="ml-10 mr-10"
            >
              Отменить
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
