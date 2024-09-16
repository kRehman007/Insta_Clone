import React from "react";
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
        <div className="flex flex-col space-y-3 items-start">
          <img src={sidebarlogo} className="w-36 pb-8" />
          <div className="flex space-x-4 items-center pb-6">
            <IoHomeSharp className="text-2xl" />
            <span className="text-md font-medium cursor-pointer">Home</span>
          </div>
          <div className="flex space-x-4 items-center pb-6">
            <CiSearch className="text-3xl" />
            <span className="text-md font-medium cursor-pointer">Search</span>
          </div>
          <div className="flex space-x-4 items-center pb-6">
            <FaRegHeart className="text-2xl" />
            <span className="text-md font-medium cursor-pointer">
              Notifications
            </span>
          </div>
          <div className="flex space-x-4 items-center pb-6">
            <FaRegSquarePlus className="text-2xl" />
            <span className="text-md font-medium cursor-pointer">Create</span>
          </div>
          <div className="flex space-x-4 items-center pb-6">
            <CgProfile className="text-2xl" />
            <span className="text-md font-medium cursor-pointer">Profile</span>
          </div>
          <div className="flex space-x-4 items-center pb-6 absolute bottom-0">
            <RiLogoutCircleLine className="text-2xl" />
            <span className="text-md font-medium">Logout</span>
          </div>
        </div>
      </div>
      <div className=" bg-white fixed bottom-0 flex w-full justify-evenly pt-2 pb-2 border border-t-gray-300 lg:hidden">
        <IoHomeSharp className="text-2xl" />
        <CiSearch className="text-3xl" />
        <FaRegSquarePlus className="text-2xl" />
        <CiHeart className="text-3xl" />
        <CgProfile className="text-2xl" />
      </div>
    </>
  );
};

export default Sidebar;
