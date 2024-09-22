import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const WbsiteLinks = ({ data, isFlex, isSidebar, setShowSidebar }) => {
  const { t } = useTranslation();
  const handleClick = () => {
    if (isSidebar) {
      setShowSidebar(false);
    } else {
      return;
    }
  };
  return (
    <ul className={`${isFlex ? "flex items-center gap-3" : null}`}>
      {data?.map((item, index) => (
        <li
          key={index}
          className={`${isFlex ? "text-white" : "mb-4"} roboto-regular `}
        >
          <NavLink
            onClick={handleClick}
            className="duration-300"
            to={item.path}
          >
            {t(item.title)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default WbsiteLinks;
