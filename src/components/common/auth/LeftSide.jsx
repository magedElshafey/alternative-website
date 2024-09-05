import React from "react";
import { useTranslation } from "react-i18next";

const LeftSide = ({ title, desc, img }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainColor mb-1 roboto-medium">
        {t(title)}
      </p>
      <p className="text-center  text-mainColor  roboto-bold mb-8 md:mb-12 lg:mb-32">
        {t(desc)}
      </p>
      <img
        alt={t(title)}
        src={img}
        loading="lazy"
        className="max-h-[350px] object-cover"
      />
    </div>
  );
};

export default LeftSide;
