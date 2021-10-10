import { useTranslation } from "react-i18next";

const PortfolioStatic = ({
  shipsDescrStyle,
  shipsStyle,
  shipsRef,
  cryptoDescrStyle,
  cryptoStyle,
  cryptoRef,
  charDescrStyle,
  charStyle,
  charRef,
}) => {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="mainItem portfolio">
      <div className=" title">
        <h1>{t("portfolioHead")}</h1>
        <p>
          {t("portfolioIntro")}
        </p>
      </div>
      <div className="arrow1 arrow"></div>
      <div className="arrow2 arrow"></div>
      <div
        className="portfolioItem shipsDescr description"
        style={shipsDescrStyle}
      >
        <div className="text">
          <h2 style={{ color: "rgba(1, 151, 146)" }}>SHIPS</h2>
          <p style={{ color: "rgba(1, 151, 146)" }}>
            {t("ships")}
          </p>
        </div>
        <div className="buttonContainer">
          <a
            href="https://lukasssicevs.github.io/ships.html"
            className="greenPageButton"
          >
            {t("page")}
          </a>
          <a
            href="https://github.com/lukasssicevs/lukasssicevs.github.io"
            className="greenCodeButton"
          >
            {t("code")}
          </a>
        </div>
      </div>
      <a
        href="https://lukasssicevs.github.io/ships.html"
        className="portfolioItem shipsImg display"
        style={shipsStyle}
        ref={shipsRef}
      > </a>
      <div
        className="portfolioItem cryptoDescr description"
        style={cryptoDescrStyle}
      >
        <div className="text">
          <h2 style={{ color: "rgba(227, 19, 118)" }}>CRYPTO EXPLORER</h2>
          <p style={{ color: "rgba(227, 19, 118)" }}>
            {t("cryptoexplorer")}
          </p>
        </div>
        <div className="buttonContainer">
          <a
            href="https://cryptoexplorer.vercel.app/"
            className="redPageButton"
          >
            {t("page")}
          </a>
          <a
            href="https://github.com/lukasssicevs/cryptoexplorer"
            className="redCodeButton"
          >
            {t("code")}
          </a>
        </div>
      </div>
      <a
        href="https://cryptoexplorer.vercel.app/"
        className="portfolioItem cryptoImg display"
        style={cryptoStyle}
        ref={cryptoRef}
      > </a>
      <div
        className="portfolioItem characterizatorDescr description"
        style={charDescrStyle}
      >
        <div className="text">
          <h2 style={{ color: "rgba(226, 201, 168)" }}>CHARACTERIZATOR</h2>
          <p style={{ color: "rgba(226, 201, 168)" }}>
            {t("characterizator")}
          </p>
        </div>
        <div className="buttonContainer">
          <a
            href="https://characterizator.vercel.app/"
            className="yellowPageButton"
          >
           {t("page")}
          </a>
          <a
            href="https://github.com/lukasssicevs/characterizator"
            className="yellowCodeButton"
          >
            {t("code")}
          </a>
        </div>
      </div>
      <a
        href="https://characterizator.vercel.app/"
        className="portfolioItem characterizatorImg display"
        style={charStyle}
        ref={charRef}
      > </a>
    </div>
  );
};

export default PortfolioStatic;
