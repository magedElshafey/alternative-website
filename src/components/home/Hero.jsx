import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useQuery } from "react-query";
import { request } from "../../utils/axios";
import _ from "lodash";
import { Link } from "react-router-dom";
const Hero = ({
  appLinks,

  img,
  enTitle,
  arTitle,
  trTitle,
  enDesc,
  arDesc,
  trDesc,
}) => {
  const { t, i18n } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleKeyWordChange = (e) => {
    setKeyword(e.target.value);
    debounceSearch(e.target.value);
  };
  const handleSearch = async () => {
    return await request({
      url: `/brandsAlternative/search?keyword=${keyword}`,
    });
  };
  const debounceSearch = useCallback(
    _.debounce((value) => {
      if (value.trim()) {
        setShowDropdown(true);
        refetch();
      } else {
        setShowDropdown(false);
      }
    }, 500),
    []
  );
  const { isLoading, data, refetch } = useQuery(
    ["brands", keyword],
    handleSearch,
    {
      enabled: false,
    }
  );
  console.log("searc data", data?.data?.data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                i18n.language === "ar"
                  ? arTitle
                  : i18n.language === "tr"
                  ? trTitle
                  : enTitle,
            }}
          />
          {/* <p className="text-mainColor font-bold text-lg md:text-2xl lg:text-3xl  text-center md:text-start mb-3 ">
            {i18n.language === "ar"
              ? arTitle
              : i18n.language === "tr"
              ? trTitle
              : enTitle}
          </p> */}

          <p className="text-mainColor  mb-3">
            {i18n.language === "ar"
              ? arDesc
              : i18n.language === "tr"
              ? trDesc
              : enDesc}
          </p>
          {/* <div className="mb-3 flex items-center gap-3 ">
            <div className="flex-1 bg-white p-3 rounded-lg shadow flex items-center gap-2 text-grayColor">
              <CiSearch size={20} />
              <input
                className="flex-1 bg-transparent focus:outline-none capitalize"
                placeholder={t("search")}
              />
            </div>
            <img
              alt="cam"
              src={cam}
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </div> */}
          <div className="flex items-center justify-center md:justify-start   gap-2 flex-wrap">
            <a
              href={appLinks?.android}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 flex items-center justify-center gap-2 border-2 border-mainColor text-mainColor bg-white rounded-md capitalize w-full  md:w-[200px] mb-4 md:mb-0"
            >
              <div>{<FaGooglePlay size={30} />}</div>
              <div>
                <p className="font-medium">{t("get it on")}</p>
                <p className="font-bold text-base lg:text-lg">
                  {t("google play")}
                </p>
              </div>
            </a>
            <a
              href={appLinks?.ios}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 flex items-center justify-center gap-2 border-2 border-mainColor text-mainColor bg-white rounded-md capitalize w-full  md:w-[200px]"
            >
              <div>{<FaApple size={30} />}</div>
              <div>
                <p className="font-medium">{t("avaiable on the")}</p>
                <p className="font-bold text-base lg:text-lg">
                  {t("App store")}
                </p>
              </div>
            </a>
          </div>
          <div className="mt-4 md:mt-6 lg:mt-8 w-full lg:w-[70%] py-2 px-6 rounded-md shadow-sm  border flex items-center gap-3 relative">
            <input
              className="flex-1 border-none bg-transparent focus:outline-none"
              placeholder={t("search")}
              onChange={handleKeyWordChange}
              value={keyword}
            />
            <IoIosSearch size={20} />
            {showDropdown && (
              <div className="absolute w-full mt-2 top-[35px] left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                {isLoading ? (
                  <div className="flex justify-center items-center p-4">
                    <div className="w-6 h-6 border-4 border-mainColor border-t-transparent border-solid rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <ul>
                    {data?.data?.data?.length ? (
                      data?.data?.data?.map((item) => (
                        <li
                          key={item.id}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <Link
                            onClick={() => setShowDropdown(false)}
                            to={`/local/${item?.id}`}
                            className="block w-full"
                          >
                            {item?.brand_name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="p-2 text-gray-500">
                        {t("No results found")}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            alt="hero"
            loading="lazy"
            src={img}
            className="w-full md:w-[564px] h-[300px] md:h-[522px] mx-auto md:mx-start ms-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
