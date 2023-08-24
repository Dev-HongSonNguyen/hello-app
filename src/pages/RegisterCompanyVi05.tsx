import React from "react";
import Heading from "../components/Heading";
import Extract from "../components/Extract";
import Line from "../components/Line";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
const RegisterCompanyVi05 = () => {
  const { t } = useTranslation("vi05");
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      {/* image */}
      <Logo></Logo>
      <div className="pt-[50px]">
        <Heading>{t("heading")}</Heading>
        <Line></Line>
        <Extract>{t("extract")}</Extract>
      </div>
      <div>
        <div className="drop-down">
          <select
            name=""
            id=""
            className="bg-[#0d8dc8] outline-none w-full text-center text-white py-5 my-3 rounded-[30px]"
          >
            <option value="" className="">
              --- {t("select")} ---
            </option>
            <option value="" className="">
              {" "}
              {"<"}50
            </option>
            <option value="" className="">
              50-100
            </option>
            <option value="" className="">
              {" "}
              {">"}100
            </option>
          </select>
        </div>
        <div className="flex gap-4 items-center">
          <button className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px]">
            {t("btn1")}
          </button>
          <button className="block border border-[#0d8dc8] p-[15px] rounded-[30px] w-full text-[16px] bg-[#0d8dc8] text-white">
            {t("btn2")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompanyVi05;
