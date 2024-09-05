import React, { useState } from "react";
import LeftSide from "../components/common/auth/LeftSide";
import RightSide from "../components/common/auth/RightSide";
import login from "../assets/pass.png";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
const PasswordVerfication = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleClick = () => {
    localStorage.setItem("otp", JSON.stringify(otp));
    navigate("/auth/new-password");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      <div>
        <LeftSide
          title="Enter the Code"
          desc="Enter the code which sent on your email"
          img={login}
        />
      </div>
      <div>
        <RightSide btnText="next" action={handleClick}>
          <div
            dir="ltr"
            className="flex items-center justify-center flex-col md:flex-row gap-4 "
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputType={"text"}
              shouldAutoFocus={true}
              skipDefaultStyles={true}
              containerStyle={`gap-1 md:gap-4 text-center`}
              inputStyle={`border-2 rounded w-[50px] h-[80px] py-1 text-center`}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="mt-5 flex justify-center">
            <button>
              {t("don’t receive code ?")}
              <span className="text-mainColor">{t("resend again")}</span>
            </button>
          </div>
        </RightSide>
      </div>
    </div>
  );
};

export default PasswordVerfication;
