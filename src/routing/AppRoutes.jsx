import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Services from "../components/landing-page/services/Services";
import Home from "../components/landing-page/home/Home";
import Products from "../components/landing-page/products/Products";
import CartProvider from "../context/cart/CartContext";
import Dashboard from "../pages/Dashboard";
import AdminHome from "../components/dashboard/main/AdminHome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<AdminHome />} />
        </Route>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route
            path="products"
            element={
              <CartProvider>
                <Products />
              </CartProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
