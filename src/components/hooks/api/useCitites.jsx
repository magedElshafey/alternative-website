import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
import { useTranslation } from "react-i18next";
const useCities = () => {
  const { i18n } = useTranslation();
  const getCities = async () => {
    let url = "/countries";
    if (i18n.language === "ar") {
      url = "/countries?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/countries?lang=tr";
    } else {
      url = "/countries";
    }
    return await request({
      url,
    });
  };
  return useQuery("countries", getCities);
};

export default useCities;
