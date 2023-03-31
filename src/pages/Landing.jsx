import Footer from "../components/landing-page/footer/Footer";
import Navbar from "../components/landing-page/header/Navbar";
import Hero from "../components/landing-page/hero/Hero";

const Landing = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Landing;
