import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <section id="header-section" className="py-3">
      <div className="navbar bg-neutral text-neutral-content shadow-md rounded-box">
        <div className="navbar-start">
          <Link to="/admin/dashboard" className="btn btn-ghost normal-case">
            RK Custom Apparels
          </Link>
        </div>
        <div className="navbar-end">
          <DesktopNavMenu />
          <MobileNavMenu />
          <AdminMenu />
        </div>
      </div>
    </section>
  );
};

export default AuthNavbar;
