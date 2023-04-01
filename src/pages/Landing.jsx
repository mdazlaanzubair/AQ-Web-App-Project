import { Outlet } from "react-router-dom";
import Footer from "../components/landing-page/footer/Footer";
import Navbar from "../components/landing-page/header/Navbar";

const Landing = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Landing;
