import React, { useState } from "react";
import Heading from "../components/Heading";
import Extract from "../components/Extract";
import Line from "../components/Line";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

const RegisterCompanyVi02Already = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("vi02Already");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  console.log(selectedOptions);

  const handleOptionClick = (option: string) => {
    if (selectedOptions.length >= 3) {
      alert("Bạn chỉ được lựa chọn 3 trường");
    } else {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        option,
      ]);
    }
  };
  const handleRemoveOption = (option: string) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((selectedOption) => selectedOption !== option)
    );
  };
  const onHandlePrevious = () => {
    navigate("/vi01");
  };
  const handelSubmit = () => {
    navigate("/vi12");
  };
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      <Logo></Logo>
      <div className="pt-[50px]">
        <Heading>{t("heading")}</Heading>
        <Line></Line>
        <Extract>{t("extract")}</Extract>
      </div>
      <form>
        <div className="country-elem flex gap-2 flex-wrap py-4">
          {country.map((item: string) => (
            <div className="item-country" key={item}>
              <button
                type="button"
                className={`${
                  selectedOptions.includes(item)
                    ? "border border-[#0d8dc8] text-[#0d8dc8]"
                    : "bg-[#F1F1F5] text-[#000]"
                } rounded-[5px] py-2 px-4 inline-block text-[15px]`}
                onClick={() => {
                  if (selectedOptions.includes(item)) {
                    handleRemoveOption(item);
                  } else {
                    handleOptionClick(item);
                  }
                }}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={onHandlePrevious}
            type="button"
            className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px]"
          >
            {t("btn1")}
          </button>
          <button
            onClick={handelSubmit}
            type="submit"
            className="block border border-[#0d8dc8] p-[15px] rounded-[30px] w-full text-[16px] bg-[#0d8dc8] text-white"
          >
            {t("btn2")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCompanyVi02Already;
