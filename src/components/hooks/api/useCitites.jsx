import { useQuery } from "react-query";
import { request } from "../../../utils/axios";
const getCities = async () => {
  return await request({
    url: "/countries",
  });
};
const useCities = () => {
  return useQuery("countries", getCities);
};

export default useCities;
