import React, { useState } from "react";
import Heading from "../components/Heading";
import Extract from "../components/Extract";
import Line from "../components/Line";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const RegisterCompanyVi01 = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const onHandleClick = (value: boolean) => {
    setStatus(true);
    navigate(value ? "/vi02notyet" : "/vi02already");
  };
  const { t } = useTranslation("vi01");
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      <Logo></Logo>
      <div className="pt-[50px]">
        <Heading>{t("heading")}</Heading>
        <Line></Line>
        <Extract>{t("extract")}</Extract>
      </div>
      <div className="pt-[50px] md:flex md:sgap-4 block">
        <button
          onClick={() => onHandleClick(false)}
          className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px] font-normal mb-4"
        >
          {t("btn1")}
        </button>
        <button
          onClick={() => onHandleClick(true)}
          className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px] font-normal"
        >
          {t("btn2")}
        </button>
      </div>
    </div>
  );
};

export default RegisterCompanyVi01;
