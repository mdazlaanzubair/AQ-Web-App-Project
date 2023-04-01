import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
  ];
  return menu.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ));
};

export default NavMenuItems;