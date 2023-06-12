// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Routines from "./components/Routines";
import RoutineActivities from "./components/RoutineActivities";
import Activities from "./components/activities";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Routines" element={<Routines />} />
        <Route path="/RoutineActivities" element={<RoutineActivities />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
