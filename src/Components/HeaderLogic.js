import "./Header.css";
import { useState } from "react";
import Header from "./Header";

const HeaderLogic = () => {
  const [menuDropdownStyle, setMenuDropdownStyle] = useState({ height: "0em" });
  const [langDropdownStyle, setLangDropdownStyle] = useState({ height: "0em" });
  const [menu, setMenu] = useState(false);
  const [lang, setLang] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});
  const [scroll, setScroll] = useState(0);

  window.onscroll = () => {
    if (scroll < document.documentElement.scrollTop) {
      setHeaderStyle({ transform: "translateY(-6em)" });
      setLangDropdownStyle({ transform: "translateY(-6em)" });
      setMenuDropdownStyle({ transform: "translateY(-6em)" });
      setMenu(false);
      setLang(false);
    } else {
      setHeaderStyle({ transform: "translateY(0em)" });
      setLangDropdownStyle({ transform: "translateY(0em)" });
      setMenuDropdownStyle({ transform: "translateY(0em)" });
    }

    setScroll(document.documentElement.scrollTop);
  };

  const toggleMenuDropdown = () => {
    if (menu) {
      setMenuDropdownStyle({ height: "0em" });
      setMenu(false);
    } else {
      setMenuDropdownStyle({ height: "20em" });
      setMenu(true);
    }
  };

  const toggleLangDropdown = () => {
    if (lang) {
      setLangDropdownStyle({ height: "0em" });
      setLang(false);
    } else {
      setLangDropdownStyle({ height: "4.6em" });
      setLang(true);
    }
  };

  return (
    <Header
      toggleLangDropdown={toggleLangDropdown}
      toggleMenuDropdown={toggleMenuDropdown}
      menuDropdownStyle={menuDropdownStyle}
      langDropdownStyle={langDropdownStyle}
      headerStyle={headerStyle}
    />
  );
};

export default HeaderLogic;
