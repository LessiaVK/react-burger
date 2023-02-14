import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./AppHeader.module.css";

function AppHeader() {
  const [current, setCurrent] = React.useState("one");
  return (
    <header
      className={
        appHeaderStyles.appHeaderMain + " " + appHeaderStyles.appHeaderNet
      }
    >
      <div className={appHeaderStyles.appHeaderNet}>
        <BurgerIcon type="primary" />
        <p className="text text_type_main-default p-2 m-5">Конструктор</p>

        <ListIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive p-2 m-5">
          Лента заказов
        </p>
      </div>

      <Logo />

      <div className={appHeaderStyles.appHeaderNet}>
        <ProfileIcon type="secondary" />

        <p className="text text_type_main-default text_color_inactive p-2 m-5">
          Личный кабинет
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
