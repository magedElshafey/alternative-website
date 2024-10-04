import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/true.png";
import img2 from "../../assets/export.png";
const AlternativeLabel = ({ notShowLabel }) => {
  const { t } = useTranslation();
  return (
    <>
      {notShowLabel ? null : (
        <div className="px-2 py-1 rounded-lg  border-2 border-dashed border-mainColor flex items-center justify-between w-[250px] roboto-regular mx-auto lg:mx-0">
          <div className="flex items-center gap-1">
            <img alt="true" src={img} className=" w-5 h-5" />
            <p className="text-mainColor">{t("alternative")}</p>
          </div>
          <div className="flex items-center gap-1">
            <img alt="true" src={img2} className=" w-7 h-7" />
            <p className="text-mainColor">{t("export")}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AlternativeLabel;
