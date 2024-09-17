import React from "react";
import { NavLink } from "react-router-dom";
import sidebarlogo from "../../../src/assets/images.png";
import { IoHomeSharp } from "react-icons/io5";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <>
      <div className="min-w-[17vw] fixed h-[100vh] border border-r-gray-300  p-6 pt-12 hidden lg:block">
        <div className="flex flex-col space-y-3 items-start ">
          <img src={sidebarlogo} className="w-36 pb-8" />

          <NavLink to="/">
            <div className="flex space-x-4 items-center hover:bg-slate-100 px-4 py-2 w-[200px] rounded-sm ">
              <IoHomeSharp className="text-2xl" />
              <span className="text-md font-medium cursor-pointer">Home</span>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="flex space-x-4 items-center hover:bg-slate-100 px-4 py-2 w-[200px] rounded-sm">
              <CiSearch className="text-3xl" />
              <span className="text-md font-medium cursor-pointer">Search</span>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="flex space-x-4 items-center hover:bg-slate-100 px-4 py-2 w-[200px] rounded-sm">
              <FaRegHeart className="text-2xl" />
              <span className="text-md font-medium cursor-pointer">
                Notifications
              </span>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="flex space-x-4 items-center hover:bg-slate-100 px-4 py-2 w-[200px] rounded-sm">
              <FaRegSquarePlus className="text-2xl" />
              <span className="text-md font-medium cursor-pointer">Create</span>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="flex space-x-4 items-center hover:bg-slate-100 px-4 py-2 w-[200px] rounded-sm">
              <CgProfile className="text-2xl" />
              <span className="text-md font-medium cursor-pointer">
                Profile
              </span>
            </div>
          </NavLink>
          <NavLink to="/authentication">
            <div className="flex space-x-4 items-center  hover:bg-slate-100 px-4 py-2 w-[200px] rounded-sm absolute bottom-6">
              <RiLogoutCircleLine className="text-2xl" />
              <span className="text-md font-medium">Logout</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className=" bg-white fixed bottom-0 flex w-full justify-evenly pt-2 pb-2 border border-t-gray-300 lg:hidden">
        <NavLink to="/">
          <IoHomeSharp className="text-2xl" />
        </NavLink>
        <NavLink to="/">
          <CiSearch className="text-3xl" />
        </NavLink>
        <NavLink to="/">
          {" "}
          <FaRegSquarePlus className="text-2xl" />
        </NavLink>
        <NavLink to="/">
          {" "}
          <CiHeart className="text-3xl" />
        </NavLink>
        <NavLink to="/">
          {" "}
          <CgProfile className="text-2xl" />
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
