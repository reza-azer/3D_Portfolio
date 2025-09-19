import NavBar from "./components/NavBar";
import SplashCursor from "./components/SplashCursor";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";


const App = () => {
  return (
    <>
      
      <NavBar />
      <Hero />
      {/* <ShowcaseSection /> */}
      <FeatureCards />
      {/* <ExperienceSection /> */}
      <Contact />
      <Footer />
      <SplashCursor />
    </>
  );
};

export default App;