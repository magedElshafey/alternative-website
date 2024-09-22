import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack, IoIosLogOut } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/auth";
import { request } from "../../../utils/axios";
import { useMutation } from "react-query";
const AuthBtns = (isSidebar) => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { alternativeLogin, alternativeRegester, userData } = useSelector(
    (state) => state.authSlice
  );
  const handleLogout = async (data) => {
    let url = "/logoutAPI";
    if (i18n.language === "ar") {
      url = "/logoutAPI?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/logoutAPI?lang=tr";
    } else {
      url = "/logoutAPI";
    }
    return await request({
      url,
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleLogout, {
    onSuccess: (data) => {
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        dispatch(logout());
        window.location.reload();
        navigate("/");
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
  });
  const handleLogOutClick = () => {
    const data = {};
    mutate(data);
  };
  return (
    <>
      {alternativeLogin ? (
        <div
          style={{
            userSelect: "none",
          }}
          className="relative"
        >
          <div
            onClick={toggleShowMenu}
            className=" flex items-center gap-1 cursor-pointer"
          >
            <img
              alt="av"
              loading="lazy"
              src={userData?.image}
              className="w-[50px] h-[50px] object-cover rounded-[50%]"
            />
            <MdKeyboardArrowDown size={30} className="text-white" />
          </div>
          {showMenu ? (
            <div
              className={`bg-white rounded-md p-2 text-start shadow-xl z-50 absolute min-w-[240px] bottom-[-84px] ${
                i18n.language === "ar" ? "left-0" : "right-0"
              }`}
            >
              <Link
                onClick={() => setShowMenu(false)}
                to="/auth/edit-account"
                className="w-full flex items-center justify-between text-mainColor mb-5"
              >
                <div className="flex items-center gap-2">
                  <FaUserAlt size={15} />
                  <p>{t("edit profile account")}</p>
                </div>
                {i18n.language === "ar" ? (
                  <IoIosArrowBack size={15} />
                ) : (
                  <IoIosArrowForward size={15} />
                )}
              </Link>
              <div
                onClick={() => setShowMenu(false)}
                className="w-full flex items-center justify-between text-redColor cursor-pointer"
              >
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleLogOutClick}
                >
                  <IoIosLogOut size={15} />
                  <p>{t("logout")}</p>
                </div>
                {i18n.language === "ar" ? (
                  <IoIosArrowBack size={15} />
                ) : (
                  <IoIosArrowForward size={15} />
                )}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div
          className={`flex items-center gap-2 ${isSidebar ? "flex-wrap" : ""}`}
        >
          <Link
            to="/auth/login"
            className="p-2 flex items-center justify-center rounded-md font-medium bg-mainColor text-white border border-white min-w-[90px]"
          >
            {t("login")}
          </Link>
          {alternativeRegester ? null : (
            <Link
              to="/auth/regester"
              className="p-2 flex items-center justify-center rounded-md font-medium bg-white text-mainColor min-w-[90px]"
            >
              {t("regester")}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthBtns;
