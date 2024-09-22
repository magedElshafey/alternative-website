import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="w-screen flex items-center justify-center py-12 md:py-0 bg-bgSection h-screen overflow-y-auto">
      <div className="container mx-auto px-8 md:px-16 authMain">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
