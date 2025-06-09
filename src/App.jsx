import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Intro from "./components/intro";
import Work from "./components/work";
import Contact from "./components/contact";

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
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
