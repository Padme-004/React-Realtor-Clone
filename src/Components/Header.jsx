import {useLocation, useNavigate} from "react-router-dom";
import React from 'react'
         
export default function Header() {
  const location=useLocation();
  const navigate=useNavigate();

  function pathMatchRoute(route){
    if(route === location.pathname){
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-9xl px-3 max-w-6xl mx-auto h-16">
            <div>
                  <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={()=>navigate("/")}/>
            </div>
            <div>
                <ul className="flex space-x-10 justify-end">
                <li>
              <a
                href="/"
                className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchRoute("/") ? "text-black border-b-2 border-red-500" : "text-gray-400"}`}>
                Home </a>
            </li>
            <li>
              <a href="/offers"
                className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchRoute("/offers") ? "text-black border-b-2 border-red-500" : "text-gray-400"}`}>
                Offers</a>
            </li>
            <li><a href="/sign-in" className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchRoute("/sign-in") ? "text-black border-b-2 border-red-500" : "text-gray-400"}`}>
                Sign in </a>
            </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

