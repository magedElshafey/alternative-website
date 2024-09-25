import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImUserTie } from "react-icons/im";
import { HiUser } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const AddProduct = () => {
  const { t, i18n } = useTranslation();
  const [activeId, setActiveId] = useState(0);
  const { alternativeLogin, userData } = useSelector(
    (state) => state.authSlice
  );
  const types = [
    {
      title: "I am a local product owner",
      icon: <ImUserTie size={70} />,
    },
    {
      title: "I tried the product",
      icon: <HiUser size={70} />,
    },
  ];
  const navigate = useNavigate();
  const handleAddProductClick = () => {
    if (!alternativeLogin) {
      Swal.fire({
        title: t("you need to login first to add a product"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#009639",
        cancelButtonColor: "#ED2E38",
        confirmButtonText: t("login"),
        cancelButtonText: t("cancel"),
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/auth/login");
        } else {
          return;
        }
      });
    } else {
      if (activeId === 0 && userData?.type === "individual") {
        Swal.fire({
          icon: "error",
          title: t("you need to login as an orgnization"),
          showCancelButton: false,
          timer: 1000,
          showConfirmButton: false,
        });
        return;
      } else if (activeId === 0 && userData?.type !== "individual") {
        navigate("/add-product/owner");
      } else if (activeId === 1 && userData?.type !== "individual") {
        Swal.fire({
          icon: "error",
          showCancelButton: false,
          title: t("you need to login as an indvidual"),
          timer: 1000,
          showConfirmButton: false,
        });
        return;
      } else {
        navigate("/add-product/trial");
      }
    }
  };
  return (
    <div className="container mx-auto px-8 md:px-16">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <p className="text-mainColor roboto-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {t("Add an alternative brand")}
        </p>
        <p className="roboto-medium">{t("choose")}</p>
      </div>
      <div className="mb-8 w-full flex flex-col md:flex-row items-center justify-center gap-4">
        {types?.map((item, index) => (
          <div
            onClick={() => setActiveId(index)}
            key={index}
            className={`flex flex-col items-center justify-center px-3 py-12 gap-2 w-[250px] md:w-[300px] lg:w-[350px] rounded-md cursor-pointer duration-300 ${
              activeId === index
                ? "bg-mainColor text-white"
                : "bg-white text-mainColor border border-mainColor"
            }`}
          >
            <p>{item.icon}</p>
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl roboto-bold">
              {t(item.title)}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={handleAddProductClick}
          className="bg-mainColor p-3  rounded-lg w-[250px] capitalize text-white flex items-center justify-center gap-4"
        >
          <p>{t("next")}</p>
          {i18n.language === "ar" ? (
            <FaArrowLeftLong size={20} className="mt-1" />
          ) : (
            <FaArrowRightLong size={20} className="mt-1" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
