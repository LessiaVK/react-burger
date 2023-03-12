import React from "react";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./AppHeader.module.css";

function AppHeader() {
  const currentClass =
    appHeaderStyles.buttonMenuContent + " text text_type_main-small";
  const baseClass = currentClass + " text_color_inactive";
  const location = window.location;
  let constructorSelectClass = baseClass;
  let constructorSelectIconClass = "secondary";
  let listSelectClass = baseClass;
  let listSelectIconClass = "secondary";
  let profileSelectClass = baseClass;
  let profileSelectIconClass = "secondary";
  switch (location.pathname) {
    case "/":
      constructorSelectClass = currentClass;
      constructorSelectIconClass = "primary";
      break;
    case "/list":
      listSelectClass = currentClass;
      listSelectIconClass = "primary";
      break;
    case "/profile":
      profileSelectClass = currentClass;
      profileSelectIconClass = "primary";
      break;

    default:
      break;
  }

  return (
    <header className={appHeaderStyles.appHeaderMain + " pt-10"}>
      <div className={appHeaderStyles.appHeaderNet + " ml-10"}>
        <div className={appHeaderStyles.appHeaderNet + " ml-5 mb-4 mr-2"}>
          <a
            href="/"
            className={appHeaderStyles.buttonMenu + " ml-10 mt-4 mr-2"}
          >
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <BurgerIcon type={constructorSelectIconClass} />
            </div>
            <p className={constructorSelectClass}>Конструктор</p>
          </a>
          <a href="/list" className={appHeaderStyles.buttonMenu + " mt-4"}>
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <ListIcon type={listSelectIconClass} />
            </div>
            <p className={listSelectClass}>Лента заказов</p>
          </a>

          <div className={appHeaderStyles.logo + " ml-15 mr-15"}>
            <Logo />
          </div>

          <div className={appHeaderStyles.appHeaderNet}>
            <a
              href="/profile"
              className={appHeaderStyles.buttonMenu + " mt-4 ml-30"}
            >
              <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
                <ProfileIcon type={profileSelectIconClass} />
              </div>
              <p className={profileSelectClass}>Личный кабинет</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
