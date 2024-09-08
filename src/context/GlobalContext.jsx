import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { request } from "../utils/axios";
import NotFound from "../pages/NotFound";
import Spinner from "../components/common/Spinner";
import { useTranslation } from "react-i18next";
const GlobalProvider = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalProvider);
};

const GlobalContext = ({ children }) => {
  const { i18n } = useTranslation();
  const fetchData = async () => {
    let url = "/settings";
    if (i18n.language === "ar") {
      url = "/settings?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/settings?lang=tr";
    } else {
      url = "/settings";
    }
    return await request({
      url,
    });
  };
  const { isLoading, data, isError } = useQuery("settings", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <NotFound />;
  }
  const value = {
    data: data?.data,
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <NotFound />
      ) : (
        <GlobalProvider.Provider value={value}>
          {children}
        </GlobalProvider.Provider>
      )}
    </>
  );
};

export default GlobalContext;
