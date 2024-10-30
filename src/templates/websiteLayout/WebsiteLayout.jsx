import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import Meta from "../../components/common/meta/Meta";
import { useLocation } from "react-router-dom";
import { request } from "../../utils/axios";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const WebsiteLayout = () => {
  const { data } = useGlobalContext();
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  // profile details
  const getProfileDetails = async () => {
    let url = "/profile";
    if (i18n.language === "ar") {
      url = "/profile?lang=ar";
    } else if (i18n.language === "tr") {
      url = "/profile?lang=tr";
    } else {
      url = "/profile";
    }
    return await request({
      url,
    });
  };
  const { isLoading, data: profileData } = useQuery(
    "my-profile",
    getProfileDetails,
    {
      enabled: token !== null,
      onSuccess: (data) => {
        if (data?.data?.status) {
          return;
        } else if (data?.response?.status === 401) {
          Swal.fire({
            icon: "error",
            title: t("expired session"),
            text: t("need to login again"),
          }).then((res) => {
            if (res?.isConfirmed) {
              dispatch(logout());
              window.location.reload();
              navigate("/auth/login");
            }
          });
        }
      },
    }
  );
  return (
    <div>
      <Meta fav={data?.favicon} />
      <Navbar />

      <div
        className={`main w-full container mx-auto px-6  my-5 ${
          pathname === "/local-products" || pathname === "/foreign-products"
            ? "mt-[70px]"
            : null
        }`}
      >
        <div className="bg-white py-3 flex items-center rounded-lg  border-2 border-slate-500">
          <div className="container mx-auto px-6">{<Outlet />}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
