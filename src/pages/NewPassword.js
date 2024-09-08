import React from "react";
import LeftSide from "../components/common/auth/LeftSide";
import RightSide from "../components/common/auth/RightSide";
import login from "../assets/new.png";
import AuthInput from "../components/common/auth/AuthInput";
import { useTranslation } from "react-i18next";
import { RiLockPasswordFill } from "react-icons/ri";
import { request } from "../utils/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import usePasswordValidation from "../components/hooks/validation/usePasswordValidation";
const NewPassword = () => {
  const navigate = useNavigate("");
  const { t, i18n } = useTranslation();
  const email = localStorage.getItem("forget-email")
    ? JSON.parse(localStorage.getItem("forget-email"))
    : null;
  const otp = localStorage.getItem("otp")
    ? JSON.parse(localStorage.getItem("otp"))
    : null;
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
  const handleResetPassword = async (data) => {
    let url = "/resetPassword";
    if (i18n.language === "ar") {
      url = "/resetPassword?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/resetPassword?lang=tr";
    } else {
      url = "/resetPassword";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleResetPassword, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        localStorage.removeItem("forget-email");
        localStorage.removeItem("otp");
        navigate("/auth/login");
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim() || !confirmPassword.trim()) {
      toast.error(t("please fill all fields"));
      return;
    } else if (passwordError || confirmPasswordError) {
      toast.error(t(passwordError));
      return;
    } else if (password !== confirmPassword) {
      toast.error(t("password does not match"));
      return;
    } else {
      const data = {
        email,
        otp,
        password,
        password_confirmation: confirmPassword,
      };
      mutate(data);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      <div>
        <LeftSide
          title="Re-enter a new Password"
          desc="Set your new password"
          img={login}
        />
      </div>
      <div>
        <RightSide btnText="send" isLoading={isLoading} action={handleSubmit}>
          <AuthInput
            icon={<RiLockPasswordFill size={20} />}
            type="password"
            placeholder={t("password")}
            isPassword={true}
            value={password}
            error={passwordError}
            onChange={handlePasswordChange}
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
        </RightSide>
      </div>
    </div>
  );
};

export default NewPassword;
