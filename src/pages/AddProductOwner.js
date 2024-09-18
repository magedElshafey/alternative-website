import React, { useRef, useState } from "react";
import logo from "../assets/coloredLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaDownload, FaUpload } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import excelIcon from "../assets/excel.png";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useMutation, useQuery } from "react-query";
import { request } from "../utils/axios";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import toast from "react-hot-toast";
const AddProductOwner = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
  };
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(acceptedFiles[0]);
    setFile(file);
    uploadFile(file);
  };
  const uploadFile = (file) => {
    setIsUploading(true);
    const fakeUpload = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fakeUpload);
          setIsUploading(false);
          return 100;
        }
        return prev + 10; // زيادة التقدم بمقدار 10% كل مرة
      });
    }, 500);
  };
  const changeFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  const deleteFile = () => {
    setFile(null);
    setUploadProgress(0);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  const fetchExportExample = async () => {
    return await request({
      url: "/export_example",
    });
  };
  const { isLoading, data, refetch } = useQuery(
    "export-example",
    fetchExportExample,
    {
      enabled: false,
    }
  );
  const handleDownload = () => {
    refetch().then((result) => {
      if (result?.data?.data?.data?.file_link) {
        toast.success(result?.data?.data?.message);
        const fileLink = result.data?.data?.data?.file_link;
        console.log("fileLink", fileLink);
        const link = document.createElement("a");
        link.href = fileLink;
        link.setAttribute("download", "file.xlsx"); // You can change the file name here
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    });
  };
  const handleSendFile = async (data) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await request({
      url: "/import",
      method: "POST",
      headers,
      data,
    });
  };
  const { isLoading: loadingSendingFile, mutate } = useMutation(
    handleSendFile,
    {
      onSuccess: (data) => {
        console.log("data from upload", data);
        if (data?.data?.status) {
          navigate("/success");
        } else {
          toast.error(data?.response?.data?.message);
        }
      },
      onError: (data) => {
        toast.error(data?.response?.data?.message);
      },
    }
  );
  const handleSubmitClick = () => {
    const data = { file };
    mutate(data);
    console.log("data", data);
  };
  return (
    <div>
      <Link to="/" className=" inline-block w-fit">
        <img alt="logo" className="w-[60px]" src={logo} loading="lazy" />
      </Link>
      <p className=" text-center roboto-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-mainColor mb-16">
        {t("I am a local poduct owner")}
      </p>
      {file ? (
        <div>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
              <div>
                <img alt="icon" src={excelIcon} className="w-[50px] " />
              </div>
              <div className="flex-1">
                <p className="mb-2 text-lg roboto-medium">{file.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-mainColor h-2 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {uploadProgress === 100 && (
              <div>
                <div className="w-full flex justify-start lg:justify-end flex-wrap gap-4">
                  <button
                    onClick={changeFile}
                    className="bg-mainColor capitalize flex items-center justify-center  gap-2 text-white p-2 rounded-lg"
                  >
                    <RiArrowGoBackLine size={20} />
                    <p>{t("change file")}</p>
                  </button>
                  <button
                    onClick={deleteFile}
                    className="bg-redColor text-white p-2 rounded-lg capitalize flex items-center justify-center  gap-2"
                  >
                    <RiCloseFill size={20} />
                    {t("delete file")}
                  </button>
                </div>
                <div className="mt-8 w-full flex justify-center">
                  {false ? (
                    <LoadingBtn />
                  ) : (
                    <button
                      onClick={handleSubmitClick}
                      type="button"
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
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col items-center justify-center gap-3 mb-16">
            <p className="text-balance md:text-md lg:text-lg xl:text-xl roboto-medium">
              {t(
                "To easy upload all of your products please download the template sheet excel."
              )}
            </p>
            {isLoading ? (
              <div className="flex items-center justify-center gap-3 bg-mainColor text-white p-3 rounded-lg min-w-[200px] capitalize">
                <LoadingBtn />
              </div>
            ) : (
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 bg-mainColor text-white p-3 rounded-lg min-w-[200px] capitalize"
              >
                <FaDownload size={20} />
                <p>{t("download")}</p>
              </button>
            )}
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-balance md:text-md lg:text-lg xl:text-xl roboto-medium">
              {t(
                "After you filled out the template excel sheet please upload from here"
              )}
            </p>
            {!file && (
              <div
                {...getRootProps()}
                className="flex items-center justify-center gap-3 bg-mainColor text-white p-3 rounded-lg min-w-[200px] capitalize cursor-pointer"
              >
                <input {...getInputProps()} />
                <FaUpload size={20} />
                <p>{t("upload")}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AddProductOwner;
/**
 *   
          {file && (
         
          )}
 */
