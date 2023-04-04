import HeroSlider from "./HeroSlider";
import CallToAction from "../CTA/CallToAction";
import About from "./About";
import Testimonials from "./Testimonials";
import ScrollTop from "./ScrollTop";
import FAQ from "./FAQ";

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
    </>
  );
};

export default Home;
