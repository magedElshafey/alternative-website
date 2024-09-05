import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AuthBar = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-[80%] rounded-lg border border-mainColor flex items-center gap-3 justify-center  mx-auto mb-8">
      <NavLink
        to="/auth/login"
        className="flex items-center justify-center rounded-lg bg-white text-mainColor roboto-bold auth w-[50%] p-2 duration-300"
      >
        {t("login")}
      </NavLink>
      <NavLink
        to="/auth/regester"
        className="flex items-center justify-center rounded-lg bg-white text-mainColor roboto-bold auth w-[50%] p-2 duration-300 "
      >
        {t("signup")}
      </NavLink>
    </div>
  );
};

export default AuthBar;
