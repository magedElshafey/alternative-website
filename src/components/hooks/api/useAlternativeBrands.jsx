import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
import { useTranslation } from "react-i18next";
const useAlternativeBrands = (name, selectedCity, page = 1) => {
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
    const params = {
      page: page + 1,
    };

    if (name) {
      params.country_name = name;
    }

    if (selectedCity) {
      params.country_id = selectedCity;
    }

    return await request({
      url,
      params,
    });
  };
  return useQuery(
    ["alternative-brands", name, selectedCity, page],
    () => getAlternativeBrands(name, selectedCity, page),
    {
      keepPreviousData: true,
    }
  );
};

export default useAlternativeBrands;
