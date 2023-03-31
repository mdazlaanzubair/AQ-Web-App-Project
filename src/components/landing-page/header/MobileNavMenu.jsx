import NavMenuItems from "./NavMenuItems";

const MobileNavMenu = () => {
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle swap swap-rotate">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" />

        {/* <!-- hamburger icon --> */}
        <svg
          className="swap-off fill-current h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* <!-- close icon --> */}
        <svg
          className="swap-on fill-current h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label> */}
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <NavMenuItems />
      </ul>
    </div>
  );
};

export default MobileNavMenu;
