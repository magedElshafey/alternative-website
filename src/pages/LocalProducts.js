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
  const { isLoading, data } = useAlternativeBrands(name, selectedCity);
  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    setCurrentPage(0); // Reset to first page when data changes
  }, [data?.data?.data]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const offset = currentPage * itemsPerPage;
  const { isLoading: loadingCities, data: cities } = useCities();

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };
  const citiesOptions = cities?.data?.data?.map((item) => ({
    value: item.id,
    label: (
      <div style={{ display: "flex", alignItems: "center", border: "none" }}>
        <img src={item.flag} alt="flag" style={{ width: 20 }} />
        <span style={{ marginLeft: 8 }}>{item.name}</span>
      </div>
    ),
  }));
  // useEffect(() => {
  //   if (!selectedCity && defaultCity) {
  //     setSelectedCity(defaultCity.value);
  //   }
  // }, [defaultCity, selectedCity]);
  const handleNameChange = (e) => setName(e.target.value);
  return (
    <>
      {loadingCities ? (
        <Spinner />
      ) : (
        <div>
          <div className="w-full flex items-center gap-5 p-2 bg-white rounded-lg border shadow mb-8  ">
            <Select
              options={citiesOptions}
              onChange={handleChange}
              value={citiesOptions.find(
                (option) => option.value === selectedCity
              )}
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none", // إزالة الـ border
                  boxShadow: "none", // إزالة الـ outline عند التركيز
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "gray", // تخصيص لون السهم
                }),
              }}
            />
            <input
              className="flex-1 border-none focus:outline-none"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          {data?.data?.data?.length ? (
            <Products
              isLocal={true}
              isHome={false}
              data={data?.data?.data.slice(offset, offset + itemsPerPage) || []}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-mainColor text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                {t("no data")}
              </p>
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
            className="bg-mainColor p-3  rounded-lg w-[180px] capitalize text-white flex items-center justify-center gap-4 mx-auto mt-8"
          >
            <p>{t("Add an alternative")}</p>
            {i18n.language === "ar" ? (
              <FaArrowLeftLong size={20} className="mt-1" />
            ) : (
              <FaArrowRightLong size={20} className="mt-1" />
            )}
          </Link>
          {data?.data?.data?.length > itemsPerPage ? (
            <div className="mt-12">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data?.data?.data.length}
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
