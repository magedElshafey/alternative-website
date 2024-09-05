import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
const getForeginBrands = async (name, selectedCity) => {
  const params = {};

  if (name) {
    params.country = name;
  }

  if (selectedCity) {
    params.location_id = selectedCity;
  }
  return await request({
    url: "/brands/search/PA",
    params,
  });
};
const useForeginBrands = (name, selectedCity) => {
  return useQuery(["foregin-brands", name, selectedCity], () =>
    getForeginBrands(name, selectedCity)
  );
};

export default useForeginBrands;
