import React from "react";
import add from "../../assets/add.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const AddAlternative = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainColor roboto-bold mb-4">
          {t("Add an alternative brand")}
        </p>
        <Link
          to="/add-product"
          className="bg-mainColor p-3  rounded-lg w-[180px] capitalize text-white flex items-center justify-center gap-4"
        >
          <p>{t("Add now")}</p>
          {i18n.language === "ar" ? (
            <FaArrowLeftLong size={20} className="mt-1" />
          ) : (
            <FaArrowRightLong size={20} className="mt-1" />
          )}
        </Link>
      </div>

      <img alt="vector" src={add} className="w-full h-[200px] md:h-[350px]" />
    </div>
  );
};

export default AddAlternative;
