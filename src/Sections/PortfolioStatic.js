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
  return (
    <div id="portfolio" className="mainItem portfolio">
      <div className=" title">
        <h1>PORTFOLIO</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas
          architecto facere tempore saepe quia sed, explicabo officiis
          dignissimos voluptatem pariatur dolore voluptates illo corrupti quam
        </p>
      </div>
      <div className="arrow1 arrow"></div>
      <div className="arrow2 arrow"></div>
      <div
        className="portfolioItem shipsDescr description"
        style={shipsDescrStyle}
      >
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores
          deserunt temporibus quae provident et fuga! Dignissimos obcaecati
          nobis voluptatum vel natus vitae! Impedit culpa maxime error molestiae
          minus aspernatur atque, nesciunt consectetur facere a sed debitis
          aliquid unde harum ducimus, mollitia totam voluptatum recusandae
          tempore, repellat est? Dolores, culpa.
        </div>
        <div className="buttonContainer">
          <a
            href="https://lukasssicevs.github.io/ships.html"
            className="pageButton"
          >
            PAGE
          </a>
          <a
            href="https://github.com/lukasssicevs/lukasssicevs.github.io"
            className="codeButton"
          >
            CODE
          </a>
        </div>
      </div>
      <div
        className="portfolioItem shipsImg display"
        style={shipsStyle}
        ref={shipsRef}
      ></div>
      <div
        className="portfolioItem cryptoDescr description"
        style={cryptoDescrStyle}
      >
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores
          deserunt temporibus quae provident et fuga! Dignissimos obcaecati
          nobis voluptatum vel natus vitae! Impedit culpa maxime error molestiae
          minus aspernatur atque, nesciunt consectetur facere a sed debitis
          aliquid unde harum ducimus, mollitia totam voluptatum recusandae
          tempore, repellat est? Dolores, culpa.
        </div>
        <div className="buttonContainer">
          <a href="https://cryptoexplorer.vercel.app/" className="pageButton">
            PAGE
          </a>
          <a
            href="https://github.com/lukasssicevs/cryptoexplorer"
            className="codeButton"
          >
            CODE
          </a>
        </div>
      </div>
      <div
        className="portfolioItem cryptoImg display"
        style={cryptoStyle}
        ref={cryptoRef}
      ></div>
      <div
        className="portfolioItem characterizatorDescr description"
        style={charDescrStyle}
      >
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores
          deserunt temporibus quae provident et fuga! Dignissimos obcaecati
          nobis voluptatum vel natus vitae! Impedit culpa maxime error molestiae
          minus aspernatur atque, nesciunt consectetur facere a sed debitis
          aliquid unde harum ducimus, mollitia totam voluptatum recusandae
          tempore, repellat est? Dolores, culpa.
        </div>
        <div className="buttonContainer">
          <a href="https://characterizator.vercel.app/" className="pageButton">
            PAGE
          </a>
          <a
            href="https://github.com/lukasssicevs/characterizator"
            className="codeButton"
          >
            CODE
          </a>
        </div>
      </div>
      <div
        className="portfolioItem characterizatorImg display"
        style={charStyle}
        ref={charRef}
      ></div>
    </div>
  );
};

export default PortfolioStatic;
