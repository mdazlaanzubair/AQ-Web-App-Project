import { useEffect, useState } from "react";
import { useCategoriesContext } from "../../../context/categories/CategoriesContext";
import { toast } from "react-toastify";

const CategoriesCRUD = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    addNewCategory,
    updateCategory,
    deleteCategory,
  } = useCategoriesContext();

  const [cate, setCate] = useState("");

  const addCategory = (e) => {
    e.preventDefault();
    if (Object.keys(selectedCategory).length === 0) {
      addNewCategory(cate);
      toast.success("Category added successfully!");
    } else {
      updateCategory(selectedCategory.id, cate);
      setSelectedCategory({});
      toast.success("Category updated successfully!");
    }
    setCate("");
  };

  useEffect(() => setCate(selectedCategory.title), [selectedCategory]);
  //   useEffect(() => {}, [categories]);

  return (
    <>
      <input type="checkbox" id="category-popup" className="modal-toggle" />
      <label htmlFor="category-popup" className="modal cursor-pointer">
        <label className="modal-box relative max-w-5xl" htmlFor="">
          <div className="flex flex-col w-full">
            <div className="col flex flex-row justify-between items-center mb-10 gap-3">
              <input
                type="text"
                placeholder="Add new category"
                className="input input-bordered focus:outline-none w-full"
                onChange={(e) => setCate(e.target.value)}
                value={cate}
              />

              <button className="btn btn-primary" onClick={addCategory}>
                Add Category
              </button>
            </div>
            <div className="divider my-3 uppercase">List of categories</div>
            <div className="col flex flex-row flex-wrap">
              {categories.map((category, index) => (
                <button
                  className="btn btn-neutral m-1"
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  onDoubleClick={() => {
                    deleteCategory(category.id);
                    toast.success("Category deleted successfully!");
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default CategoriesCRUD;
