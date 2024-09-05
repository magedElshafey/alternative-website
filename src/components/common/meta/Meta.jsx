import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Meta = ({ title, desc, fav }) => {
  const { i18n } = useTranslation();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title ? title : i18n.language === "ar" ? "البديل" : "Alternative"}
      </title>
      <meta name="description" content={desc} />
      <link rel="icon" href={fav ? fav : null} />
    </Helmet>
  );
};

export default Meta;
