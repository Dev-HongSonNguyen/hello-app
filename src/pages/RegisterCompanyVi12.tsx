import React, { useState } from "react";
import Heading from "../components/Heading";
import Line from "../components/Line";
import Extract from "../components/Extract";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
const province = [
  "Hokkaido",
  "Aomori",
  "Iwate",
  "Miyagi",
  "Akita",
  "Yamagata",
  "Fukushima",
  "Ibaraki",
  "Tochigi",
  "Gunma",
  "Saitama",
  "Chiba",
  "Tokyo",
  "Kangawa",
  "Niigata",
  "Toyama",
  "Ishikawa",
  "Fukui",
  "Yamanashi",
  "Nagano",
  "Gifu",
  "Shizuoka",
  "Aichi",
  "Mie",
  "Shiga",
  "Kyoto",
];
const RegisterCompanyVi12 = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);
  console.log(selectedOptions);
  const handleOptionClick = (option: string) => {
    if (selectedOptions.length >= 1) {
      alert("Bạn chỉ được lựa chọn duy nhất 1 trường");
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
  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData(selectedOptions);
    console.log("data2", data);
    // navigate("/vi05");
  };
  const onHandlePrevious = () => {
    navigate(-1);
  };

  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      {/* image */}
      <Logo></Logo>
      <div className="pt-[50px]">
        <Heading>Bạn đã từng dùng loại hình lao động nào?</Heading>
        <Line></Line>
        <Extract>
          Dữ liệu vùng miền việc làm sẽ được hiển thị ở vị trí mô tả nhanh và
          các khu vực quan trọng khác. Hãy chọn nơi làm việc là 1 trong 47 tỉnh
          thành cụ thể.
        </Extract>
      </div>
      <form onSubmit={onHandleSubmit}>
        <div className="province-elem flex gap-2 flex-wrap py-4">
          {province.map((item: string) => (
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
            className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px]"
          >
            Quay lại
          </button>
          <button className="block border border-[#0d8dc8] p-[15px] rounded-[30px] w-full text-[16px] bg-[#0d8dc8] text-white">
            Tiếp tục
          </button>
        </div>
        <div className="map">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692764160/company/image_15_v2vvhq.png"
              alt=""
              className="pt-[44px] pb-[60px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692764160/company/image_14_ce3gfa.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterCompanyVi12;
