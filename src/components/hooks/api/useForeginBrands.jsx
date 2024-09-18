import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
import { useTranslation } from "react-i18next";
const useForeginBrands = (name, selectedCity) => {
  const { i18n } = useTranslation();
  const getForeginBrands = async (name, selectedCity) => {
    let url = "/brands/search/PA";
    if (i18n.language === "ar") {
      url = "/brands/search/PA?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/brands/search/PA?lang=tr";
    } else {
      url = "/brands/search/PA";
    }
    const params = {};

    if (name) {
      params.country = name;
    }

    if (selectedCity) {
      params.location_id = selectedCity;
    }
    return await request({
      url,
      params,
    });
  };
  return useQuery(["foregin-brands", name, selectedCity], () =>
    getForeginBrands(name, selectedCity)
  );
};

export default useForeginBrands;
