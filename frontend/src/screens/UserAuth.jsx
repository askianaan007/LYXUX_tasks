import React from "react";
import { assets } from "../assets/assets";
import Login from "../components/Login";
import Register from "../components/Register";
import { Link, useLocation } from "react-router-dom";

const UserAuth = () => {
  const location = useLocation();

  const renderComponent =
    location.pathname === "/register" || location.pathname === "/" ? (
      <Register />
    ) : location.pathname === "/login" ? (
      <Login />
    ) : null;

  return (
    <div
      className="h-screen bg-cover bg-left-bottom lg:bg-left bg-black flex flex-col-reverse md:flex-row-reverse overflow-hidden "
      style={{ backgroundImage: `url(${assets.honey})` }}
    >
      <div className="w-full h-[70%] md:h-full md:w-1/2 rounded-t-xl md:rounded-l-3xl bg-white/80 md:bg-white flex md:items-center justify-center relative">
        <div className="w-4/5 md:w-3/5 mt-10">
          <p className="font-welcome text-7xl lg:text-8xl text-orange-primary text-center m-0">
            Welcome
          </p>
          <div>{renderComponent}</div>
        </div>
        <p className="text-xs absolute bottom-3 w-full text-center">
          Copyright © 2024 LYXUX LTD All rights reserved
        </p>
      </div>
    </div>
  );
};

export default UserAuth;
