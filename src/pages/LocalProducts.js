import React, { useState, useEffect } from "react";
import Products from "../components/common/Products";
import useAlternativeBrands from "../components/hooks/api/useAlternativeBrands";
import Spinner from "../components/common/Spinner";
import Pagination from "../components/common/Pagination";
import useCities from "../components/hooks/api/useCitites";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const LocalProducts = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [defaultCity, setDefaultCity] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, data } = useAlternativeBrands(
    name,
    selectedCity,
    currentPage
  );
  const itemsPerPage = data?.data?.meta?.per_page;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const { isLoading: loadingCities, data: cities } = useCities();
  const citiesOptions = cities?.data?.data?.map((item) => ({
    value: item.id,
    label: (
      <div style={{ display: "flex", alignItems: "center", border: "none" }}>
        <img src={item.flag} alt="flag" style={{ width: 20 }} />
        <span style={{ marginLeft: 8 }}>{item.name}</span>
      </div>
    ),
  }));

  useEffect(() => {
    if (
      cities &&
      cities.data &&
      cities.data.data.length &&
      selectedCity === null
    ) {
      const firstCity = cities.data.data[0];
      setDefaultCity({
        value: firstCity.id,
        label: (
          <div
            style={{ display: "flex", alignItems: "center", border: "none" }}
          >
            <img src={firstCity.flag} alt="flag" style={{ width: 20 }} />
            <span style={{ marginLeft: 8 }}>{firstCity.name}</span>
          </div>
        ),
      });
    }
  }, [cities, selectedCity]);

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  const handleNameChange = (e) => setName(e.target.value);
  // زرار Reset
  const handleReset = () => {
    setName(""); // إعادة تعيين حقل الاسم
    setSelectedCity(null);
  };

  return (
    <>
      {loadingCities ? (
        <Spinner />
      ) : (
        <div className="relative">
          <div className="w-full flex items-center gap-5 p-2 bg-white rounded-lg border shadow mb-8 absolute top-[-50px] z-50 ">
            <Select
              options={citiesOptions}
              onChange={handleChange}
              value={
                selectedCity
                  ? citiesOptions.find(
                      (option) => option.value === selectedCity
                    )
                  : defaultCity
              }
              placeholder={t("Select City")}
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "gray",
                }),
              }}
            />
            <input
              className="flex-1 border-none focus:outline-none"
              value={name}
              onChange={handleNameChange}
              placeholder={t("Enter Name")}
            />
            <button
              onClick={handleReset}
              className="bg-red-500 text-white p-2 rounded"
            >
              {t("Reset")}
            </button>
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center h-80">
              {/* Animated Loader */}
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
            </div>
          ) : (
            <div>
              {data?.data?.data?.length ? (
                <Products
                  isLocal={true}
                  isHome={false}
                  data={data?.data?.data || []}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center ">
                  <p className="text-mainColor text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                    {t("no data")}
                  </p>
                </div>
              )}
            </div>
          )}

          {data?.data?.recently_viewed_products?.length ? (
            <div className="my-12">
              <Products
                isHome={true}
                data={data?.data?.recently_viewed_products || []}
                isLocal={true}
                title="recently viewd"
              />
            </div>
          ) : null}
          <Link
            to="/add-product"
            className="bg-mainColor p-3  rounded-lg min-w-[180px] max-w-fit capitalize text-white flex items-center justify-center gap-4 mx-auto mt-12"
          >
            <p>{t("Add an alternative")}</p>
            {i18n.language === "ar" ? (
              <FaArrowLeftLong size={20} className="mt-1" />
            ) : (
              <FaArrowRightLong size={20} className="mt-1" />
            )}
          </Link>
          {data?.data?.meta?.total > 1 ? (
            <div className="mt-12">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data?.data?.meta.total}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default LocalProducts;
