import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/common/Products";
import AddAlternative from "../components/home/AddAlternative";
import Spinner from "../components/common/Spinner";
import useAlternativeBrands from "../components/hooks/api/useAlternativeBrands";
import useForeginBrands from "../components/hooks/api/useForeginBrands";
import { useGlobalContext } from "../context/GlobalContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import exportImg from "../assets/export.png";
import boycot from "../assets/boycot.png";
import localImg from "../assets/true.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
const Home = () => {
  const { isLoading, data } = useAlternativeBrands();
  const { isLoading: loadingForegin, data: foregin } = useForeginBrands();
  const { data: global } = useGlobalContext();
  const { i18n, t } = useTranslation();
  const { local, foreign } = useSelector((state) => state.recentlyViewedSlice);
  const allProducts = [...local, ...foreign];

  return (
    <>
      {isLoading || loadingForegin ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            appLinks={global?.app_links}
            enTitle={global?.hero_title_en}
            arTitle={global?.hero_title_ar}
            trTitle={global?.hero_title_tr}
            enDesc={global?.hero_description_en}
            arDesc={global?.hero_description_ar}
            trDesc={global?.hero_description_tr}
            img={global?.hero_image}
          />
          <About
            enTtile={global?.about_us_en}
            arTitle={global?.about_us_ar}
            trTitle={global?.about_us_tr}
          />
          <div className="my-12">
            <Products
              isHome={true}
              data={data?.data?.data || []}
              isLocal={true}
            />
            <div className="w-full flex justify-center mt-4 md:mt-6 lg:mt-8">
              <Link
                to="/local-products"
                className="py-3 px-6 flex items-center justify-center gap-1 bg-mainColor text-white rounded-md"
              >
                {i18n.language === "ar" ? (
                  <IoIosArrowRoundForward size={20} />
                ) : (
                  <IoIosArrowRoundBack size={20} />
                )}

                <p>{t("show more")}</p>
              </Link>
            </div>
          </div>
          <div className="my-12">
            <Products
              isHome={true}
              data={foregin?.data?.data || []}
              isLocal={false}
            />
            <div className="w-full flex justify-center mt-4 md:mt-6 lg:mt-8">
              <Link
                to="/foreign-products"
                className="py-3 px-6 flex items-center justify-center gap-1 bg-mainColor text-white rounded-md"
              >
                {i18n.language === "ar" ? (
                  <IoIosArrowRoundForward size={20} />
                ) : (
                  <IoIosArrowRoundBack size={20} />
                )}

                <p>{t("show more")}</p>
              </Link>
            </div>
          </div>
          {allProducts?.length ? (
            <div className="my-12">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold mb-6 text-redColor">
                {t("recently viewd")}
              </p>
              <div className=" flex items-center flex-wrap gap-6 md:gap-8 lg:gap-12 justify-center">
                {allProducts?.map((item, index) => (
                  <Link
                    key={index}
                    to={`${item?.isLocal ? "/local" : "/foreign"}/${item.id}`}
                    className="relative w-[100px] md:w-[140.8px] h-[100px] md:h-[140.8px]  shadow-lg bg-white rounded-[50%] flex items-center justify-center gap-4 mb-8"
                  >
                    <img
                      src={item?.brand_logo}
                      alt={item?.brand_name}
                      loading="lazy"
                      className=" w-[80px] md:w-[120px] h-[80px] md:h-[120px]  rounded-[50%] object-contain "
                    />
                    {item?.isLocal ? (
                      <img
                        alt="true"
                        src={localImg}
                        className={` w-6 h-6 absolute -bottom-0 ${
                          i18n.language === "ar" ? "left-1" : "right-1"
                        }`}
                      />
                    ) : (
                      <img
                        alt="boycot"
                        src={boycot}
                        className={` w-9 h-9 absolute bottom-0 ${
                          i18n.language === "ar" ? "left-1" : "right-1"
                        }`}
                      />
                    )}
                    {item?.isLocal ? (
                      <img
                        alt="export"
                        src={exportImg}
                        className={` w-12 h-12 absolute top-0  ${
                          i18n.language === "ar" ? "right-1" : "left-1"
                        }`}
                      />
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <AddAlternative />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
