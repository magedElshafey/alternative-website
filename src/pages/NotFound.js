import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/Animation - 1719709863741.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NotFound = () => {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <div className="w-[350px] h-[350px]">
        <Lottie isClickToPauseDisabled options={defaultOptions} />
      </div>
      <p className=" text-mainColor font-bold text-lg md:text-xl lg:text-2xl">
        {t("errorText")} &#128542;
      </p>
      <div className="flex items-center  justify-center">
        <Link
          to="/"
          className="flex items-center justify-center p-3 bg-mainColor text-white font-bold rounded-lg min-w-[200px]"
        >
          {t("homeBack")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
