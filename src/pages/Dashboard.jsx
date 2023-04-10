import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/dashboard/header/Navbar";
import AdminFooter from "../components/dashboard/footer/Footer";

const Dashboard = () => {
  return (
    <div className="container w-full mx-auto">
      <AdminNavbar />
      <Outlet />
      <AdminFooter />
    </div>
  );
};

export default Dashboard;
