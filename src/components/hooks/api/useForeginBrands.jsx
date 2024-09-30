import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
import { useTranslation } from "react-i18next";
const useForeginBrands = (name, selectedCity, page = 0) => {
  const { i18n } = useTranslation();
  const getForeginBrands = async (name, selectedCity) => {
    let url = "/brands";
    if (i18n.language === "ar") {
      url = "/brands?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/brands?lang=tr";
    } else {
      url = "/brands";
    }
    const params = {};

    if (name) {
      params.country_name = name;
    }

    if (selectedCity) {
      params.country_id = selectedCity;
    }
    params.page = page + 1;
    return await request({
      url,

      params,
    });
  };
  return useQuery(
    ["foregin-brands", name, selectedCity, page],
    () => getForeginBrands(name, selectedCity, page),
    {
      keepPreviousData: true, // للحفاظ على البيانات السابقة أثناء تحميل الصفحة الجديدة
    }
  );
};

export default useForeginBrands;
