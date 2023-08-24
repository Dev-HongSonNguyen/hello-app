import React from "react";
interface IheadingProps {
  children: string;
}
const Heading = ({ children }: IheadingProps) => {
  return (
    <h2 className="text-[#0D8DC8] uppercase font-semibold leading-normal text-[27px]">
      {children}
    </h2>
  );
};

export default Heading;
