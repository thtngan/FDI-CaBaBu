import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router";
import Home from "../pages/Home";
import SendHelp from "../pages/SendHelp";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import WantToHelp from "../pages/WantToHelp";
const userData = false;
export default function MyRoute() {
    return (
        <Router>
           <Routes>
           {/* <Route path="/login" element=
                    {
                        userData ?
                        <Navigate to="/" /> :
                            <Login/>
                    }
            >
                </Route> */}
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>         
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/want-help" element={<WantToHelp/>}/>           
                <Route path="/send-help" element={<SendHelp/>}/>

            </Routes>     
        </Router>
    );
}