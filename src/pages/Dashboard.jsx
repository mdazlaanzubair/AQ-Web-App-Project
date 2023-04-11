import { Outlet } from "react-router-dom";
import AdminFooter from "../components/dashboard/footer/Footer";
import AuthNavbar from "../components/dashboard/header/Navbar";

const Dashboard = () => {
  return (
    <div className="container w-full mx-auto">
      <AuthNavbar />
      <Outlet />
      <AdminFooter />
    </div>
  );
};

export default Dashboard;
