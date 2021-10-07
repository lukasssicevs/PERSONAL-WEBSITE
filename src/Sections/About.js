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
        <div className="title">
          <h2>ABOUT ME</h2>
        </div>
        <div className="aboutText" style={aboutStyle} ref={aboutRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          accusamus a nulla minima dolore, minus quos totam? Velit possimus
          iusto assumenda at voluptatum, quos facilis, rerum reprehenderit eos
          reiciendis sunt ipsa nemo expedita quae sequi, labore impedit eveniet
          minus suscipit fugit sapiente. Voluptate totam in, porro sint illum
          aperiam animi temporibus quidem assumenda cupiditate quia. Autem quod
          sit illo? Unde, fugit, ut at pariatur omnis odio nemo perspiciatis
          nulla velit sint dolor? Hic deserunt aut repudiandae libero quasi
          architecto, fugiat nihil, quis placeat sapiente eos rerum accusantium
          ut dicta maiores dolorem omnis quia pariatur! Neque saepe quod dolore
          tempore dignissimos quam dolores placeat nulla, vel pariatur culpa,
          eveniet, in iste consequuntur. Labore ipsam optio ea repellendus
          eveniet repudiandae. Quisquam tempora provident necessitatibus ipsa ex
          libero dolorem veritatis voluptatibus velit tenetur, sed distinctio
          exercitationem quas asperiores magnam hic dignissimos non dolores
          praesentium aperiam. Perferendis, non? Dolorum eveniet repellendus
          officiis enim sapiente recusandae vel temporibus eum fugit illo
          mollitia aliquid cum sint hic distinctio sunt odit natus praesentium
          doloribus, expedita, nobis pariatur, earum rem laborum. Quibusdam
          voluptatum nemo sint veritatis necessitatibus laudantium fugiat quis
          odit nobis tempora labore repellat amet fuga, quas quod esse
          architecto suscipit in accusamus? Labore, consequatur non.
        </div>
      </div>
    </>
  );
};

export default About;
