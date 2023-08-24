import "../asset/toggle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconFacebook,
  IconGoogle,
  IconLine,
  IconZalo,
  IconCamera,
  IconBot,
} from "../components/icon";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "../components/Tab-panel/Tab-panel";
import StoryImageList from "../components/storyImage/StoryImageList";
import StoryVideoList from "../components/storyVideo/StoryVideoList";
const Profile = () => {
  const [value, setValue] = useState(0);
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="avatar">
        <div className="bg-[#0D8DC8] h-[180px] relative">
          <div className="px-4 pt-3 text-white">
            <Link to={`#`}>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="absolute bottom-0 right-0">
            <IconBot></IconBot>
          </div>
          <div className="flex justify-center">
            <div className="absolute">
              <div className="relative">
                <img
                  className="rounded-[20px] max-w-[180px] max-h-[180px]"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  alt=""
                />
                <label htmlFor="dropzone-file">
                  <div className="absolute top-[10px] right-[10px]">
                    <IconCamera></IconCamera>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="des text-center pt-12 relative">
        <div className="">
          <div className="relative">
            <h4 className="text-[#000] text-[17px] font-semibold uppercase">
              TÊN CÔNG TY: chưa rõ
            </h4>
            <span className="absolute top-[2px] right-[10px] text-[10px] bg-red-600 text-white py-[2px] px-[5px] rounded-lg">
              Chưa kiểm duyệt
            </span>
          </div>
          <p className="text-[#8B929A] text-[15px] font-normal">
            Chế biến thực phẩm
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center py-2">
        {/* toggle */}
        <div className="flex items-center justify-center">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block bg-[#F2B92A] w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
        </div>
        <div className="upload-profile">
          <button className="border rounded-lg bg-gradient-to-r py-3 px-4 from-[#EF8720] to-[#F2B92A] shadow-md  text-white ]">
            Tải hồ sơ
          </button>
        </div>
        <div className="share">
          <button className="border rounded-lg bg-[#ffffff] shadow-md py-3 px-5 text-[#0D8DC8]">
            Chia sẻ
          </button>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692758655/company/image_16_pvvvdt.png"
            alt=""
            className="shadow-md rounded-lg"
          />
        </div>
      </div>
      <div className="info px-4 leading-6 py-4">
        <div className="info-item flex items-center gap-2 text-[13px]">
          <i className="fa-solid w-[10px] fa-location-dot text-[#8B929A]"></i>
          <p className="">
            Địa điểm <strong>Osaka</strong>
          </p>
        </div>
        <div className="info-item flex items-center gap-2 text-[13px]">
          <i className="fa-solid w-[10px] fa-suitcase text-[#8B929A]"></i>
          <p className="">
            Từng tuyển dụng lao động nước ngoài{" "}
            <strong>Thực tập sinh 1, 2</strong>
          </p>
        </div>
        <div className="info-item flex items-center gap-2 text-[13px]">
          <i className="fa-solid w-[10px] fa-person text-[#8B929A]"></i>
          <p className="">
            Số lượng nhân viên <strong>50 người</strong>
          </p>
        </div>
      </div>
      <div className="story border-y border-y-[#e5e5e5]">
        <div className="py-4 px-4">
          <div className="story-image py-4">
            <div className="title flex items-center justify-between">
              <h4 className="text-[17px] font-bold pb-2">Hình ảnh</h4>
              <label htmlFor="dropzone-file">
                <i className="fa-solid fa-plus"></i>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="">
              <StoryImageList></StoryImageList>
            </div>
          </div>
          <div className="story-video py-4 border-t border-t-[#e5e5e5]">
            <div className="title flex items-center justify-between">
              <h4 className="text-[17px] font-bold pb-2">Video</h4>
              <label htmlFor="dropzone-file">
                <i className="fa-solid fa-plus"></i>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="">
              <StoryVideoList></StoryVideoList>
            </div>
          </div>
        </div>
      </div>
      {/* form thông tin cơ bản */}
      <div className="px-4">
        <form action="">
          <div className="flex items-center justify-between pt-[24px]">
            <span className="text-[#0d8dc8] text-[17px]">Thông tin cơ bản</span>
            <button className="text-[#0d8dc8] text-[17px]">Xong</button>
          </div>
          <div className="pt-2">
            <div className="flex items-center border-t border-gray-400">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-[48px] flex-shrink-0 flex items-center px-2">
                Tên công ty/Xí nghiệp
              </span>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder="Tên công ty/Xí nghiệp"
              />
            </div>
            <div className="flex items-center border-t border-gray-400">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-[48px] flex-shrink-0 flex items-center px-2">
                Đã từng sử dụng lao động nước ngoài
              </span>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder=""
                value={"Thực tập sinh 1,2"}
              />
            </div>
            <div className="flex items-center border-t border-gray-400">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-[48px] flex-shrink-0 flex items-center px-2">
                Quan tâm đến loại hình lao động
              </span>
              <select
                name=""
                id=""
                className="border-none outline-none w-full px-2 h-[45px] text-[#9b999a]"
              >
                <option value="">Ví dụ: Tokutei, Thực tập sinh 3</option>
                <option value="">Tokutei Ginou</option>
                <option value="">Tokutei Katsudo</option>
                <option value="">TTS kỹ năng 3</option>
                <option value="">DHS có bằng THPT hoặc Trung cấp</option>
              </select>
            </div>
            <div className="flex items-center border-t border-gray-400">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-[48px] flex-shrink-0 flex items-center px-2">
                Khu vực
              </span>
              <select
                name=""
                id=""
                className="border-none outline-none w-full px-2 h-[45px] text-[#9b999a]"
              >
                <option value="" className="">
                  Ví dụ: Osaka - Japan
                </option>
              </select>
            </div>
            <div className="flex items-center border-t border-gray-400">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-[48px] flex-shrink-0 flex items-center px-2">
                Số lượng nhân viên
              </span>
              <select
                name=""
                id=""
                className="border-none outline-none w-full px-2 h-[45px] text-[#9b999a]"
              >
                <option value="" className="">
                  Ví dụ: 50
                </option>
              </select>
            </div>
            <div className="flex items-center border-y border-gray-400">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-[48px] flex-shrink-0 flex items-center px-2">
                Vốn điều lệ
              </span>
              <select
                name=""
                id=""
                className=" border-none outline-none w-full px-2 h-[45px] text-[#9b999a]"
              >
                <option value="" className="">
                  Ví dụ: 10 triệu yên
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {/* Doanh thu */}
      <div className="px-4">
        <h4 className="pt-2">Doanh thu</h4>
        <div className="flex items-center justify-between border border-[#F1F1F5] rounded-[10px] px-4 py-2 my-2">
          <div className="text-left">
            <span className="text-[#0D8DC8] text-[11px]">2021</span>
            <p className="text-[17px] font-bold">400 triệu Yên</p>
          </div>
          <button className="text-[#0d8dc8] text-[17px] font-normal">
            Xóa
          </button>
        </div>
        <div className="flex items-center justify-center border border-[#F1F1F5] rounded-[10px] px-4 py-5">
          <button className="">
            <img
              src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692865156/company/Icon_ggbckw.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="px-4">
        <h4 className="pt-2">Lợi nhuận</h4>
        <div className="flex items-center justify-between border border-[#F1F1F5] rounded-[10px] px-4 py-2 my-2">
          <div className="text-left">
            <span className="text-[#0D8DC8] text-[11px]">2021</span>
            <p className="text-[17px] font-bold">80 triệu Yên</p>
          </div>
          <button className="text-[#0d8dc8] text-[17px] font-normal">
            Xóa
          </button>
        </div>
        <div className="flex items-center justify-center border border-[#F1F1F5] rounded-[10px] px-4 py-5">
          <button className="">
            <img
              src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692865156/company/Icon_ggbckw.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="px-4">
        <form action="">
          <div className="flex items-center justify-between pt-[24px]">
            <span className="text-[#0d8dc8] text-[17px]">
              Thông tin liên hệ
            </span>
            <button className="text-[#0d8dc8] text-[17px]">Xong</button>
          </div>
          <div className="pt-2">
            <div className="flex items-center border-t border-gray-400 h-[48px]">
              <span className="bg-[#F1F1F5] w-[144px] text-[13px] font-bold h-full flex-shrink-0 flex items-center px-2">
                Website
              </span>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder="http://www."
              />
            </div>
            <div className="flex items-center border-t border-gray-400 h-[48px]">
              <div className="bg-[#F1F1F5] w-[144px] h-full px-2 flex-shrink-0 flex items-center gap-2">
                <IconZalo></IconZalo>
                <span className="text-[13px] font-bold">Kết nối Zalo</span>
              </div>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder="http://www."
              />
            </div>
            <div className="flex items-center border-t border-gray-400 h-[48px]">
              <div className="bg-[#F1F1F5] w-[144px] h-full px-2 flex-shrink-0 flex items-center gap-2">
                <IconLine></IconLine>
                <span className="text-[13px] font-bold">Kết nối Line</span>
              </div>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder="http://www."
              />
            </div>
            <div className="flex items-center border-t border-gray-400 h-[48px]">
              <div className="bg-[#F1F1F5] w-[144px] h-full px-2 flex-shrink-0 flex items-center gap-2">
                <IconFacebook></IconFacebook>
                <span className="text-[13px] font-bold">Kết nối Facebook</span>
              </div>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder="http://www."
              />
            </div>
            <div className="flex items-center border-t border-gray-400 h-[48px]">
              <div className="bg-[#F1F1F5] w-[144px] px-2 flex-shrink-0 flex items-center gap-2 h-full">
                <IconGoogle></IconGoogle>
                <span className="text-[13px] font-bold">Kết nối Google</span>
              </div>
              <input
                type="text"
                className="border-none outline-none w-full px-2 h-[45px]"
                placeholder="http://www."
              />
            </div>
            <form className="flex items-center border-t border-gray-400 h-[48px]">
              <div className="bg-[#F1F1F5] h-full flex items-center">
                <span className="w-[144px] text-[13px] font-bold flex-shrink-0 px-2">
                  Số điện thoại
                </span>
              </div>
              <div className="flex justify-center items-end">
                <div className=""></div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-center items-end px-2">
                    <select
                      name=""
                      id=""
                      className="border-none outline-none mx-2"
                    >
                      <option value="">(+84)</option>
                    </select>
                    <input
                      type="number"
                      className="px-2 py-0 border-none outline-none w-full"
                    />
                  </div>
                  <button className="text-[#0D8DC8] text-[15px]">Thêm</button>
                </div>
              </div>
            </form>
            <form className="flex items-center border-y border-gray-400 h-[48px]">
              <div className="bg-[#F1F1F5] h-full flex items-center">
                <span className="w-[144px] text-[13px] font-bold flex-shrink-0 px-2">
                  Email khác
                </span>
              </div>
              <div className="flex justify-center items-end">
                <div className="flex items-center justify-between">
                  <div className="flex justify-center items-end px-2">
                    <input
                      type="text"
                      className="px-2 py-0 border-none outline-none w-full"
                      placeholder="Ví dụ: info@abc.com"
                    />
                  </div>
                  <button className="text-[#0D8DC8] text-[15px]">Thêm</button>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
      <div className="border-y border-[#e5e7eb] mt-5 px-4">
        <div className="py-4">
          <h4 className="text-[17px] font-bold">Giấy tờ</h4>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{ textAlign: "center" }}
          >
            <Tab
              label="Giấy phép"
              sx={{
                color: value === 0 ? "#9B999A" : "#9B999A",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Chứng chỉ"
              sx={{
                color: value === 1 ? "#9B999A" : "#9B999A",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label="Bằng khen"
              sx={{
                color: value === 2 ? "#9B999A" : "#9B999A",
              }}
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="license">
              <div className="grid grid-cols-3 gap-6">
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872263/company/image_1_lxrlko.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">
                    Đăng ký kinh doanh
                  </p>
                </div>
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872555/company/gp2_ctc0e3.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">Giấy phép 1</p>
                </div>
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872555/company/gp2_ctc0e3.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">Giấy phép 2</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="license">
              <div className="grid grid-cols-3 gap-6">
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872263/company/image_1_lxrlko.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">Chứng chỉ 1</p>
                </div>
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872555/company/gp2_ctc0e3.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">Chứng chỉ 2</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="license">
              <div className="grid grid-cols-3 gap-6">
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872263/company/image_1_lxrlko.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">Bằng khen 1</p>
                </div>
                <div className="item text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692872555/company/gp2_ctc0e3.png"
                      alt=""
                    />
                  </div>
                  <p className="text-[13px] font-bold pt-2">Bằng khen 2</p>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center py-2">
        {/* toggle */}
        <div className="flex items-center justify-center">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block bg-[#F2B92A] w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
        </div>
        <div className="upload-profile">
          <button className="border rounded-lg bg-gradient-to-r py-3 px-4 from-[#EF8720] to-[#F2B92A] shadow-md  text-white ]">
            Tải hồ sơ
          </button>
        </div>
        <div className="share">
          <button className="border rounded-lg bg-[#ffffff] shadow-md py-3 px-5 text-[#0D8DC8]">
            Chia sẻ
          </button>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1692758655/company/image_16_pvvvdt.png"
            alt=""
            className="shadow-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
