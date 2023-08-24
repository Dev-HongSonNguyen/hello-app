import React from "react";
export interface IExtractProps {
  children: string;
}
const Extract = ({ children }: IExtractProps) => {
  return (
    <p className="text-[#9B999A] text-[15px] leading-6 font-normal h-[103px] pb-4">
      {children}
    </p>
  );
};

export default Extract;
