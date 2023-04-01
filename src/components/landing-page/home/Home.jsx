import React from "react";
import HeroSlider from "./HeroSlider";
import CallToAction from "../CTA/CallToAction";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <About />
      <CallToAction />
      <Testimonials />
    </>
  );
};

export default Home;
