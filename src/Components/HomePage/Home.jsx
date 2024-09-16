import React from "react";
import Sidebar from "./Sidebar";
import HomeArticle from "./HomeArticle";
const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <HomeArticle />
    </div>
  );
};

export default Home;
