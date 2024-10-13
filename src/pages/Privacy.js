import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
const Privacy = () => {
  const { data } = useGlobalContext();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data?.terms_and_conditions }} />
    </div>
  );
};

export default Privacy;
