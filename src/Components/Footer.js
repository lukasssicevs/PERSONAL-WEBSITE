import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footerItem logo"></div>
      <div className="footerItem media" id="media">
        <a
          className="mediaItem github"
          href="https://github.com/lukasssicevs"
        > </a>
        <a className="mediaItem twitter" href="https://twitter.com/LSicevs"> </a>
        <a
          className="mediaItem linkedin"
          href="https://www.linkedin.com/in/lukass-sicevs-655600201/"
        > </a>
        <a
          className="mediaItem gmail"
          href="mailto:lukass.sicevs@gmail.com"
        > </a>
      </div>
      <div className="footerItem info">
        <ul>
          <li>
            <a href="#top">{t("home")}</a>
          </li>
          <li>
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#portfolio">{t("portfolio")}</a>
          </li>
          <li>
            <a href="#contact">{t("contact")}</a>
          </li>
        </ul>
      </div>
      <div className="footerItem copyright">
        <h6>{t("copyright")}</h6>
      </div>
    </footer>
  );
};

export default Footer;
