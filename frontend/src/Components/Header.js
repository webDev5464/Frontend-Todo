import React from "react";
import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="relative">
      <div className="py-2 bg-zinc-600 fixed top-0 w-screen z-10">
        <h1 className="m-auto w-fit text-lg font-bold">My Todo App</h1>
        <div className="absolute top-1 left-4 text-transparent">
          <NavLink to="admin">
            <RiAdminFill />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
