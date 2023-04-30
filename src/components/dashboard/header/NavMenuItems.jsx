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
      path: "/dashboard/content",
      title: "Content",
    },
  ];
  return menu.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ));
};

export default NavMenuItems;
