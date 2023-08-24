import React from "react";
import Heading from "../components/Heading";
import Line from "../components/Line";
import Extract from "../components/Extract";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const RegisterCompanyVi07 = () => {
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      {/* image */}
      <Logo></Logo>
      <div className="pt-[50px]">
        <div className="flex items-end justify-between">
          <Heading>Doanh thu</Heading>
          <Link to={"/"} className="text-[#9B999A] cursor-pointer text-[16px]">
            Bỏ qua
          </Link>
        </div>
        <Line></Line>
        <Extract>Doanh thu thể hiện tình hình kinh doanh của công ty.</Extract>
      </div>
      <form action="h-[325px]">
        <div className="border border-[#E4E4E4] rounded-md p-4">
          <div className="flex items-center justify-between border border-[#E4E4E4] bg-[#FFF] p-3 rounded-md mb-4">
            <input
              type="date"
              className="outline-none border-none"
              placeholder="Năm"
            />
            <i className="fa-solid fa-calendar-days text-[#0d8dc8]"></i>
          </div>
          <div className="flex items-center justify-between border border-[#E4E4E4] bg-[#FFF] p-3 rounded-md">
            <input
              type="text"
              className="outline-none border-none"
              placeholder="Doanh thu"
            />
            <span className="text-[#BAC1CC] text-[15px]">Yên</span>
          </div>
        </div>
        <button className="flex items-center border border-[#0d8dc8] text-[#0d8dc8] font-normal text-[15px] py-[15px] w-full justify-center gap-[10px] rounded-[30px] mt-4 mb-[100px]">
          <i className="fa-solid fa-circle-plus"></i>
          <span>Thêm dữ liệu</span>
        </button>
      </form>
      <div>
        <div className="flex gap-4 items-center">
          <button className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px]">
            Quay lại
          </button>
          <button className="block border border-[#0d8dc8] p-[15px] rounded-[30px] w-full text-[16px] bg-[#0d8dc8] text-white">
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompanyVi07;
