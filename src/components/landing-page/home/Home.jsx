import HeroSlider from "./HeroSlider";
import CallToAction from "./CallToAction";
import About from "./About";
import Testimonials from "./Testimonials";
import ScrollTop from "./ScrollTop";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollTop />
      <HeroSlider />
      <About />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
