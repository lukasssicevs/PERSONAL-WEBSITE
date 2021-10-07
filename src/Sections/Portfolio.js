import PortfolioStatic from "./PortfolioStatic";
import { useState, useRef, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [shipsStyle, setShipsStyle] = useState({});
  const [cryptoStyle, setCryptoStyle] = useState({});
  const [charStyle, setCharStyle] = useState({});
  const [shipsDescrStyle, setShipsDescrStyle] = useState({});
  const [cryptoDescrStyle, setCryptoDescrStyle] = useState({});
  const [charDescrStyle, setCharDescrStyle] = useState({});

  const shipsRef = useRef();
  const cryptoRef = useRef();
  const charRef = useRef();

  useEffect(() => {
    const shipsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShipsStyle({ animation: "slideFromRight 1s 1", opacity: "1" });
          setShipsDescrStyle({ animation: "slideUp 1s 1", opacity: "1" });
        } else {
          setShipsStyle({ animation: "slideToRight 1s 1", opacity: "0" });
          setShipsDescrStyle({ animation: "slideDown 1s 1", opacity: "0" });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (shipsRef.current) {
      shipsObserver.observe(shipsRef.current);
    }

    const cryptoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCryptoStyle({ animation: "slideFromRight 1s 1", opacity: "1" });
          setCryptoDescrStyle({ animation: "slideUp 1s 1", opacity: "1" });
        } else {
          setCryptoStyle({ animation: "slideToRight 1s 1", opacity: "0" });
          setCryptoDescrStyle({ animation: "slideDown 1s 1", opacity: "0" });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (cryptoRef.current) {
      cryptoObserver.observe(cryptoRef.current);
    }

    const charObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCharStyle({ animation: "slideFromRight 1s 1", opacity: "1" });
          setCharDescrStyle({ animation: "slideUp 1s 1", opacity: "1" });
        } else {
          setCharStyle({ animation: "slideToRight 1s 1", opacity: "0" });
          setCharDescrStyle({ animation: "slideDown 1s 1", opacity: "0" });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (charRef.current) {
      charObserver.observe(charRef.current);
    }
  }, [shipsRef, cryptoRef, charRef]);

  return (
    <PortfolioStatic
      shipsDescrStyle={shipsDescrStyle}
      shipsStyle={shipsStyle}
      shipsRef={shipsRef}
      cryptoDescrStyle={cryptoDescrStyle}
      cryptoStyle={cryptoStyle}
      cryptoRef={cryptoRef}
      charDescrStyle={charDescrStyle}
      charStyle={charStyle}
      charRef={charRef}
    />
  );
};

export default Portfolio;
