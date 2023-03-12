import React, { useState, useEffect } from "react";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./AppHeader.module.css";

function AppHeader() {
  const currentClass = appHeaderStyles.buttonMenuContent + " text text_type_main-small";
  const baseClass = currentClass + " text_color_inactive";
  const manuArr = ["contructor", "list", "profile"];
  // const location = window.location;
  const [current, setCurrent] = useState("contructor");
  const [curStyle, setCurStyle] = useState([
    "primary",
    currentClass,
    "secondary",
    baseClass,
    "secondary",
    baseClass,
  ]);
  const stateCurrent = (props) => {
    setCurrent(props.name);
    console.log('setCurrent',current);
  };

  useEffect(() => {
    let stylesArr = [];
    manuArr.map((element) => {
      if (current === element) {
        stylesArr.push("primary");
        stylesArr.push(currentClass);
      } else {
        stylesArr.push("secondary");
        stylesArr.push(baseClass);
      }
    });
    setCurStyle(stylesArr);
  }, [current]);

  return (
    <header className={appHeaderStyles.appHeaderMain + " pt-10"}>
      <div className={appHeaderStyles.appHeaderNet + " ml-10"}>
        <div className={appHeaderStyles.appHeaderNet + " ml-5 mb-4 mr-2"}>
          <a
            href="/"
            className={appHeaderStyles.buttonMenu + " ml-10 mt-4 mr-2"}
            onClick={stateCurrent}
            name="contructor"
          >
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <BurgerIcon type={curStyle[0]} />
            </div>
            <p className={curStyle[1]}>Конструктор</p>
          </a>
          <a
            href="/"
            className={appHeaderStyles.buttonMenu + " mt-4"}
            onClick={stateCurrent}
            name="list"
          >
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <ListIcon type={curStyle[2]} />
            </div>
            <p className={curStyle[3]}>Лента заказов</p>
          </a>

          <div className={appHeaderStyles.logo + " ml-15 mr-15"}>
            <Logo />
          </div>

          <div className={appHeaderStyles.appHeaderNet}>
            <a
              href="/profile"
              className={appHeaderStyles.buttonMenu + " mt-4 ml-30"}
              onClick={stateCurrent}
              name="profile"
            >
              <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
                <ProfileIcon type={curStyle[4]} />
              </div>
              <p className={curStyle[5]}>Личный кабинет</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
