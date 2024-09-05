import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import AuthInput from "../components/common/auth/AuthInput";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { request } from "../utils/axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth";
import { toast } from "react-hot-toast";
import Spinner from "../components/common/Spinner";
import useTextInputValidation from "../components/hooks/validation/useTextInputValidation";
import useNumberInput from "../components/hooks/validation/useNumberInput";
import useEmailValidation from "../components/hooks/validation/useEmailValidation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import usePasswordValidation from "../components/hooks/validation/usePasswordValidation";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import { FaCamera } from "react-icons/fa";
import { update } from "../store/auth";
const EditAccount = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { userData } = useSelector((state) => state.authSlice);
  const role = userData ? userData?.type : null;
  const navigate = useNavigate();
  const {
    value: name,
    error: nameError,
    handleChange: handleNameChange,
    setValue: setName,
  } = useTextInputValidation();
  const {
    value: phone,
    error: phoneError,
    handleChange: handlePhoneChange,
    setValue: setPhone,
  } = useNumberInput("");
  const { email, setEmail, error: emailError } = useEmailValidation();
  const {
    password: currentPassword,
    error: currentPasswordError,
    setPassword: setCurrentPassword,
    handleChange: handleCurrentPasswordChange,
  } = usePasswordValidation();
  const {
    password: newPassword,
    error: newPasswordError,
    setPassword: setNewPassword,
    handleChange: handleNewPasswordChange,
  } = usePasswordValidation();
  const {
    password: confirmPassword,
    error: confirmPasswordError,
    setPassword: setConfrim,
    handleChange: handleConfrimPasswordChange,
  } = usePasswordValidation();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const inputRef = useRef(null);
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemovePhoto = () => {
    setSelectedPhoto(null);
    setProfilePhoto(null);
    setPreviewUrl(null);
  };
  // profile details
  const getProfileDetails = async () => {
    let url = "/profile";
    if (i18n.language === "ar") {
      url = "/profile?lang=ar";
    } else {
      url = "/profile";
    }
    return await request({
      url,
    });
  };
  const { isLoading, data } = useQuery("my-profile", getProfileDetails, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        setName(data?.data?.data?.name);
        setEmail(data?.data?.data?.email);
        setPhone(data?.data?.data?.phone);
        setPreviewUrl(data?.data?.data?.image);
      }
    },

    staleTime: Infinity,
    // cacheTime: Infinity,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  // logout
  const handleLogout = async (data) => {
    let url = "/logoutAPI";
    if (i18n.language === "ar") {
      url = "/logoutAPI?lang=ar";
    } else {
      url = "/logoutAPI";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading: loadingLogout, mutate } = useMutation(handleLogout, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        navigate("/");
        toast.success(data?.data?.message);
        dispatch(logout());
        window.location.reload();
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
  });
  const handleLogOutClick = () => {
    const data = {};
    mutate(data);
  };
  // delete account
  const handleDeleteAccount = async (data) => {
    let url = "/deleteProfile";
    if (i18n.language === "ar") {
      url = "/deleteProfile?lang=ar";
    } else {
      url = "/deleteProfile";
    }
    return await request({
      url,
      method: "Delete",
      data,
    });
  };
  const { isLoading: loadingDelete, mutate: mutateDelete } = useMutation(
    handleDeleteAccount,
    {
      onSuccess: (data) => {
        if (data?.data?.status) {
          Swal.fire({
            title: data?.data?.message,
            icon: "success",
          }).then(() => {
            navigate("/");
            dispatch(logout());
            window.location.reload();
          });
        } else {
          toast.error(data?.response?.data?.message);
        }
      },
    }
  );
  const handleDeleteClick = () => {
    Swal.fire({
      title: t("Are you sure?"),
      text: t("You won't be able to revert this!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009639",
      cancelButtonColor: "#ED2E38",
      confirmButtonText: t("Yes, delete it!"),
      cancelButtonText: t("cancel"),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: t("Submit your password"),
          input: "password",
          inputValidator: (value) => {
            if (!value) {
              return t("You need to enter your password!");
            }
          },
          showCancelButton: true,
          confirmButtonColor: "#009639",
          confirmButtonText: t("send"),
          cancelButtonColor: "#ED2E38",
          cancelButtonText: t("cancel"),
        }).then((result) => {
          if (result.isConfirmed) {
            const password = result.value;
            const data = {
              password,
            };
            mutateDelete(data);
          } else {
            return;
          }
        });
      } else {
        return;
      }
    });
  };
  // update profile
  const handleUpdateProfile = async (data) => {
    let url = "/updateProfile";
    if (i18n.language === "ar") {
      url = "/updateProfile?lang=ar";
    } else {
      url = "/updateProfile";
    }
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await request({
      url,
      method: "POST",
      data,
      headers,
    });
  };
  const { isLoading: loadingUpdateProfile, mutate: mutateUpdateProfile } =
    useMutation(handleUpdateProfile, {
      onSuccess: (data) => {
        if (data?.data?.status) {
          toast.success(data?.data?.message);
          queryClient.invalidateQueries("my-profile");
          dispatch(update(data?.data?.data));
        } else {
          toast.error(data?.response?.data?.message);
        }
      },
    });
  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (name) formData.append("name", name);
    // if (phone) formData.append("phone", phone);
    if (email) formData.append("email", email);
    if (selectedPhoto) formData.append("image", selectedPhoto);
    formData.append("type", role);
    mutateUpdateProfile(formData);
  };
  // update password
  const handleUpdatePassword = async (data) => {
    let url = "/changePassword";
    if (i18n.language === "ar") {
      url = "/changePassword?lang=ar";
    } else {
      url = "/changePassword";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading: loadingUpdatePassword, mutate: mutateUpdatePassword } =
    useMutation(handleUpdatePassword, {
      onSuccess: (data) => {
        if (data?.data?.status) {
          Swal.fire({
            title: data?.data?.message,
            icon: "success",
          }).then(() => {
            navigate("/");
            dispatch(logout());
            setCurrentPassword("");
            setNewPassword("");
            setConfrim("");
            window.location.reload();
          });
        } else {
          toast.error(data?.response?.data?.message);
        }
      },
    });
  const handleUpdatePasswordClick = (e) => {
    e.preventDefault();
    if (
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error(t("please fill all fields"));
      return;
    } else if (
      currentPasswordError ||
      newPasswordError ||
      confirmPasswordError
    ) {
      toast.error(currentPasswordError);
      return;
    } else if (newPassword !== confirmPassword) {
      toast.error(t("password does not match"));
      return;
    } else {
      const data = {
        current_password: currentPassword,
        new_password: newPassword,
        new_password_confirmation: confirmPassword,
      };
      mutateUpdatePassword(data);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow-xl w-full md:w-[80%] mx-auto  rounded-xl p-6">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainColor roboto-black text-center mb-8">
            {t("Edit Profile Account")}
          </p>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handlePhotoChange}
          />
          <div className="w-full flex flex-col md:flex-row md:items-center mb-8 gap-3 ">
            {/**img */}
            {!selectedPhoto ? (
              <div className="w-[120px] h-[120px] rounded-[50%] relative flex items-center gap-2">
                <img
                  alt="avatar"
                  src={previewUrl}
                  loading="lazy"
                  className="w-full h-full rounded-[50%]"
                />
                <FaCamera
                  size={20}
                  className=" absolute bottom-0 right-[15px] cursor-pointer text-slate-400"
                  onClick={() => inputRef.current.click()}
                />
              </div>
            ) : (
              <div className="w-[120px] h-[120px] rounded-[50%] relative flex items-center gap-2">
                <img
                  alt="avatar"
                  src={selectedPhoto ? profilePhoto : previewUrl}
                  loading="lazy"
                  className="w-full h-full rounded-[50%]"
                />
                <FaCamera
                  size={20}
                  className=" absolute bottom-0 right-[15px] cursor-pointer text-slate-400"
                  onClick={() => inputRef.current.click()}
                />
              </div>
            )}

            {/* name and email*/}
            <div className="flex flex-col gap-2">
              <p className="text-md md:text-lg lg:text-xl xl:text-2xl roboto-black">
                {data?.data?.data?.name}
              </p>
              <p className="text-slate-500 lowercase roboto-medium">
                {data?.data?.data?.email}
              </p>
            </div>
          </div>

          {role === "individual" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <AuthInput
                  icon={<CiUser size={20} />}
                  type="text"
                  placeholder={t("full name")}
                  isPassword={false}
                  value={name}
                  onChange={handleNameChange}
                  error={nameError}
                />
                <div dir="rtl" className="p-0">
                  <AuthInput
                    icon={<MdOutlinePhoneAndroid size={20} />}
                    type="text"
                    placeholder={t("phone number")}
                    isPassword={false}
                    value={phone}
                    onChange={handlePhoneChange}
                    error={phoneError}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <AuthInput
                  icon={<MdEmail size={20} />}
                  type="email"
                  placeholder={t("email")}
                  isPassword={false}
                  value={email}
                  error={emailError}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {loadingUpdateProfile ? (
                <div className="flex justify-center w-[180px] my-5">
                  <LoadingBtn />
                </div>
              ) : (
                <div className="flex  items-center justify-center  gap-3 flex-wrap my-5">
                  <button
                    onClick={updateProfile}
                    className="text-white roboto-bold  flex items-center justify-center rounded-lg  bg-mainColor py-2 px-3 w-[180px] capitalize"
                  >
                    {t("save changes")}
                  </button>
                  <button className="text-mainColor roboto-bold bg-white flex items-center justify-center rounded-lg border border-mainColor py-2 px-3 w-[180px] md:w-[150px] capitalize">
                    {t("cancel")}
                  </button>
                </div>
              )}

              <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-mainColor font-bold  mb-3">
                {t("change password")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <AuthInput
                  icon={<RiLockPasswordFill size={20} />}
                  type="password"
                  placeholder={t("current password")}
                  isPassword={true}
                  value={currentPassword}
                  error={currentPasswordError}
                  onChange={handleCurrentPasswordChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AuthInput
                  icon={<RiLockPasswordFill size={20} />}
                  type="password"
                  placeholder={t("new password")}
                  isPassword={true}
                  value={newPassword}
                  error={newPasswordError}
                  onChange={handleNewPasswordChange}
                />
                <AuthInput
                  icon={<RiLockPasswordFill size={20} />}
                  type="password"
                  placeholder={t("confirm password")}
                  isPassword={true}
                  value={confirmPassword}
                  error={confirmPasswordError}
                  onChange={handleConfrimPasswordChange}
                />
              </div>
              <div className="flex  items-center justify-center  gap-3 flex-wrap my-5">
                {loadingUpdatePassword ? (
                  <div className=" w-[180px]">
                    <LoadingBtn />
                  </div>
                ) : (
                  <button
                    onClick={handleUpdatePasswordClick}
                    className="text-white roboto-bold  flex items-center justify-center rounded-lg  bg-mainColor py-2 px-3 w-[180px] capitalize"
                  >
                    {t("change password")}
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <AuthInput
                  icon={<CiUser size={20} />}
                  type="text"
                  placeholder={t("Organization Name")}
                  isPassword={false}
                  value={name}
                  onChange={handleNameChange}
                  error={nameError}
                />
              </div>
              <div className="w-full">
                <AuthInput
                  icon={<MdOutlinePhoneAndroid size={20} />}
                  type="text"
                  placeholder={t("phone number")}
                  isPassword={false}
                  value={phone}
                  onChange={handlePhoneChange}
                  error={phoneError}
                />
              </div>
              <div className="w-full ">
                <AuthInput
                  icon={<MdEmail size={20} />}
                  type="email"
                  placeholder={t("email")}
                  isPassword={false}
                  value={email}
                  error={emailError}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {loadingUpdateProfile ? (
                <div className="flex justify-center w-[180px] my-5">
                  <LoadingBtn />
                </div>
              ) : (
                <div className="flex  items-center justify-center  gap-3 flex-wrap my-5">
                  <button
                    onClick={updateProfile}
                    className="text-white roboto-bold  flex items-center justify-center rounded-lg  bg-mainColor py-2 px-3 w-[180px] capitalize"
                  >
                    {t("save changes")}
                  </button>
                  <button className="text-mainColor roboto-bold bg-white flex items-center justify-center rounded-lg border border-mainColor py-2 px-3 w-[180px] md:w-[150px] capitalize">
                    {t("cancel")}
                  </button>
                </div>
              )}

              <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-mainColor font-bold  mb-3">
                {t("change password")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <AuthInput
                  icon={<RiLockPasswordFill size={20} />}
                  type="password"
                  placeholder={t("current password")}
                  isPassword={true}
                  value={currentPassword}
                  error={currentPasswordError}
                  onChange={handleCurrentPasswordChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AuthInput
                  icon={<RiLockPasswordFill size={20} />}
                  type="password"
                  placeholder={t("new password")}
                  isPassword={true}
                  value={newPassword}
                  error={newPasswordError}
                  onChange={handleNewPasswordChange}
                />
                <AuthInput
                  icon={<RiLockPasswordFill size={20} />}
                  type="password"
                  placeholder={t("confirm password")}
                  isPassword={true}
                  value={confirmPassword}
                  error={confirmPasswordError}
                  onChange={handleConfrimPasswordChange}
                />
              </div>
              <div className="flex  items-center justify-center  gap-3 flex-wrap my-5">
                {loadingUpdatePassword ? (
                  <div className=" w-[180px]">
                    <LoadingBtn />
                  </div>
                ) : (
                  <button
                    onClick={handleUpdatePasswordClick}
                    className="text-white roboto-bold  flex items-center justify-center rounded-lg  bg-mainColor py-2 px-3 w-[180px] capitalize"
                  >
                    {t("change password")}
                  </button>
                )}
              </div>
            </>
          )}

          <div className="w-full   flex items-center gap-4 flex-wrap justify-end ">
            <button
              type="button"
              onClick={handleLogOutClick}
              disabled={loadingLogout}
              className="flex items-center justify-center gap-1 capitalize py-2 bg-white text-redColor border border-redColor w-[180px] rounded-lg"
            >
              <CiLogout size={20} />
              <p>{t("logout")}</p>
            </button>
            <button
              onClick={handleDeleteClick}
              className="flex items-center py-2 bg-redColor text-white justify-center gap-1 capitalize  w-[180px] rounded-lg "
            >
              <MdDelete size={20} />
              <p>{t("delete account")}</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAccount;
