import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <section id="header-section" className="pt-3 mb-5">
      <div className="navbar bg-neutral text-neutral-content shadow-md rounded-box">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Logo</a>
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
