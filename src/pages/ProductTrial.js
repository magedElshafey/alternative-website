import React, { useState } from "react";
import logo from "../assets/coloredLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { VscGift } from "react-icons/vsc";
import AuthInput from "../components/common/auth/AuthInput";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import TextArea from "../components/common/auth/TextArea";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { request } from "../utils/axios";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import LoadingBtn from "../components/common/buttons/LoadingBtn";

const ProductTrial = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState(null); // تعديل هنا
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setImage(file); // تعديل هنا
    } else {
      setFileName("");
      setImage(null); // تعديل هنا
    }
  };

  const handleAddProduct = async (data) => {
    let url = "/brandsAlternative";
    if (i18n.language === "ar") {
      url = "/brandsAlternative?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/brandsAlternative?lang=tr";
    } else {
      url = "/brandsAlternative";
    }
    return await request({
      url,
      method: "POST",
      data,
      headers: {
        "Content-Type": "multipart/form-data", // إضافة هذا الهيدر
      },
    });
  };

  const { isLoading, mutate } = useMutation(handleAddProduct, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        queryClient.invalidateQueries("alternative-brands");
        setName("");
        setDesc("");
        setFileName("");
        setNotes("");
        Swal.fire({
          icon: "success",
          title: data?.data?.message,
        }).then(() => {
          navigate("/success");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: data?.response?.data?.message,
        });
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // إنشاء كائن FormData
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", desc);
    formData.append("notes", notes);
    formData.append("image", image); // إرفاق ملف الصورة

    mutate(formData);
  };

  return (
    <div>
      <Link to="/" className=" inline-block w-fit">
        <img alt="logo" className="w-[60px]" src={logo} loading="lazy" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <p className=" roboto-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-mainColor">
          {t("I tried the product")}
        </p>
        <p className="roboto-medium text-sm md:text-md lg:text-lg xl:text-xl">
          {t("Make sure that the information added is correct")}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <AuthInput
            icon={<VscGift size={20} />}
            type="text"
            placeholder={t("product name")}
            isPassword={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AuthInput
            icon={<FaGlobeAmericas size={20} />}
            type="text"
            placeholder={t("company")}
            isPassword={false}
          />
        </div>
        <div className="w-full">
          <div className="w-full  mb-4">
            <TextArea
              icon={<FaInfo size={20} />}
              type="text"
              placeholder={t("company information")}
              isPassword={false}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="mb-4 w-full p-2 rounded-lg border">
            <label htmlFor="product-image" className="block mb-1">
              {t("product image")}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="product-image"
                onChange={handleFileChange}
              />
              <label
                htmlFor="product-image"
                className="cursor-pointer  bg-mainColor rounded-lg text-white flex items-center justify-center p-3"
              >
                {t("choose file")}
              </label>
              <span className=" text-gray-500">
                {fileName || t("no file chosen")}
              </span>
            </div>
          </div>
          <TextArea
            icon={<FaInfo size={20} />}
            type="text"
            placeholder={t("additional information")}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="mt-5 w-full flex justify-center">
            {isLoading ? (
              <div className="w-[180px]">
                <LoadingBtn />
              </div>
            ) : (
              <button
                type="submit"
                className="bg-mainColor p-3  rounded-lg w-[180px] capitalize text-white flex items-center justify-center gap-4"
              >
                <p>{t("submit")}</p>
                {i18n.language === "ar" ? (
                  <FaArrowLeftLong size={20} className="mt-1" />
                ) : (
                  <FaArrowRightLong size={20} className="mt-1" />
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductTrial;

/**
 * import React, { useState } from "react";
import logo from "../assets/coloredLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { VscGift } from "react-icons/vsc";
import AuthInput from "../components/common/auth/AuthInput";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import TextArea from "../components/common/auth/TextArea";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { request } from "../utils/axios";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
const ProductTrial = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState("");
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      const prev = URL.createObjectURL(file);
      setImage(prev);
    } else {
      setFileName("");
      setImage("");
    }
  };
  const handleAddProduct = async (data) => {
    return await request({
      url: "/brandsAlternative",
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleAddProduct, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        queryClient.invalidateQueries("alternative-brands");
        setName("");
        setDesc("");
        setFileName("");
        setNotes("");
        Swal.fire({
          icon: "success",
          title: data?.data?.message,
        }).then(() => {
          navigate("/success");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: data?.response?.data?.message,
        });
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      notes,
      description: desc,
      image,
    };
    mutate(data);
  };
  return (
    <div>
      <Link to="/" className=" inline-block w-fit">
        <img alt="logo" className="w-[60px]" src={logo} loading="lazy" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <p className=" roboto-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-mainColor">
          {t("I trird the product")}
        </p>
        <p className="roboto-medium text-sm md:text-md lg:text-lg xl:text-xl">
          {t("Make sure that the information added is correct")}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <AuthInput
            icon={<VscGift size={20} />}
            type="text"
            placeholder={t("product name")}
            isPassword={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AuthInput
            icon={<FaGlobeAmericas size={20} />}
            type="text"
            placeholder={t("company")}
            isPassword={false}
          />
        </div>
        <div className="w-full">
          <div className="mb-4">
            <AuthInput
              icon={<FaInfo size={20} />}
              type="text"
              placeholder={t("company information")}
              isPassword={false}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="mb-4 w-full p-2 rounded-lg border">
            <label htmlFor="product-image" className="block mb-1">
              {t("product image")}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="product-image"
                onChange={handleFileChange}
              />
              <label
                htmlFor="product-image"
                className="cursor-pointer  bg-mainColor rounded-lg text-white flex items-center justify-center p-3"
              >
                {t("choose file")}
              </label>
              <span className=" text-gray-500">
                {fileName || t("no file chosen")}
              </span>
            </div>
          </div>
          <TextArea
            icon={<FaInfo size={20} />}
            type="text"
            placeholder={t("additional information")}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="mt-5 w-full flex justify-center">
            {isLoading ? (
              <div className="w-[180px]">
                <LoadingBtn />
              </div>
            ) : (
              <button
                type="submit"
                className="bg-mainColor p-3  rounded-lg w-[180px] capitalize text-white flex items-center justify-center gap-4"
              >
                <p>{t("submit")}</p>
                {i18n.language === "ar" ? (
                  <FaArrowLeftLong size={20} className="mt-1" />
                ) : (
                  <FaArrowRightLong size={20} className="mt-1" />
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductTrial;

 */
