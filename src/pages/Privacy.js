import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../context/GlobalContext";
const Privacy = () => {
  const { t } = useTranslation();
  const { data } = useGlobalContext();
  return (
    <div>
      <p className="text-center mb-8 roboto-black text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {t("Privacy Policy")}
      </p>
      <p className="text-[#121212] mb-6">{data?.terms_and_conditions}</p>
    </div>
  );
};

export default Privacy;
