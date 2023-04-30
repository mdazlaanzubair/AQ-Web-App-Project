import { Link } from "react-router-dom";

const NavMenuItems = () => {
  const menu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/dashboard/services",
      title: "Services",
    },
    {
      path: "/dashboard/products",
      title: "Products",
    },
    {
      path: "/dashboard/categories",
      title: "Category",
    },
  ];
  return menu.map((item, index) => (
    <li key={index}>
      {item.title === "Category" ? (
        <label htmlFor="category-popup">{item.title}</label>
      ) : (
        <Link to={item.path}>{item.title}</Link>
      )}
    </li>
  ));
};

export default NavMenuItems;
