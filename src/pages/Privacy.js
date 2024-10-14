import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Privacy = () => {
  const { data } = useGlobalContext();
  const formattedContent = data?.terms_and_conditions;

  return (
    <div className="no-tailwind">
      <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
    </div>
  );
};

export default Privacy;
