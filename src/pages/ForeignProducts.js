import React, { useState, useEffect } from "react";
import Products from "../components/common/Products";
import Spinner from "../components/common/Spinner";
import useForeginBrands from "../components/hooks/api/useForeginBrands";
import Pagination from "../components/common/Pagination";
import useCities from "../components/hooks/api/useCitites";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
const ForeignProducts = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, data } = useForeginBrands(name, selectedCity, currentPage);
  const itemsPerPage = data?.data?.meta?.per_page;
  const [defaultCity, setDefaultCity] = useState(null);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
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
  const handleNameChange = (e) => setName(e.target.value);
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
  const handleReset = () => {
    setName(""); // إعادة تعيين حقل الاسم
    setSelectedCity(null);
  };
  const { foreign } = useSelector((state) => state.recentlyViewedSlice);

  return (
    <>
      {loadingCities ? (
        <Spinner />
      ) : (
        <div className="relative py-5 px-4 ">
          <div className="left-0 right-0 flex items-center gap-5 p-2 bg-white rounded-lg border shadow mb-8 absolute top-[-80px] lg:top-[-50px] z-30 ">
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
          {data?.data?.data?.length ? (
            <Products
              isLocal={false}
              isHome={false}
              data={data?.data?.data || []}
              notShowLabel={true}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-red-700 text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold">
                {t("no data")}
              </p>
            </div>
          )}
          {foreign?.length ? (
            <div className="my-12">
              <Products
                isHome={true}
                data={foreign}
                isLocal={false}
                title="recently viewd"
                notShowLabel={true}
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
          {data?.data?.meta?.total > itemsPerPage ? (
            <div className="mt-12">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data?.data?.meta?.total}
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

export default ForeignProducts;
