import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";

const LangMenu = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload();
    setShowMenu(false);
  };
  const englishMenu = ["ar", "tr"];
  const arabicMenu = ["en", "tr"];
  const trMenu = ["en", "ar"];
  return (
    <div
      ref={menuRef}
      style={{
        userSelect: "none",
      }}
      className="relative  roboto-regular"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleShowMenu();
        }}
        className="flex items-center cursor-pointer gap-1 text-white "
      >
        <IoLanguageOutline />
        <p>{t(i18n.language)}</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <ul
        className={`p-3 absolute bottom-[-85px] left-start bg-white rounded-lg shadow-lg text-mainColor duration-300 ${
          showMenu ? " opacity-100 block" : " hidden opacity-0"
        }`}
      >
        {i18n.language === "en"
          ? englishMenu.map((item, index) => (
              <li
                onClick={() => handleChangeLanguage(item)}
                key={index}
                className="mb-2 cursor-pointer"
              >
                {t(item)}
              </li>
            ))
          : i18n.language === "ar"
          ? arabicMenu.map((item, index) => (
              <li
                onClick={() => handleChangeLanguage(item)}
                key={index}
                className="mb-2 cursor-pointer"
              >
                {t(item)}
              </li>
            ))
          : i18n.language === "tr"
          ? trMenu.map((item, index) => (
              <li
                onClick={() => handleChangeLanguage(item)}
                key={index}
                className="mb-2 cursor-pointer"
              >
                {t(item)}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default LangMenu;
