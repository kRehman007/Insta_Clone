import React from "react";
import profilePic from "../../../src/assets/Profile.jpg";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const HomeArticle = () => {
  return (
    <div className=" lg:ml-[17vw] lg:p-12 lg:pl-24 pt-32">
      <div className="flex flex-col space-y-3 w-[100vw] lg:w-[400px] h-[min-content] pb-12 ">
        <div className="flex pl-3 lg:pl-0 space-x-2 items-center">
          <div className="w-11 h-11 border border-red-500 rounded-full">
            <img src="" />
          </div>
          <div className="flex space-x-1">
            <span className="font-semibold">kashif007</span>
            <span>. 4h .</span>
            <span className="text-blue-600 font-semibold">Following</span>
          </div>
        </div>
        <div className="w-full ">
          <img src={profilePic} className="object-cover " />
        </div>
        <div className="flex pl-3 lg:pl-0 flex-col space-y-1 pt-2">
          <div className="flex justify-between items-center ">
            <div className="flex space-x-3 items-start">
              <CiHeart className="text-3xl" />
              <FaRegComment className="text-2xl" />
            </div>
            <CiBookmark className="text-2xl pr-3" />
          </div>
          <span>4000 likes</span>
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-transparent pb-4
          outline-none border-b text-sm border-b-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;
