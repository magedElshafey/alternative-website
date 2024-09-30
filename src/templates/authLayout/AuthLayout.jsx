import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="bg-bgSection w-screen py-16 flex items-center justify-center">
      <div className="container mx-auto px-6 authMain">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
/**
 *  <div className="w-screen  flex items-center justify-center py-12 md:py-0 bg-bgSection h-screen overflow-y-auto">
   
    </div>
 */
