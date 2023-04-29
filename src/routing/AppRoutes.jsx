import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Services from "../components/landing-page/services/Services";
import Home from "../components/landing-page/home/Home";
import Products from "../components/landing-page/products/Products";
import Dashboard from "../pages/Dashboard";
import AdminHome from "../components/dashboard/main/AdminHome";
import ProductsCRUD from "../components/dashboard/products/ProductsCRUD";
import ServicesCRUD from "../components/dashboard/services/ServicesCRUD";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="products" element={<ProductsCRUD />} />
          <Route path="services" element={<ServicesCRUD />} />
        </Route>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
