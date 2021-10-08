import "./Contact.css";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="mainItem contact" id="contact">
      <div className="title">
        <h1>CONNECT</h1>
      </div>
      <form className="form" action="" method="POST">
        <input
          className="formElements name"
          type="name"
          name="name"
          placeholder={t("namePlaceHolder")}
        ></input>
        <input
          className="formElements email"
          type="email"
          name="email"
          placeholder={t("emailPlaceHolder")}
        ></input>
        <textarea
          className="formElements message"
          name="message"
          placeholder={t("textPlaceHolder")}
        ></textarea>
        <input
          className="formElements submit"
          type="submit"
          value={t("submit")}
        ></input>
      </form>
    </div>
  );
};

export default Contact;
