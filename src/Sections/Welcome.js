import "./Welcome.css";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mainItem welcomeImg"></div>
      <div className="mainItem welcomeText">
        {/* <h1>
          "The world of reality has its limits; the world of imagination is
          boundless."
        </h1>
        <h5>-Jean-Jacques Rousseau </h5> */}
      </div>
    </>
  );
};

export default Welcome;
