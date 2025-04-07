import React from "react";
import { BannerWrapper, VideoBackground, OverlayContent, BannerTitle, ScrollDown } from "./style";
import bannerVideo from "../../assets/videobanner.mp4";
import SearchBar from "../SearchBar/SearchBar";

const Banner = () => {
  return (
    <BannerWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <OverlayContent>
        <BannerTitle>Đặt kỳ nghỉ của bạn</BannerTitle>
        <ScrollDown />
      </OverlayContent>
      <SearchBar />
    </BannerWrapper>
  );
};

export default Banner;