import React from "react";
import logo from "../../../assets/coloredLogo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import LoadingBtn from "../buttons/LoadingBtn";
const RightSide = ({ children, btnText, action, isLoading }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-white shadow-xl rounded-xl py-5 px-3">
      <Link to="/">
        <img
          alt="logo"
          className="mx-auto mb-8 md:mb-12  w-[60px]"
          src={logo}
          loading="lazy"
        />
      </Link>
      <div className=" min-h-[200px] md:min-h-[350px]">{children}</div>
      <div className="w-full flex justify-center">
        {isLoading ? (
          <div className="mt-12 rounded-lg min-w-[180px]">
            <LoadingBtn />
          </div>
        ) : (
          <button
            onClick={action}
            className="bg-mainColor p-3 mt-12 rounded-lg min-w-[180px] capitalize text-white flex items-center justify-center gap-4"
            type="submit"
          >
            <p>{t(btnText)}</p>
            {i18n.language === "ar" ? (
              <FaArrowLeftLong size={20} className="mt-1" />
            ) : (
              <FaArrowRightLong size={20} className="mt-1" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default RightSide;
