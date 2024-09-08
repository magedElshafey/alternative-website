import React from "react";
import { aboutDetails } from "../../data/data";
import { useTranslation } from "react-i18next";
const About = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-12">
          <div>
            <img
              alt="about"
              loading="lazy"
              src={aboutDetails.img}
              className="w-full h-[350px]"
            />
          </div>
          <div className="roboto-medium text-mainColor leading-loose">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
