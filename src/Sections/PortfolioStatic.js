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
        <h2>PORTFOLIO</h2>
      </div>
      <div className="arrow1 arrow"></div>
      <div className="arrow2 arrow"></div>
      <div
        className="portfolioItem shipsDescr description"
        style={shipsDescrStyle}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio
        excepturi reprehenderit consectetur voluptatum aliquam et quis minima
        exercitationem eius, ut, dolores quam illum alias atque tenetur
        accusantium cum expedita natus. Perspiciatis id, quae quam ducimus
        ratione quibusdam voluptatum illum fuga nesciunt neque laudantium porro,
        odit harum. Impedit quas velit, tenetur reiciendis hic error temporibus
        nisi, laboriosam officiis laudantium voluptatem, doloribus provident? Ex
        qui animi enim eius! Saepe, consectetur molestias a est iusto deleniti
        quisquam tempora excepturi quibusdam, recusandae id debitis nostrum
        veniam, maiores aspernatur. Deleniti, libero modi, omnis eius, nostrum
        quos vitae odio dolorum et praesentium alias provident tempore.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio
        excepturi reprehenderit consectetur voluptatum aliquam et quis minima
        exercitationem eius, ut, dolores quam illum alias atque tenetur
        accusantium cum expedita natus. Perspiciatis id, quae quam ducimus
        ratione quibusdam voluptatum illum fuga nesciunt neque laudantium porro,
        odit harum. Impedit quas velit, tenetur reiciendis hic error temporibus
        nisi, laboriosam officiis laudantium voluptatem, doloribus provident? Ex
        qui animi enim eius! Saepe, consectetur molestias a est iusto deleniti
        quisquam tempora excepturi quibusdam, recusandae id debitis nostrum
        veniam, maiores aspernatur. Deleniti, libero modi, omnis eius, nostrum
        quos vitae odio dolorum et praesentium alias provident tempore.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos
        illum, animi facere veniam, aliquid ut, corrupti minima perspiciatis
        iure sapiente! Dicta, earum! Aut dignissimos dicta, aliquid ullam
        mollitia a voluptas adipisci repellat dolor tempore atque ratione
        blanditiis! Voluptas tempore, facere voluptatem nihil quos nam tenetur
        laudantium dolore officiis incidunt excepturi dolor doloremque autem ut
        vero quaerat in molestiae! Praesentium, voluptas tempora fuga eum eius
        explicabo architecto molestias porro odio veniam voluptates fugit
        reiciendis exercitationem obcaecati saepe sed nulla quaerat sit eos
        soluta quia, consectetur nobis veritatis quasi? Accusamus nemo corrupti
        esse animi adipisci a, quasi labore molestiae cupiditate rem?
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
