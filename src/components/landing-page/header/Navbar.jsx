import { Link } from "react-router-dom";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <section id="header-section" className="py-3">
      <div className="navbar bg-neutral text-neutral-content shadow-md rounded-box">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case">
            RK Custom Apparels
          </Link>
        </div>
        <div className="navbar-end">
          <DesktopNavMenu />
          <MobileNavMenu />
          <ThemeToggler />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
