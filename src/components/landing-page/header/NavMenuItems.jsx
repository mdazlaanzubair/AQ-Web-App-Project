import { Link } from "react-router-dom";

const NavMenuItems = () => {
  const menu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];
  return menu.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ));
};

export default NavMenuItems;
