// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
