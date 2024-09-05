import React, { useState } from "react";
import LeftSide from "../components/common/auth/LeftSide";
import RightSide from "../components/common/auth/RightSide";
import login from "../assets/reg.png";
import AuthBar from "../components/common/auth/AuthBar";
import AuthInput from "../components/common/auth/AuthInput";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import useTextInputValidation from "../components/hooks/validation/useTextInputValidation";
import useNumberInput from "../components/hooks/validation/useNumberInput";
import useEmailValidation from "../components/hooks/validation/useEmailValidation";
import usePasswordValidation from "../components/hooks/validation/usePasswordValidation";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { request } from "../utils/axios";
import { useDispatch } from "react-redux";
import { regester, addToken } from "../store/auth";
import { useNavigate } from "react-router-dom";
const Regester = () => {
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
    password,
    error: passwordError,
    setPassword,
    handleChange: handlePasswordChange,
  } = usePasswordValidation();
  const {
    password: confirmPassword,
    error: confirmPasswordError,
    setPassword: setConfrim,
    handleChange: handleConfrimPasswordChange,
  } = usePasswordValidation();
  const { t, i18n } = useTranslation();
  const [showIndvidual, setShowIndvidual] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegesterAsIndvidual = async (data) => {
    let url = "/registerAPI";
    if (i18n.language === "ar") {
      url = "/registerAPI?lang=ar";
    } else {
      url = "/registerAPI";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleRegesterAsIndvidual, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        navigate("/");
        dispatch(regester(data?.data?.user));
        dispatch(addToken(data?.data?.token));
        setConfrim("");
        setName("");
        setPhone("");
        setPassword("");
        setEmail("");
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !phone.trim() ||
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error(t("please fill all fields"));
      return;
    } else if (nameError) {
      toast.error(t(nameError));
      return;
    } else if (phoneError) {
      toast.error(t(phoneError));
      return;
    } else if (emailError) {
      toast.error(t(emailError));
      return;
    } else if (passwordError || confirmPasswordError) {
      toast.error(t(passwordError));
      return;
    } else if (password !== confirmPassword) {
      toast.error(t("password does not match"));
      return;
    } else {
      const userData = {
        name,
        email,
        phone,
        password,
        type: showIndvidual ? "individual" : "organization",
      };
      mutate(userData);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      <div>
        <LeftSide
          title="Sign up"
          desc="Create a new account by filling your information below"
          img={login}
        />
      </div>
      <div>
        <RightSide btnText="signup" action={handleSubmit} isLoading={isLoading}>
          <AuthBar />
          {showIndvidual ? (
            <form onSubmit={handleSubmit}>
              <AuthInput
                icon={<CiUser size={20} />}
                type="text"
                placeholder={t("full name")}
                isPassword={false}
                value={name}
                onChange={handleNameChange}
                error={nameError}
              />
              <AuthInput
                icon={<MdOutlinePhoneAndroid size={20} />}
                type="text"
                placeholder={t("phone number")}
                isPassword={false}
                value={phone}
                error={phoneError}
                onChange={handlePhoneChange}
              />
              <AuthInput
                icon={<MdEmail size={20} />}
                type="email"
                placeholder={t("email")}
                isPassword={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              <AuthInput
                icon={<RiLockPasswordFill size={20} />}
                type="password"
                placeholder={t("password")}
                isPassword={true}
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
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
            </form>
          ) : (
            <div>
              <AuthInput
                icon={<CiUser size={20} />}
                type="text"
                placeholder={t("Organization Name")}
                isPassword={false}
                value={name}
                onChange={handleNameChange}
                error={nameError}
              />

              <AuthInput
                icon={<MdOutlinePhoneAndroid size={20} />}
                type="text"
                placeholder={t("phone number")}
                isPassword={false}
                value={phone}
                error={phoneError}
                onChange={handlePhoneChange}
              />
              <AuthInput
                icon={<MdEmail size={20} />}
                type="email"
                placeholder={t("email")}
                isPassword={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              <AuthInput
                icon={<RiLockPasswordFill size={20} />}
                type="password"
                placeholder={t("password")}
                isPassword={true}
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
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
          )}
          <div className="w-full md:w-[90%] flex justify-between mx-auto">
            <div
              onClick={() => setShowIndvidual(true)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <div className="w-3 h-3 rounded-[50%] border border-mainColor flex items-center justify-center">
                {showIndvidual ? (
                  <div className="w-3 h-3 rounded-[50%] bg-mainColor flex items-center justify-center"></div>
                ) : null}
              </div>
              <p className="text-mainColor roboto-medium ">{t("indvidual")}</p>
            </div>
            <div
              onClick={() => setShowIndvidual(false)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <div className="w-3 h-3 rounded-[50%] border border-mainColor flex items-center justify-center">
                {!showIndvidual ? (
                  <div className="w-3 h-3 rounded-[50%] bg-mainColor flex items-center justify-center"></div>
                ) : null}
              </div>
              <p className="text-mainColor roboto-medium ">
                {t("orgnization")}
              </p>
            </div>
          </div>
        </RightSide>
      </div>
    </div>
  );
};

export default Regester;
