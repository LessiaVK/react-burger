import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderStyles from "./AppHeader.module.css";

function AppHeader() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div
      className={
        AppHeaderStyles.appHeaderMain + " " + AppHeaderStyles.appHeaderNet
      }
    >
      <div className={AppHeaderStyles.appHeaderNet}>
        <BurgerIcon type="primary" />
        <p className="text text_type_main-default p-2 m-5">Конструктор</p>

        <ListIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive p-2 m-5">
          Лента заказов
        </p>
      </div>

      <Logo />

      <div className={AppHeaderStyles.appHeaderNet}>
        <ProfileIcon type="secondary" />

        <p className="text text_type_main-default text_color_inactive p-2 m-5">
          Личный кабинет
        </p>
      </div>
    </div>
  );
}

export default AppHeader;
