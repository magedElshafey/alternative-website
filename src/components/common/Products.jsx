import React from "react";
import AlternativeLabel from "./AlternativeLabel";
import BoycotLabel from "./BoycotLabel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import local from "../../assets/true.png";
import exportImg from "../../assets/export.png";
import boycot from "../../assets/boycot.png";
const Products = ({ isHome, data, isLocal, title, notShowLabel }) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {isLocal ? (
        <AlternativeLabel notShowLabel={notShowLabel} />
      ) : (
        <BoycotLabel notShowLabel={notShowLabel} />
      )}

      <p
        className={`text-lg md:text-lg mt-4 lg:text-xl xl:text-2xl font-bold text-center ${
          isLocal ? "text-mainColor" : "text-redColor"
        }`}
      >
        {isLocal
          ? title
            ? t(title)
            : t("Popular Local Brands")
          : title
          ? t(title)
          : t("Popular Foregin Brands")}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
        {isHome
          ? data?.slice(0, 12)?.map((item, index) => (
              <Link
                key={index}
                to={`${isLocal ? "/local" : "/foreign"}/${item.id}`}
                className="relative bg-white rounded-full p-2 flex items-center justify-center shadow-sm"
              >
                <img
                  src={item?.brand_logo}
                  alt={item?.brand_name}
                  loading="lazy"
                  className="max-w-full "
                />
                {isLocal ? (
                  <img
                    alt="true"
                    src={local}
                    className={` w-6 h-6 absolute -bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                ) : (
                  <img
                    alt="boycot"
                    src={boycot}
                    className={` w-9 h-9 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                )}
                {isLocal ? (
                  <img
                    alt="export"
                    src={exportImg}
                    className={` w-12 h-12 absolute top-0  ${
                      i18n.language === "ar" ? "right-1" : "left-1"
                    }`}
                  />
                ) : null}
              </Link>
            ))
          : data?.map((item, index) => (
              <Link
                key={index}
                to={`${isLocal ? "/local" : "/foreign"}/${item.id}`}
                className="relative bg-white rounded-full p-2 flex items-center justify-center shadow-sm"
              >
                <img
                  src={item?.brand_logo}
                  alt={item?.brand_name}
                  loading="lazy"
                  className="max-w-full "
                />
                {isLocal ? (
                  <img
                    alt="true"
                    src={local}
                    className={` w-6 h-6 absolute -bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                ) : (
                  <img
                    alt="boycot"
                    src={boycot}
                    className={` w-9 h-9 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                )}
                {isLocal ? (
                  <img
                    alt="export"
                    src={exportImg}
                    className={` w-12 h-12 absolute top-0  ${
                      i18n.language === "ar" ? "right-1" : "left-1"
                    }`}
                  />
                ) : null}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Products;
/**
 *      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12  mt-8">
        {isHome
          ? data.slice(0, 12)?.map((item, index) => (
              <Link
                key={index}
                to={`${isLocal ? "/local" : "/foreign"}/${item.id}`}
              >
                <img
                  src={item?.brand_logo}
                  alt={item?.brand_name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
                {isLocal ? (
                  <img
                    alt="true"
                    src={local}
                    className={` w-8 h-8 absolute -bottom-5 ${
                      i18n.language === "ar" ? "left-10" : "right-10"
                    }`}
                  />
                ) : (
                  <img
                    alt="boycot"
                    src={boycot}
                    className={` w-9 h-9 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                )}
                {isLocal ? (
                  <img
                    alt="export"
                    src={exportImg}
                    className={` w-12 h-12 absolute top-0  ${
                      i18n.language === "ar" ? "right-1" : "left-1"
                    }`}
                  />
                ) : null}
              </Link>
            ))
          : data?.map((item, index) => (
              <Link
                key={index}
                to={`${isLocal ? "/local" : "/foreign"}/${item.id}`}
                className=" relative overflow-hidden shadow-lg p-2 flex justify-center w-[170.8px] h-[170.8px] rounded-[50%]"
              >
                <img
                  src={item?.brand_logo}
                  alt={item?.brand_name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
                {isLocal ? (
                  <img
                    alt="true"
                    src={local}
                    className={` w-8 h-8 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                ) : (
                  <img
                    alt="boycot"
                    src={boycot}
                    className={` w-9 h-9 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-1" : "right-1"
                    }`}
                  />
                )}
                {isLocal ? (
                  <img
                    alt="export"
                    src={exportImg}
                    className={` w-12 h-12 absolute top-0  ${
                      i18n.language === "ar" ? "right-1" : "left-1"
                    }`}
                  />
                ) : null}
              </Link>
            ))}
      </div>
 */
