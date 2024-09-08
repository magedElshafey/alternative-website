import React from "react";
import LeftSide from "../components/common/auth/LeftSide";
import RightSide from "../components/common/auth/RightSide";
import login from "../assets/login.png";
import AuthBar from "../components/common/auth/AuthBar";
import AuthInput from "../components/common/auth/AuthInput";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useEmailValidation from "../components/hooks/validation/useEmailValidation";
import usePasswordValidation from "../components/hooks/validation/usePasswordValidation";
import { request } from "../utils/axios";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleUserLogin, addToken } from "../store/auth";
const Login = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, setEmail, error: emailError } = useEmailValidation();
  const {
    password,
    error: passwordError,
    setPassword,
    handleChange: handlePasswordChange,
  } = usePasswordValidation();
  const handleLogin = async (data) => {
    let url = "/loginAPI";
    if (i18n.language === "ar") {
      url = "/loginAPI?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/loginAPI?lang=tr";
    } else {
      url = "/loginAPI";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleLogin, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        navigate("/");
        dispatch(handleUserLogin(data?.data?.user));
        dispatch(addToken(data?.data?.token));
        setPassword("");
        setEmail("");
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error(t("please fill all fields"));
      return;
    } else if (emailError) {
      toast.error(t(emailError));
      return;
    } else if (passwordError) {
      toast.error(t(passwordError));
      return;
    } else {
      const userData = {
        email,

        password,
      };
      mutate(userData);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      <div>
        <LeftSide
          title="login"
          desc="Hello & Welcome back, you have been missed"
          img={login}
        />
      </div>
      <div>
        <RightSide btnText="login" action={handleSubmit} isLoading={isLoading}>
          <AuthBar />
          <AuthInput
            icon={<MdEmail size={20} />}
            type="email"
            placeholder={t("email")}
            isPassword={false}
            value={email}
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            icon={<RiLockPasswordFill size={20} />}
            type="password"
            placeholder={t("password")}
            isPassword={true}
            value={password}
            error={passwordError}
            onChange={handlePasswordChange}
          />
          <div className="w-full md:w-[95%] flex justify-end">
            <Link className="text-mainColor roboto-bold " to="/auth/foreget">
              {t("forget password ?")}
            </Link>
          </div>
        </RightSide>
      </div>
    </div>
  );
};

export default Login;
