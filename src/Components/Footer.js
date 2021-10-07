import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerItem blank1"></div>
      <div className="footerItem blank2"></div>
      <div className="footerItem logo"></div>
      <div className="footerItem media" id="media">
        <div className="mediaItem github"></div>
        <div className="mediaItem twitter"></div>
        <div className="mediaItem linkedin"></div>
        <div className="mediaItem gmail"></div>
      </div>
      <div className="footerItem info">
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footerItem copyright">
        <h4>©2021-All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
