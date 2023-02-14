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
    <header className={appHeaderStyles.appHeaderMain + " pt-10"}>
      <div className={appHeaderStyles.appHeaderNet + " ml-10"}>
        <div className={appHeaderStyles.appHeaderNet + " ml-5 mb-4 mr-2"}>
          <a
            href="#"
            className={appHeaderStyles.buttonMenu + " ml-10 mt-4 mr-2"}
          >
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <BurgerIcon type="primary" />
            </div>
            <p
              className={
                appHeaderStyles.buttonMenuContent + " text text_type_main-small"
              }
            >
              Конструктор
            </p>
          </a>
          <a href="#" className={appHeaderStyles.buttonMenu + " mt-4"}>
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <ListIcon type="secondary" />
            </div>
            <p
              className={
                appHeaderStyles.buttonMenuContent +
                " text text_type_main-small text_color_inactive"
              }
            >
              Лента заказов
            </p>
          </a>

          <div className={appHeaderStyles.logo + " ml-15 mr-15"}>
            <Logo />
          </div>

          <div className={appHeaderStyles.appHeaderNet}>
            <a href="#" className={appHeaderStyles.buttonMenu + " mt-4 ml-30"}>
              <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
                <ProfileIcon type="secondary" />
              </div>
              <p
                className={
                  appHeaderStyles.buttonMenuContent +
                  " text text_type_main-small text_color_inactive"
                }
              >
                Личный кабинет
              </p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
