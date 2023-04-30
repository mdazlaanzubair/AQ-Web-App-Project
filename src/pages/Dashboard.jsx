import { Outlet } from "react-router-dom";
import AdminFooter from "../components/dashboard/footer/Footer";
import AuthNavbar from "../components/dashboard/header/Navbar";
import CategoriesCRUD from "../components/dashboard/categories/CategoriesCRUD";

const Dashboard = () => {
  return (
    <div className="container w-full mx-auto">
      <AuthNavbar />
      <Outlet />
      <AdminFooter />
      <CategoriesCRUD />
    </div>
  );
};

export default Dashboard;
