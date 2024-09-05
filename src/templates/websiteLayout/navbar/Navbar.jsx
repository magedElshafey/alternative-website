import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../components/layout/Logo";
import logo from "../../../assets/whitelogo.png";
import WbsiteLinks from "../../../components/layout/WbsiteLinks";
import { navlinks } from "../../../data/data";
import LangMenu from "../../../components/layout/navbar/LangMenu";
import AuthBtns from "../../../components/layout/navbar/AuthBtns";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../../context/GlobalContext";
const Navbar = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const { data } = useGlobalContext();
  const sidebarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="mt-3">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="w-full flex items-center justify-between">
            <Logo img={data?.logo} />
            <div className=" hidden md:block ">
              <WbsiteLinks data={navlinks} isFlex={true} isSidebar={false} />
            </div>
            <div className=" hidden md:block ">
              <LangMenu />
            </div>
            <div className=" hidden md:block ">
              <AuthBtns isSidebar={false} />
            </div>
            <div className="md:hidden text-white">
              <IoMenu
                onClick={toggleSidebar}
                size={40}
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div
          ref={sidebarRef}
          className={`fixed top-0 bg-mainColor z-50  h-screen w-[92%] duration-300 text-white ${
            showSidebar ? "left-0" : "left-[-300%]"
          }`}
        >
          <div className="py-3 px-4">
            {showSidebar ? (
              <IoMdClose
                size={30}
                className=" cursor-pointer"
                onClick={toggleSidebar}
              />
            ) : null}
            <div className="my-8">
              <WbsiteLinks
                isFlex={false}
                data={navlinks}
                isSidebar={true}
                setShowSidebar={setShowSidebar}
              />
              <div className="w-full my-8">
                <AuthBtns isSidebar={true} />
              </div>
              <div className="flex items-center gap-4">
                <p>{t("language")} : </p>
                <LangMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
