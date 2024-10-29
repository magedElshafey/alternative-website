import React from "react";
import Logo from "../../../components/layout/Logo";
import { useTranslation } from "react-i18next";
import { navlinks } from "../../../data/data";
import WbsiteLinks from "../../../components/layout/WbsiteLinks";
import SocialMedia from "../../../components/common/SocialMedia";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useGlobalContext } from "../../../context/GlobalContext";
import { FaMobileScreen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data } = useGlobalContext();
  const { t, i18n } = useTranslation();

  return (
    <div className="w-screen bg-mainColor py-4 text-white roboto-regular">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16 xl:gap-20">
          <div>
            <Logo img={data?.logo} />
            {data?.slogan_ar || data?.slogan_en || data?.slogan_tr ? (
              <p className=" text-slate-200 mt-4">
                {i18n.language === "ar"
                  ? data?.slogan_ar.substr(0, 70)
                  : i18n.language === "en"
                  ? data?.slogan_en.substr(0, 70)
                  : data?.slogan_tr.substr(0, 70)}
              </p>
            ) : null}
          </div>
          <div>
            <p className="text-white font-bold text-lg md:text-xl mb-4">
              {t("important links")}
            </p>
            <ul>
              {navlinks?.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link to={item?.path}>{t(item?.title)}</Link>
                </li>
              ))}
              <li>
                <Link to="/privacy">{t("Privacy Policy")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-lg md:text-xl mb-4">
              {t("contact us")}
            </p>
            <a
              href={`mailto:${data?.email}`}
              target="_blank"
              rel="noreferrer"
              className=" flex items-center gap-1 lowercase mb-4"
            >
              <span>
                <MdEmail size={15} className="text-white" />
              </span>
              <span> {data?.email}</span>
            </a>
            <a
              href={`https://wa.me/${data?.phone}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 lowercase mb-4"
            >
              <span>
                <FaMobileScreen size={15} className="text-white" />
              </span>
              <span dir="ltr">{data?.phone}</span>
            </a>
            <p className="flex  gap-1">
              <span>
                <CiLocationOn size={15} className="text-white mt-1" />
              </span>
              <span>{data?.address}</span>
            </p>
          </div>
          <div>
            <p className="text-white font-bold text-lg md:text-xl mb-4">
              {t("follow us")}
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
