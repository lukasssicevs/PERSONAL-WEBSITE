import { i18n } from "../translations/i18n.js";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Header = ({
  langDropdownStyle,
  menuDropdownStyle,
  toggleLangDropdown,
  toggleMenuDropdown,
  headerStyle,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <header style={headerStyle}>
        <a href="#top" className="logo">
          {" "}
        </a>
        <div className="desktopMenu">
          <ul>
            <li>
              <a href="#about">{t("about")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("portfolio")}</a>
            </li>
            <li>
              <a href="#contact">{t("contact")}</a>
            </li>
            <li>
              <a href="#media">{t("socialmedia")}</a>
            </li>
          </ul>
        </div>
        <div className="langButton" onClick={() => toggleLangDropdown()}></div>
        <div className="menuButton" onClick={() => toggleMenuDropdown()}></div>
      </header>
      <div className="langDropdown" style={langDropdownStyle}>
        <ul>
          <li onClick={() => i18n.changeLanguage("en")}>EN</li>
          <li onClick={() => i18n.changeLanguage("lv")}>LV</li>
          <li>RU</li>
        </ul>
      </div>
      <div className="menuDropdown" style={menuDropdownStyle}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#media">Media</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
