import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Spinner from "../components/common/Spinner";
import { useQuery } from "react-query";
import { request } from "../utils/axios";
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
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="md:w-1/4 relative">
              <img
                alt={data?.data?.data?.brand_name}
                src={data?.data?.data?.brand_logo}
                className="max-h-[250px]"
                loading="lazy"
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
                  <p className="roboto-bold text-lg md:text-xl text-mainColor">
                    {data?.data?.data?.brand_origin_country?.name}
                  </p>
                </div>
              </div>
              <div className="my-6 flex items-center flex-wrap gap-2">
                {data?.data?.data?.brandAlternatives
                  .slice(1, 5)
                  ?.map((item, index) => (
                    <img
                      key={index}
                      loading="lazy"
                      alt={item?.brand_name}
                      src={item?.brand_logo}
                      className="w-[80px] h-[80px] rounded-[50%] object-contain"
                    />
                  ))}
              </div>
              <Link
                to="/add-product"
                className="bg-mainColor p-3 mt-12 mx-auto rounded-lg w-[250px] capitalize text-white flex items-center justify-center gap-4"
              >
                <p>{t("add alternative")}</p>
                {i18n.language === "ar" ? (
                  <FaArrowLeftLong size={20} className="mt-1" />
                ) : (
                  <FaArrowRightLong size={20} className="mt-1" />
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForeignProductDetails;
