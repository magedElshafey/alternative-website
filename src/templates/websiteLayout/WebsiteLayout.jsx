import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import Meta from "../../components/common/meta/Meta";
import { useLocation } from "react-router-dom";
const WebsiteLayout = () => {
  const { data } = useGlobalContext();
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  return (
    <div>
      <Meta fav={data?.favicon} />
      <Navbar />

      <div
        className={`main w-full container mx-auto px-6  my-5 ${
          pathname === "/local-products" || pathname === "/foreign-products"
            ? "mt-[70px]"
            : null
        }`}
      >
        <div className="bg-white py-3 flex items-center rounded-lg  border-2 border-slate-500">
          <div className="container mx-auto px-6">{<Outlet />}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
