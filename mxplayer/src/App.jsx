import { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:movieType" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
