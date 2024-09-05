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

const Footer = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();

  return (
    <div className="w-screen bg-mainColor py-4 text-white roboto-regular">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-48">
          <div>
            <Logo img={data?.logo} />
            <p className=" text-slate-200 mt-4">
              {t("lorem").substring(0, 60)}
            </p>
          </div>
          <div>
            <p className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">
              {t("links")}
            </p>
            <WbsiteLinks isFlex={false} data={navlinks} isSidebar={false} />
          </div>
          <div>
            <p className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">
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
            <p className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">
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
