import { toast } from "react-toastify";
import { useCategoriesContext } from "../../../context/categories/CategoriesContext";
import { useProductsContext } from "../../../context/products/ProductsContext";
import { useEffect, useState } from "react";

const ProductForm = () => {
  const { categories } = useCategoriesContext();
  const { selectedProduct, setSelectedProduct, addNewProduct, updateProduct } =
    useProductsContext();

  // form states
  const [name, setName] = useState("");
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    // Add or remove the value from the array depending on whether the checkbox was checked or unchecked
    if (isChecked) {
      setSizes([...sizes, value]);
    } else {
      setSizes(sizes.filter((item) => item !== value));
    }
  };

  const resetStates = () => {
    setName("");
    setSizes([]);
    setCategory("");
    setDesc("");
    setStock(0);
    setPrice(0);
    setImage(null);
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    // Check for errors
    const errors = {};
    if (name.trim() === "") {
      errors.name = "Name is required";
      toast.error(errors.name);
    }
    if (sizes.length === 0) {
      errors.sizes = "Please select at least one size";
      toast.error(errors.sizes);
    }
    if (category.trim() === "") {
      errors.category = "Category is required";
      toast.error(errors.category);
    }
    if (desc.trim() === "") {
      errors.desc = "Description is required";
      toast.error(errors.desc);
    }
    if (stock <= 0) {
      errors.stock = "Stock must be greater than 0";
      toast.error(errors.stock);
    }
    if (price <= 0) {
      errors.price = "Price must be greater than 0";
      toast.error(errors.price);
    }

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      if (Object.keys(selectedProduct).length === 0) {
        const newProduct = {
          id: Date.now() + Math.random(),
          name,
          sizes,
          category,
          stock,
          price,
          img: "https://picsum.photos/200/300",
          desc,
        };

        addNewProduct(newProduct);
        toast.success("Product added successfully!");
      } else {
        const updatedProduct = {
          name,
          sizes,
          category,
          stock,
          price,
          img: "https://picsum.photos/200/300",
          desc,
        };

        updateProduct(selectedProduct?.id, updatedProduct);
        toast.success("Product updated successfully!");
        setSelectedProduct({});
      }
      resetStates();
    } else {
      // Set errors state
      setErrors(errors);
    }
  };

  useEffect(() => {
    if (Object.keys(selectedProduct).length === 0) resetStates();
    else {
      setName(selectedProduct?.name);
      setSizes(selectedProduct?.sizes);
      setCategory(selectedProduct?.category);
      setDesc(selectedProduct?.desc);
      setStock(selectedProduct?.stock);
      setPrice(selectedProduct?.price);
    }
  }, [selectedProduct]);

  return (
    <>
      <input type="checkbox" id="popup_form" className="modal-toggle" />
      <label htmlFor="popup_form" className="modal cursor-pointer">
        <label className="modal-box relative">
          <label
            htmlFor="popup_form"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <form onSubmit={handelSubmit}>
            <h3 className="text-lg font-bold">
              {Object.keys(selectedProduct).length === 0
                ? "Add New Product"
                : "Updating " + selectedProduct?.name}
            </h3>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Title"
                className="input input-bordered focus:outline-none input-md"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Sizes</span>
              </label>
              <div className="form-control flex flex-row flex-wrap">
                {["S", "M", "L", "XL", "2XL", "3XL"].map((size_item, index) => (
                  <label className="cursor-pointer label m-2" key={index}>
                    <span className="label-text mr-3">{size_item}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary checkbox-sm"
                      onChange={handleCheckboxChange}
                      checked={sizes?.includes(size_item)}
                      value={size_item}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Category</span>
              </label>
              <select
                className="select select-bordered focus:outline-none"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option>Select Category</option>
                {categories?.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Stock(s)</span>
              </label>
              <input
                type="number"
                placeholder="Stock Available"
                className="input input-bordered focus:outline-none input-md"
                onChange={(e) => setStock(e.target.value)}
                value={stock}
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Unit Price</span>
              </label>
              <input
                type="number"
                placeholder="Cost Per Unit"
                className="input input-bordered focus:outline-none input-md"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description of product"
                className="textarea textarea-bordered focus:outline-none textarea-md"
                rows={3}
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Product Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full focus:outline-none"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => setImage(e.target.files)}
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="capitalize btn btn-block btn-success"
              >
                {Object.keys(selectedProduct).length === 0
                  ? "Add New Product"
                  : "Update"}
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default ProductForm;
