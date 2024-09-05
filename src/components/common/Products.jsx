import React from "react";
import AlternativeLabel from "./AlternativeLabel";
import BoycotLabel from "./BoycotLabel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import local from "../../assets/true.png";
import exportImg from "../../assets/export.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import boycot from "../../assets/boycot.png";
const Products = ({ isHome, data, isLocal }) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {isLocal ? <AlternativeLabel /> : <BoycotLabel />}

      <p
        className={`text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-center ${
          isLocal ? "text-mainColor" : "text-redColor"
        }`}
      >
        {isLocal ? t("Popular Local Brands") : t("Popular Foregin Brands")}
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3  justify-center">
        {isHome
          ? data?.slice(0, 12).map((item, index) => (
              <div key={index}>
                <Link
                  to={`${isLocal ? "/local" : "/foreign"}/${item.id}`}
                  className=" relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] shadow-lg bg-white rounded-[50%] flex items-center justify-center mx-auto"
                >
                  <img
                    src={item?.brand_logo}
                    alt={item?.brand_name}
                    loading="lazy"
                    className=" w-[90px] h-[90px]  md:w-[110px] md:h-[110px] object-contain rounded-[50%]"
                  />
                  {isLocal ? (
                    <img
                      alt="true"
                      src={local}
                      className={` w-8 h-8 absolute bottom-0 ${
                        i18n.language === "ar" ? "left-3" : "right-3"
                      }`}
                    />
                  ) : (
                    <img
                      alt="boycot"
                      src={boycot}
                      className={` w-9 h-9 absolute bottom-0 ${
                        i18n.language === "ar" ? "left-3" : "right-3"
                      }`}
                    />
                  )}

                  {isLocal ? (
                    <img
                      alt="export"
                      src={exportImg}
                      className={` w-12 h-12 absolute top-0  ${
                        i18n.language === "ar" ? "right-3" : "left-3"
                      }`}
                    />
                  ) : null}
                </Link>
              </div>
            ))
          : data?.map((item, index) => (
              <Link
                to={`${isLocal ? "/local" : "/foreign"}/${item.id}`}
                key={index}
                className=" relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] shadow-lg bg-white rounded-[50%] flex items-center justify-center mx-auto"
              >
                <img
                  src={item?.brand_logo}
                  alt={item?.brand_name}
                  loading="lazy"
                  className=" w-[110px] h-[110px]  md:w-[130px] md:h-[130px] object-contain rounded-[50%]"
                />
                {isLocal ? (
                  <img
                    alt="true"
                    src={local}
                    className={` w-8 h-8 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-3" : "right-3"
                    }`}
                  />
                ) : (
                  <img
                    alt="boycot"
                    src={boycot}
                    className={` w-9 h-9 absolute bottom-0 ${
                      i18n.language === "ar" ? "left-3" : "right-3"
                    }`}
                  />
                )}
                {isLocal ? (
                  <img
                    alt="export"
                    src={exportImg}
                    className={` w-12 h-12 absolute top-0 md:top-2 ${
                      i18n.language === "ar" ? "right-2" : "left-2"
                    }`}
                  />
                ) : null}
              </Link>
            ))}
      </div>
      {isHome ? (
        <div className="flex items-center justify-center">
          <Link
            to={isLocal ? "/local-products" : "/foreign-products"}
            className={`${
              isLocal ? "bg-mainColor" : "bg-redColor"
            } p-3 mt-12 rounded-lg min-w-[180px] capitalize text-white flex items-center justify-center gap-4`}
          >
            <p>{t("show more")}</p>
            {i18n.language === "ar" ? (
              <FaArrowLeftLong size={20} className="mt-1" />
            ) : (
              <FaArrowRightLong size={20} className="mt-1" />
            )}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Products;
