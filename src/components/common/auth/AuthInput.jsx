import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthInput = ({
  icon,
  isPassword,
  value,
  onChange,
  error,
  type,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <>
      <div className="w-full mx-auto flex items-center gap-2 border border-[#D9D9D9] rounded-lg mb-3  p-2 ">
        <p className="text-[#D9D9D9]">{icon}</p>
        <input
          {...otherProps}
          className="flex-1 bg-transparent border-none focus:outline-none "
          required
          value={value}
          onChange={onChange}
          type={
            type === "password" && showPassword
              ? "text"
              : type === "password" && !showPassword
              ? "password"
              : type
          }
        />
        {type === "password" ? (
          showPassword ? (
            <FaEye
              size={20}
              className=" cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaEyeSlash
              size={20}
              className="cursor-pointer"
              onClick={toggleShowPassword}
            />
          )
        ) : null}
      </div>
      {error ? (
        <p className=" text-red-600 text-xs md:text-sm mb-2">{error}</p>
      ) : null}
    </>
  );
};

export default AuthInput;
