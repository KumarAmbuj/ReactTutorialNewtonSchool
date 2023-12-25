import React from "react";
import Navbar from "../component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Login from "../pages/Login";
function HomePage() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default HomePage;

