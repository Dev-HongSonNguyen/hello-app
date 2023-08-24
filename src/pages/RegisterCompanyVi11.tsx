import React from "react";
import Heading from "../components/Heading";
import Line from "../components/Line";
import Extract from "../components/Extract";
import Logo from "../components/Logo";

const RegisterCompanyVi11 = () => {
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      {/* image */}
      <Logo></Logo>
      <div className="pt-[50px]">
        <Heading>Thông tin liên hệ</Heading>
        <Line></Line>
        <Extract>
          Thông tin liên hệ sẽ hiển thị ở giao diện hồ sơ công ty để đối tác có
          thể liên hệ với bạn bất cứ lúc nào.
        </Extract>
      </div>
      <form action="" className="h-[325px]">
        <div className="">
          <input
            type="text"
            className="outline-none border border-[#E4E4E4] bg-[#FFF] p-3 rounded-md mb-4 w-full"
            placeholder="Website Công ty/Xí nghiệp"
          />
          <input
            type="email"
            className="outline-none border border-[#E4E4E4] bg-[#FFF] p-3 rounded-md mb-4 w-full"
            placeholder="Email"
          />
          <input
            type="number"
            className="outline-none border border-[#E4E4E4] bg-[#FFF] p-3 rounded-md mb-4 w-full"
            placeholder="Số điện thoại liên hệ"
          />
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

export default RegisterCompanyVi11;
