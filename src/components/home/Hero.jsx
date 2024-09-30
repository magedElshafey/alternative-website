import React from "react";
import { useTranslation } from "react-i18next";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
const Hero = ({
  appLinks,
  title,
  desc,
  img,
  enTitle,
  arTitle,
  trTitle,
  enDesc,
  arDesc,
  trDesc,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center">
        <div>
          <p className="text-mainColor font-bold text-lg md:text-2xl lg:text-3xl  text-center md:text-start mb-3 ">
            {i18n.language === "ar"
              ? arTitle
              : i18n.language === "tr"
              ? trTitle
              : enTitle}
          </p>

          <p className="text-mainColor  mb-3">
            {i18n.language === "ar"
              ? arDesc
              : i18n.language === "tr"
              ? trDesc
              : enDesc}
          </p>
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
              className="px-2 py-1 flex items-center justify-center gap-2 border-2 border-mainColor text-mainColor bg-white rounded-md capitalize w-full  md:w-[200px] mb-4 md:mb-0"
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
              className="px-2 py-1 flex items-center justify-center gap-2 border-2 border-mainColor text-mainColor bg-white rounded-md capitalize w-full  md:w-[200px]"
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
        <div className="flex justify-center md:justify-start">
          <img
            alt="hero"
            loading="lazy"
            src={img}
            className="w-full md:w-[564px] h-[300px] md:h-[522px] mx-auto md:mx-start ms-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
