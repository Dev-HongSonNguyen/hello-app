import React from "react";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Extract from "../components/Extract";

const RegisterCompanyVi10 = () => {
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      <Logo></Logo>
      <div className="pt-[50px]">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692782696/company/Group_224_aqw7vg.png"
            alt=""
          />
        </div>
        <div className="text-center py-8">
          <Heading>TẠO HỒ SƠ thành công</Heading>
          <Extract>
            Hồ sơ Công ty/Xí nghiệp của bạn đã được tạo thành công. Kiểm tra
            thông tin và gửi đến Nghiệp đoàn để thực hiện xác thực sớm nhất!
          </Extract>
        </div>
      </div>
      <div>
        <div className="">
          <button className="block border border-gray-[#E3E3E3] p-[15px] rounded-[30px] w-full text-[16px] mb-4">
            Xem hồ sơ Công ty/Xí nghiệp của bạn
          </button>
          <button className="block border border-[#0d8dc8] p-[15px] rounded-[30px] w-full text-[16px] bg-[#0d8dc8] text-white">
            Đăng đơn thử
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompanyVi10;
