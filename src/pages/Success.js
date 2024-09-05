import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Success = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-8 md:px-16">
      <div className="w-full main flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 ">
          <FaRegSmile size={80} className="text-mainColor" />
          <p className="text-mainColor roboto-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {t("thank you")}
          </p>
          <p className="lg:w-1/5 text-center">{t("success hint")}</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
