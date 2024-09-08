import React from "react";
import LeftSide from "../components/common/auth/LeftSide";
import RightSide from "../components/common/auth/RightSide";
import login from "../assets/forget.png";
import AuthInput from "../components/common/auth/AuthInput";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useEmailValidation from "../components/hooks/validation/useEmailValidation";
import { request } from "../utils/axios";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
const ForgetPassword = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { email, setEmail, error: emailError } = useEmailValidation();
  const handleForgetPassword = async (data) => {
    let url = "/forgetPassword";
    if (i18n.language === "ar") {
      url = "/forgetPassword?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/forgetPassword?lang=tr";
    } else {
      url = "/forgetPassword";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleForgetPassword, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        localStorage.setItem("forget-email", JSON.stringify(email));
        navigate("/auth/password-verfication");
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error(t("email field is required"));
      return;
    } else if (emailError) {
      toast.error(emailError);
      return;
    } else {
      const data = { email };
      mutate(data);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      <div>
        <LeftSide
          title="Forgot Password?!"
          desc="Please enter your e-mail to search for your account"
          img={login}
        />
      </div>
      <div>
        <RightSide btnText="submit" action={handleClick} isLoading={isLoading}>
          <AuthInput
            icon={<MdEmail size={20} />}
            type="email"
            placeholder={t("email")}
            isPassword={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
        </RightSide>
      </div>
    </div>
  );
};

export default ForgetPassword;
