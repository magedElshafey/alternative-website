import { useQuery } from "react-query";
import { request } from "../../../utils/axios";

const getAlternativeBrands = async (name, selectedCity) => {
  const params = {};

  if (name) {
    params.country = name;
  }

  if (selectedCity) {
    params.location_id = selectedCity;
  }

  return await request({
    url: "/brandsAlternative",
    params,
  });
};

const useAlternativeBrands = (name, selectedCity) => {
  return useQuery(["alternative-brands", name, selectedCity], () =>
    getAlternativeBrands(name, selectedCity)
  );
};

export default useAlternativeBrands;
