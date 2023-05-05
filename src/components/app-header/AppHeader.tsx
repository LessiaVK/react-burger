import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../utils/hooks";
import { wsActions } from "../../services/store";
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
  const dispatch = useDispatch();
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
    <header className={appHeaderStyles.appHeaderMain + " mt-10 ml-10 mr-10"}>
      <div className={appHeaderStyles.buttonMenuContent + " pb-4 pr-2"}>
        <div className={appHeaderStyles.buttonMenuContentLeft + " pt-4 pr-20"}>
          <div
            className={appHeaderStyles.buttonMenuContentLeft + " pt-4  pr-2"}
            onClick={(e) => {
              dispatch({ type: wsActions.wsClose });
              navigate("/");
            }}
          >
            <div className={appHeaderStyles.buttonMenuContentLeft + " pr-2"}>
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
            className={appHeaderStyles.buttonMenu}
            onClick={(e) => {
              navigate(PATH_FEED);
            }}
          >
            <div className={appHeaderStyles.buttonMenuContent + " pl-5 pr-2"}>
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
        </div>
        <div className={appHeaderStyles.logo + " pl-6 pr-15"}>
          <Logo />
        </div>

        <div
          className={appHeaderStyles.buttonMenu + " pt-4 pl-30"}
          onClick={(e) => {
            dispatch({ type: wsActions.wsClose });
            navigate(PATH_PROFILE);
          }}
        >
          <div className={appHeaderStyles.buttonMenuContent + " pl-5 pr-2"}>
            <ProfileIcon
              type={currentSelectMenu === "profile" ? "primary" : "secondary"}
            />
          </div>
          <p
            className={
              currentSelectMenu === "profile" ? currentClass : baseClass
            }
            test-id="profile"
          >
            Личный кабинет
          </p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
