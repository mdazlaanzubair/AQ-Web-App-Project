import React from "react";

const NavMenuItems = () => {
  const menu = [
    {
      path: "#",
      title: "Item 1",
    },
    {
      path: "#",
      title: "Item 2",
    },
    {
      path: "#",
      title: "Item 3",
    },
  ];
  return menu.map((item, index) => (
    <li key={index}>
      <a href={item.path}>{item.title}</a>
    </li>
  ));
};

export default NavMenuItems;
