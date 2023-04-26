import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Services from "../components/landing-page/services/Services";
import Home from "../components/landing-page/home/Home";
import Products from "../components/landing-page/products/Products";
import CartProvider from "../context/cart/CartContext";
import Dashboard from "../pages/Dashboard";
import AdminHome from "../components/dashboard/main/AdminHome";
import ServicesProvider from "../context/services/ServicesContext";
import ProductsProvider from "../context/products/ProductsContext";
import ProductsCRUD from "../components/dashboard/products/ProductsCRUD";
import ServicesCRUD from "../components/dashboard/services/ServicesCRUD";
import CategoriesProvider from "../context/categories/CategoriesContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AdminHome />} />
          <Route
            path="products"
            element={
              <ProductsProvider>
                <CategoriesProvider>
                  <ProductsCRUD />
                </CategoriesProvider>
              </ProductsProvider>
            }
          />
          <Route
            path="services"
            element={
              <ServicesProvider>
                <ServicesCRUD />
              </ServicesProvider>
            }
          />
        </Route>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route
            path="services"
            element={
              <ServicesProvider>
                <Services />
              </ServicesProvider>
            }
          />
          <Route
            path="products"
            element={
              <ProductsProvider>
                <CartProvider>
                  <Products />
                </CartProvider>
              </ProductsProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
