import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import ThemeToggler from "./ThemeToggler";

const AdminNavbar = () => {
  return (
    <section id="header-section" className="py-3">
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

export default AdminNavbar;
