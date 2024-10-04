import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/boycot.png";
const BoycotLabel = ({ notShowLabel }) => {
  const { t } = useTranslation();
  return (
    <>
      {notShowLabel ? null : (
        <div className="px-2 py-1 rounded-lg  border-2 border-dashed border-redColor roboto-regular w-fit mx-auto lg:mx-0">
          <div className="flex items-center gap-1">
            <img alt="true" src={img} className=" w-7 h-7" />
            <p className="text-redColor">{t("boycot")}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BoycotLabel;
