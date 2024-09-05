import React from "react";
import { heroDetails } from "../../data/data";
import cam from "../../assets/camera.png";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
const Hero = ({ appLinks }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <p className="text-mainColor font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1">
            {t(heroDetails?.main)}
          </p>
          <p className="text-mainColor font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1">
            {t(heroDetails?.second)}
          </p>
          <p className="text-redColor font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-1">
            {t(heroDetails?.third)}
          </p>
          <p className="text-mainColor  mb-3">{t(heroDetails?.desc)}</p>
          {/* <div className="mb-3 flex items-center gap-3 ">
            <div className="flex-1 bg-white p-3 rounded-lg shadow flex items-center gap-2 text-grayColor">
              <CiSearch size={20} />
              <input
                className="flex-1 bg-transparent focus:outline-none capitalize"
                placeholder={t("search")}
              />
            </div>
            <img
              alt="cam"
              src={cam}
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </div> */}
          <div className="flex items-center justify-center md:justify-start   gap-2 flex-wrap">
            <a
              href={appLinks?.android}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 flex items-center justify-center gap-2 border-2 border-mainColor text-mainColor bg-white rounded-md capitalize  min-w-[170px]"
            >
              <div>{<FaGooglePlay size={30} />}</div>
              <div>
                <p className="font-medium">{t("get it on")}</p>
                <p className="font-bold text-base lg:text-lg">
                  {t("google play")}
                </p>
              </div>
            </a>
            <a
              href={appLinks?.ios}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 flex items-center justify-center gap-2 border-2 border-mainColor text-mainColor bg-white rounded-md capitalize  min-w-[170px]"
            >
              <div>{<FaApple size={30} />}</div>
              <div>
                <p className="font-medium">{t("avaiable on the")}</p>
                <p className="font-bold text-base lg:text-lg">
                  {t("App store")}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <img
            alt="hero"
            loading="lazy"
            src={heroDetails.img}
            className="w-full h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
