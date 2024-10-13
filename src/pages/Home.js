import React, { useState, useEffect } from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/common/Products";
import AddAlternative from "../components/home/AddAlternative";
import Spinner from "../components/common/Spinner";
import useAlternativeBrands from "../components/hooks/api/useAlternativeBrands";
import useForeginBrands from "../components/hooks/api/useForeginBrands";
import { useGlobalContext } from "../context/GlobalContext";
const Home = () => {
  const { isLoading, data } = useAlternativeBrands();
  const { isLoading: loadingForegin, data: foregin } = useForeginBrands();
  const { data: global } = useGlobalContext();
  console.log(
    "foregin?.data?.recently_viewed_products?.length",
    foregin?.data?.recently_viewed_products?.length
  );
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

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
          </div>
          <div className="my-12">
            <Products
              isHome={true}
              data={foregin?.data?.data || []}
              isLocal={false}
            />
          </div>
          {recentlyViewedProducts?.length ? (
            <div className="my-12">
              <Products
                isHome={true}
                data={recentlyViewedProducts || []}
                isLocal={false}
                title="recently viewd"
              />
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
