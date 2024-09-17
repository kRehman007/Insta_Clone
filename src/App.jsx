import React, { useState } from "react";

//Pages..........
import Home from "./Components/HomePage/Home";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Login />} />
      <Route path="/registration" element={<Signup />} />
    </Routes>
  );
}

export default App;
