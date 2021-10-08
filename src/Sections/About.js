import "./About.css";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [aboutStyle, setAboutStyle] = useState({});
  const aboutRef = useRef();
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
          <h1>ABOUT ME</h1>
        </div>
        <div className="aboutText" style={aboutStyle} ref={aboutRef}>
          <h2>Who am I?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fuga
            voluptatibus perferendis voluptate veritatis dolorum dolores,
            quisquam explicabo commodi? Laudantium sunt aperiam pariatur,
            officiis perspiciatis totam quia commodi ullam deleniti ipsa magni
            id vero magnam iusto consequatur qui est molestias quod tempore eius
            harum. Porro impedit eaque excepturi alias necessitatibus.
          </p>
          <h2>What I do?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fuga
            voluptatibus perferendis voluptate veritatis dolorum dolores,
            quisquam explicabo commodi? Laudantium sunt aperiam pariatur,
            officiis perspiciatis totam quia commodi ullam deleniti ipsa magni
            id vero magnam iusto consequatur qui est molestias quod tempore eius
            harum. Porro impedit eaque excepturi alias necessitatibus.
          </p>
          <h2>What excites me?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fuga
            voluptatibus perferendis voluptate veritatis dolorum dolores,
            quisquam explicabo commodi? Laudantium sunt aperiam pariatur,
            officiis perspiciatis totam quia commodi ullam deleniti ipsa magni
            id vero magnam iusto consequatur qui est molestias quod tempore eius
            harum. Porro impedit eaque excepturi alias necessitatibus.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
