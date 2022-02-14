import {BrowserRouter as Route, Routes } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router";
import SplashRoute from "../components/animation/SplashRoute";
import Home from "../pages/Home";
import SendHelp from "../pages/SendHelp";
import Login from "../pages/Login";
const userData = true;
export default function MyRoute() {
    return (
        <Routes>
                <Route path="/login">
                    {
                        userData ?
                        <Navigate to="/" /> :
                            <SplashRoute key="/login">
                                <Login/>
                        
                            </SplashRoute>
                    }

                </Route>
                <Route path="/register">
                    {
                        userData ?
                         <Navigate to="/" /> :
                            <SplashRoute key="/register">
                                <Home/>
                            </SplashRoute>
                    }
                </Route>

                <Route path="/send-help">
                    <SplashRoute key="/send-help">
                        <SendHelp/>
                    </SplashRoute>
                </Route>

                <Route exact path="/">
                    <SplashRoute key="/">
                        <Home />
                    </SplashRoute>
                </Route>

            </Routes>
    );
}