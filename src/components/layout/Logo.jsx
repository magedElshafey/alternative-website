import React from "react";
import { Link } from "react-router-dom";
const Logo = ({ img }) => {
  return (
    <Link to="/">
      <img alt="logo" loading="lazy" src={img} className="w-[50.5px] " />
    </Link>
  );
};

export default Logo;
