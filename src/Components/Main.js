import Welcome from "../Sections/Welcome";
import About from "../Sections/About";
import Portfolio from "../Sections/Portfolio";
import Contact from "../Sections/Contact";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
