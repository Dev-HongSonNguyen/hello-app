import React from "react";
import StoryImageItem from "./StoryImageItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const StoryImageList = () => {
  return (
    <div className="grid grid-cols-4">
      <StoryImageItem></StoryImageItem>
      <StoryImageItem></StoryImageItem>
      <StoryImageItem></StoryImageItem>
      <StoryImageItem></StoryImageItem>
      {/* <Swiper
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation]}
        navigation
        breakpoints={{
          1440: {
            slidesPerView: 4,
          },
          970: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          360: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="">
          <StoryImageItem></StoryImageItem>
          <StoryImageItem></StoryImageItem>
          <StoryImageItem></StoryImageItem>
          <StoryImageItem></StoryImageItem>
          <StoryImageItem></StoryImageItem>
          <StoryImageItem></StoryImageItem>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default StoryImageList;
