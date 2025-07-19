import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PasswordReset from "./Components/PasswordReset";
import Home from "./Components/Home";
import About from "./Components/About";
import './App.css';
import Profile from "./Components/Profile";
import MyMapComponent from "./Components/maps";
import { LoadScript } from "@react-google-maps/api";
function App() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBOcjReqs4QiqdlrooLuAD-1tttTj-oPF8"
      libraries={['places']}
    >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/passwords/reset" element={<PasswordReset/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* // <>
    //   <MyMapComponent/>
    // </> */}
    </LoadScript>
  );
}

export default App;