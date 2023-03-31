import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavMenuItems = () => {
  const menu = [
    {
      path: "#hero-section",
      title: "Home",
    },
    {
      path: "#service-section",
      title: "Services",
    },
    {
      path: "#",
      title: "Item 3",
    },
  ];
  return menu.map((item, index) => (
    <li key={index}>
      <AnchorLink href={item.path}>{item.title}</AnchorLink>
      {/* <a ></a> */}
    </li>
  ));
};

export default NavMenuItems;
