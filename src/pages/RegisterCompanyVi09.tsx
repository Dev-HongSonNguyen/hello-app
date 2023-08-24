import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Line from "../components/Line";
import Extract from "../components/Extract";
import Logo from "../components/Logo";

const RegisterCompanyVi09 = () => {
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      {/* image */}
      <Logo></Logo>
      <div className="pt-[50px]">
        <div className="flex items-end justify-between">
          <Heading>Thời gian liên hệ</Heading>
          <Link to={"/"} className="text-[#9B999A] cursor-pointer text-[16px]">
            Bỏ qua
          </Link>
        </div>
        <Line></Line>
        <Extract>Đặt lịch hẹn để chúng tôi liên hệ tư vấn cho bạn.</Extract>
      </div>
      <form action="" className="h-[325px]">
        <div className="flex items-center justify-between border border-[#E4E4E4] bg-[#FFF] p-3 rounded-md mb-4">
          <input
            type="date"
            className="outline-none border-none"
            placeholder="Năm"
          />
          <i className="fa-solid fa-calendar-days text-[#0d8dc8]"></i>
        </div>
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

export default RegisterCompanyVi09;
