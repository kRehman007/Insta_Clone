import React, { useEffect } from "react";
import Sidebar from "../HomePage/Sidebar";
import { useDataBase } from "../Zustand/DataBase";
import useAuthStore from "../Zustand/AuthStore";
const ProfilePage = () => {
  const { fetchData, userData } = useDataBase();
  const { user } = useAuthStore();
  console.log(user);

  useEffect(() => {
    fetchData("users", user?.id);
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="lg:ml-[20vw] p-24 hidden md:block">
        <div className="flex space-x-20 items-center ">
          <div className="w-[200px] h-[200px] rounded-full border border-red-400">
            <img src="" />
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex space-x-9 items-center">
              <span className="text-2xl font-medium">{user?.username}</span>
              <button className="px-8 py-2 bg-gray-200 rounded-md">
                Edit Profile
              </button>
            </div>
            <div className="flex space-x-4 text-xl items-center">
              <span className="font-medium pr-1">{user?.posts.length} </span>{" "}
              Posts
              <div className="font-medium pr-1">{user?.followers.length} </div>
              Followers
              <div className="font-medium pr-1">{user?.following.length} </div>
              Following
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-medium ">{user?.fullname}</span>
              <span className="text-md">{user?.bio} Yours Bio </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex m-3 space-x-7 md:hidden mt-8 w-full">
          <div className="w-[80px] h-[80px] bg-gray-300 rounded-full">
            <img src="" />
          </div>

          <div className="flex space-x-8 justify-evenly pt-5 flex-1 ">
            <div className="flex flex-col items-center ">
              <span className="text-xl font-medium">{user?.posts.length}</span>
              <span className="text-sm">posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">
                {user?.followers.length}
              </span>
              <span className="text-sm">followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">
                {user?.following.length}
              </span>
              <span className="text-sm">following</span>
            </div>
          </div>
        </div>
        <span className="ml-3 mt-[-10px] font-medium text-black flex space-x-6 items-center">
          <span>{user?.fullname} Kashif ur Rehman</span>
        </span>
        <span className="ml-3 text-gray-700 mt-[-8px]">
          {user?.bio} yours bio
        </span>
        <span>
          <button className="px-6 rounded-md py-1 ml-2 mt-2 bg-gray-300">
            Edit Profile
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProfilePage;
