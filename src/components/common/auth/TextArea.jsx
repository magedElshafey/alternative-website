import React from "react";

const TextArea = ({ icon, ...otherProps }) => {
  return (
    <div className="w-full mx-auto flex  gap-2 border border-[#D9D9D9] rounded-lg mb-3 text-[#D9D9D9] p-2 capitalize h-[180px]">
      {icon}
      <textarea
        {...otherProps}
        className="flex-1 bg-transparent border-none focus:outline-none capitalize h-full"
      />
    </div>
  );
};

export default TextArea;
