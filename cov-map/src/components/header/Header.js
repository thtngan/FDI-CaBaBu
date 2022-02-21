import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <nav class="bg-orange-500 fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
          
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                    
                    <Link to="/">
                    <img class="object-contain h-11 w-11" src="/logoCovMAP-02.svg" alt="logo"></img>
                    </Link>
                    <Link to="/">
                    <img class="object-contain h-11" src="/covMAP.svg" alt="logo"></img>
                    </Link>
                    
                </div>
                <div class="hidden sm:block sm:ml-12">
                    <div class="flex space-x-4">
                        <p class="hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/">Home</Link></p>
                        <p class="hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/send-help">Need help</Link></p>
                        <p class="hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/want-help">Want to help</Link></p>
                        <p class="hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/about">About us</Link></p>

                    </div>
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
                <div class="ml-3 relative">
                <div>
                    <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">User</span>
                    <img class="h-8 w-8 rounded-full" src="/LogoCovMAP_v2.png" alt=""/>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            </div>
        </div>
    </nav>
    );
}