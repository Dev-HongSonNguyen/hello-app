import React from "react";
import Heading from "../components/Heading";
import Extract from "../components/Extract";
import Line from "../components/Line";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
const country = [
  "Tokutei Ginou",
  "Tokutei Katsudo",
  "TTS kỹ năng 3",
  "TTS kỹ năng 2",
  "TTS kỹ năng 1",
  "Kỹ sư",
  "DHS có bằng THPT hoặc Trung cấp",
  "DHS có bằng Cao đẳng, Đại học",
  "Tôi không rõ, tôi muốn được tư vấn",
];
const RegisterCompanyVi02 = () => {
  const { t } = useTranslation("vi02");
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
        <div className="country-elem flex gap-2 flex-wrap py-4">
          {country.map((item: string) => {
            return (
              <div className="item-country">
                <span className="bg-[#F1F1F5] rounded-[5px] py-2 px-4 inline-block text-[15px] text-[#000]">
                  {item}
                </span>
              </div>
            );
          })}
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

export default RegisterCompanyVi02;
