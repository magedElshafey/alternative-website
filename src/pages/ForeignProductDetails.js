import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Spinner from "../components/common/Spinner";
import { useQuery } from "react-query";
import { request } from "../utils/axios";
import boycot from "../assets/boycot.png";
import local from "../assets/true.png";
const ForeignProductDetails = () => {
  const { i18n, t } = useTranslation();
  const { id } = useParams();
  const getProductDetails = async () => {
    let url = `/brands/${id}`;
    if (i18n.language === "ar") {
      url = `/brands/${id}?lang=ar`;
    } else if (i18n.language === "tr") {
      url = `/brands/${id}?lang=tr`;
    } else {
      url = `/brands/${id}`;
    }
    return await request({
      url,
    });
  };
  const { isLoading, data } = useQuery(
    ["forgeing-product-details", id],
    getProductDetails
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-8 md:px-16">
          <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="relative w-[190.8px] h-[190.8px]  shadow-lg bg-white rounded-[50%] flex items-center justify-center">
              <img
                alt={data?.data?.data?.brand_name}
                src={data?.data?.data?.brand_logo}
                className=" w-[170px] h-[170px]  rounded-[50%] object-contain "
                loading="lazy"
              />
              <img
                alt="boycot"
                src={boycot}
                className={` w-9 h-9 absolute bottom-0 ${
                  i18n.language === "ar" ? "left-3" : "right-3"
                }`}
              />
            </div>
            <div className="md:w-3/4">
              {data?.data?.data?.brand_description ? (
                <>
                  <p className="text-xl md:text-2xl lg:text-3xl roboto-bold mb-3">
                    {t("details")}
                  </p>
                  <p className="mb-8 md:mb-12 roboto-regular">
                    {data?.data?.data?.brand_description}
                  </p>
                </>
              ) : null}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <div className="bg-white p-2 rounded-md shadow-md flex flex-col items-center justify-center w-[200px] gap-1">
                  <p className="roboto-bold text-lg md:text-xl">{t("type")}</p>
                  <p className="roboto-bold text-lg md:text-xl text-mainColor">
                    {data?.data?.data?.category?.name}
                  </p>
                </div>
                {data?.data?.data?.brand_year_founderd ? (
                  <div className="bg-white p-2 rounded-md shadow-md flex flex-col items-center justify-center w-[200px] gap-1">
                    <p className="roboto-bold text-lg md:text-xl">
                      {t("founded in")}
                    </p>
                    <p className="roboto-bold text-lg md:text-xl text-mainColor">
                      {data?.data?.data?.brand_year_founderd}
                    </p>
                  </div>
                ) : null}

                <div className="bg-white p-2 rounded-md shadow-md flex flex-col items-center justify-center w-[200px] gap-1">
                  <p className="roboto-bold text-lg md:text-xl">
                    {t("country")}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={data?.data?.data?.brand_origin_country?.flag}
                      alt={data?.data?.data?.brand_name}
                    />
                    <p className="roboto-bold text-lg md:text-xl text-mainColor">
                      {data?.data?.data?.brand_origin_country?.name}
                    </p>
                  </div>
                </div>
              </div>
              {data?.data?.data?.brandAlternatives?.length ? (
                <div>
                  <p className="font-bold text-md lg:text-lg mb-3">
                    {t("alternative")}
                  </p>
                  <div className=" flex items-center flex-wrap gap-2">
                    {data?.data?.data?.brandAlternatives
                      .slice(1, 5)
                      ?.map((item, index) => (
                        <Link
                          key={index}
                          to={`/foreign/${item?.id}`}
                          className="relative w-[120.8px] h-[120.8px]  shadow-lg bg-white rounded-[50%] flex items-center justify-center gap-4 mb-8"
                        >
                          <img
                            loading="lazy"
                            alt={item?.brand_name}
                            src={item?.brand_logo}
                            className=" w-[100px] h-[100px]  rounded-[50%] object-contain "
                          />
                          <img
                            alt="true"
                            src={local}
                            className={` w-8 h-8 absolute bottom-0 ${
                              i18n.language === "ar" ? "left-3" : "right-3"
                            }`}
                          />
                        </Link>
                      ))}
                  </div>
                  <Link
                    to="/add-product"
                    className="bg-mainColor p-3   rounded-lg w-[250px] capitalize text-white flex items-center justify-center gap-4 mx-auto"
                  >
                    <p>{t("add alternative")}</p>
                    {i18n.language === "ar" ? (
                      <FaArrowLeftLong size={20} className="mt-1" />
                    ) : (
                      <FaArrowRightLong size={20} className="mt-1" />
                    )}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForeignProductDetails;
