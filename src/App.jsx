import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Intro from "./components/intro";
import Contact from "./components/contact";
import Work from "./components/work";

function App() {
  return (
    <>
      <div id="home">
        <Header />
        <HeroSection />
      </div>
      <div id="about">
        <Intro />
      </div>
      <div id="work">
        <Work/>
      </div>
      <div id="contact">
        <Contact />
      </div>

    </>
  );
}

export default App;
