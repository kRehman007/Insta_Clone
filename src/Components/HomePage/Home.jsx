import React from "react";
import Sidebar from "./Sidebar";
import HomeArticle from "./HomeArticle";
import useAuthStore from "../Zustand/AuthStore";
import Login from "../Authentication/Login";
const Home = () => {
  const { user } = useAuthStore();
  return (
    <>
      {user ? (
        <div className="flex">
          <Sidebar />
          <HomeArticle />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
