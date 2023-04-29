import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContentProvider from "./context/content/ContentContext";
import ThemeProvider from "./context/theme/ThemeContext";
import "./index.css";
import ServicesProvider from "./context/services/ServicesContext";
import ProductsProvider from "./context/products/ProductsContext";
import CartProvider from "./context/cart/CartContext";
import CategoriesProvider from "./context/categories/CategoriesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ServicesProvider>
      <ProductsProvider>
        <CartProvider>
          <CategoriesProvider>
            <ContentProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </ContentProvider>
          </CategoriesProvider>
        </CartProvider>
      </ProductsProvider>
    </ServicesProvider>
  </React.StrictMode>
);
