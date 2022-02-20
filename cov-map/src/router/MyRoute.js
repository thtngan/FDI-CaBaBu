import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router";
import Home from "../pages/Home";
import SendHelp from "../pages/SendHelp";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
                
                <Route path="/register" element={<Register/>}/>
                
                <Route path="/send-help" element={<SendHelp/>}/>

            </Routes>     
        </Router>
    );
}