import CallToAction from "../components/landing-page/CTA/CallToAction";
import Footer from "../components/landing-page/footer/Footer";
import Navbar from "../components/landing-page/header/Navbar";
import HeroSlider from "../components/landing-page/hero/HeroSlider";
import Services from "../components/landing-page/services/Services";

const Landing = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <HeroSlider />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Landing;
