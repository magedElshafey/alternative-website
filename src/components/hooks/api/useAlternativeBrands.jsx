import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
import { useTranslation } from "react-i18next";
const useAlternativeBrands = (name, selectedCity) => {
  const { i18n } = useTranslation();
  const getAlternativeBrands = async (name, selectedCity) => {
    let url = "/brandsAlternative";
    if (i18n.language === "ar") {
      url = "/brandsAlternative?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/brandsAlternative?lang=tr";
    } else {
      url = "/brandsAlternative";
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
  return useQuery(["alternative-brands", name, selectedCity], () =>
    getAlternativeBrands(name, selectedCity)
  );
};

export default useAlternativeBrands;
