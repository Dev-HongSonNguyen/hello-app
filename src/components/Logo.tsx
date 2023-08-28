import React from "react";
import { useTranslation } from "react-i18next";
const Logo = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (event: any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div className="logo flex justify-center relative border-b-2 border-gray-200">
      <img
        src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692758655/company/Frame_lirx6j.png"
        alt=""
        className="pt-[30px] pb-[30px]"
      />
      <div className="absolute top-[20px] right-[-10px]">
        <select
          name=""
          id=""
          className="outline-none border-none"
          onChange={handleChangeLanguage}
        >
          <option className="" value="vi">
            Tiếng việt
          </option>
          <option className="" value="en">
            English
          </option>
        </select>
      </div>
    </div>
  );
};

export default Logo;
