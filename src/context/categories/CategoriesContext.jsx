import { createContext, useContext, useState } from "react";

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    "T-Shirt",
    "Pant",
    "Jersey",
    "Hoodie",
  ]);

  const value = {
    categories,
    setCategories,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
