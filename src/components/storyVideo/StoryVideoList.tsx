import React from "react";
import StoryVideoItem from "./StoryVideoItem";

const StoryVideoList = () => {
  return (
    <div className="grid grid-cols-4">
      <StoryVideoItem></StoryVideoItem>
      <StoryVideoItem></StoryVideoItem>
      <StoryVideoItem></StoryVideoItem>
      <StoryVideoItem></StoryVideoItem>
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
              <StoryVideoItem></StoryVideoItem>
              <StoryVideoItem></StoryVideoItem>
              <StoryVideoItem></StoryVideoItem>
              <StoryVideoItem></StoryVideoItem>
              <StoryVideoItem></StoryVideoItem>
              <StoryVideoItem></StoryVideoItem>
            </SwiperSlide>
          </Swiper> */}
    </div>
  );
};

export default StoryVideoList;
