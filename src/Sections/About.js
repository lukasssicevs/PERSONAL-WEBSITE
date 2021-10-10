import "./About.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const [aboutStyle, setAboutStyle] = useState({});
  const aboutRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutStyle({ animation: "aboutTextOn 1s 1", opacity: "1" });
        } else {
          setAboutStyle({ animation: "aboutTextOff 0.6s 1", opacity: "0" });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }
  }, []);

  return (
    <>
      <div className="mainItem aboutImg"></div>
      <div className="mainItem" id="about">
        <div className="aboutTitle">
          <h1>{t("aboutHead")}</h1>
        </div>
        <div className="aboutText" style={aboutStyle} ref={aboutRef}>
          <h2 style={{ color: "rgba(247, 184, 165)" }}>{t("aboutQ1")}</h2>
          <p>
            {t("aboutA1")}
          </p>
          <h2 style={{ color: "rgba(71, 189, 255)" }}>{t("aboutQ2")}</h2>
          <p>
            {t("aboutA2")}
          </p>
          <h2 style={{ color: "rgba(254, 218, 92)" }}>{t("aboutQ3")}</h2>
          <ul>
          <li><p>{t("aboutA3_1")}</p></li>
          <li><p>{t("aboutA3_2")}</p></li>
          <li><p>{t("aboutA3_3")}</p></li>
          <li><p>{t("aboutA3_4")}</p></li>
          <li><p>{t("aboutA3_5")}</p></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
