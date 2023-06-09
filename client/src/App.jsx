// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<login />} />
        <Route path="/logout" element={<logout />} />
        <Route path="/register" element={<register />} />
        <Route path="/profile" element={<profile />} />
        <Route path="/routines" element={<routines />} />
        <Route path="/routine-activities" element={<routine-activities />} />
        <Route path="/activities" element={<activities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
