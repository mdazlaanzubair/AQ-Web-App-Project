import { createContext, useContext, useState } from "react";

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    { id: 1, title: "T-Shirt" },
    { id: 2, title: "Pant" },
    { id: 3, title: "Jersey" },
    { id: 4, title: "Hoodie" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState({});

  const addNewCategory = (title) => {
    const newCategory = { id: categories.length + 1, title };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (id, title) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === id) {
        return { ...category, title };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
  };

  const value = {
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    addNewCategory,
    updateCategory,
    deleteCategory,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
