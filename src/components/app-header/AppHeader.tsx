import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./AppHeader.module.css";
import { PATH_PROFILE, PATH_FEED } from "../../utils/constants";

function AppHeader() {
  const navigate = useNavigate();
  let currentSelectMenu = "";
  const currentClass =
    appHeaderStyles.buttonMenuContent + " text text_type_main-small";
  const baseClass = currentClass + " text_color_inactive";

  const location = window.location;
  switch (location.pathname) {
    case "/":
      currentSelectMenu = "constructor";
      break;
    case PATH_FEED:
      currentSelectMenu = "list";
      break;
    case PATH_PROFILE:
    case PATH_PROFILE + "/orders":
    case PATH_PROFILE + "/orders/id":
      currentSelectMenu = "profile";
      break;

    default:
      break;
  }

  return (
    <header className={appHeaderStyles.appHeaderMain + " pt-10"}>
      <div className={appHeaderStyles.appHeaderNet + " ml-10"}>
        <div className={appHeaderStyles.appHeaderNet + " ml-5 mb-4 mr-2"}>
          <div
            className={appHeaderStyles.buttonMenu + " ml-10 mt-4 mr-2"}
            onClick={(e) => {
              navigate("/");
            }}
          >
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <BurgerIcon
                type={
                  currentSelectMenu === "constructor" ? "primary" : "secondary"
                }
              />
            </div>
            <p
              className={
                currentSelectMenu === "constructor" ? currentClass : baseClass
              }
            >
              Конструктор
            </p>
          </div>
          <div
            className={appHeaderStyles.buttonMenu + " mt-4"}
            onClick={(e) => {
              navigate(PATH_FEED);
            }}
          >
            <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
              <ListIcon
                type={currentSelectMenu === "list" ? "primary" : "secondary"}
              />
            </div>
            <p
              className={
                currentSelectMenu === "list" ? currentClass : baseClass
              }
            >
              Лента заказов
            </p>
          </div>

          <div className={appHeaderStyles.logo + " ml-15 mr-15"}>
            <Logo />
          </div>

          <div className={appHeaderStyles.appHeaderNet}>
            <div
              className={appHeaderStyles.buttonMenu + " mt-4 ml-30"}
              onClick={(e) => {
                navigate(PATH_PROFILE);
              }}
            >
              <div className={appHeaderStyles.buttonMenuContent + " ml-5 mr-2"}>
                <ProfileIcon
                  type={
                    currentSelectMenu === "profile" ? "primary" : "secondary"
                  }
                />
              </div>
              <p
                className={
                  currentSelectMenu === "profile" ? currentClass : baseClass
                }
              >
                Личный кабинет
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
