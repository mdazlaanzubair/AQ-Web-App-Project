import NavMenuItems from "./NavMenuItems";

const DesktopNavMenu = () => {
  return (
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <NavMenuItems />
    </ul>
  );
}

export default DesktopNavMenu
