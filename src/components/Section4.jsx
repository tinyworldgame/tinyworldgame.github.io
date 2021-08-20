import React from "react";
import SectionTitle from "./SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import tu_1 from "../images/tu_1.png"; // 游戏截图
import tu_2 from "../images/tu_2.png"; // 游戏截图
import tu_3 from "../images/tu_3.png"; // 游戏截图

import person8 from "../images/a8.png"; // 小人
import person7 from "../images/a7.png"; // 小人

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

function SwiperContent(props) {
  const { imgLeft, imgRight, poster, descrElement } = props;
  return (
    <div className="swiper-content">
      <div className="swiper-content-bg"></div>
      <div className="swiper-content-img-container">
        <img className="swiper-content-img" src={poster} alt="" />
        <img className="swiper-content-img-left" src={imgLeft} alt="" />
        <img className="swiper-content-img-right" src={imgRight} alt="" />
      </div>
      <div className="swiper-content-right">
        {descrElement}
        <button className="section4-img-button center-bg">Learn More</button>
      </div>
    </div>
  );
}

export default function Section4() {
  return (
    <section className="section4">
      <SectionTitle title="PLAY TO EARN" />
      <Swiper
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperContent
            poster={tu_1}
            imgLeft={person8}
            imgRight={person7}
            descrElement={
              <ul>
                <li>Get great gaming experience even with leisure time</li>
                <li>
                  Anyone can play for fun regardless of age, boundary, and
                  operation
                </li>
                <li>Fast and easy to get started</li>
              </ul>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            poster={tu_2}
            imgLeft={person8}
            imgRight={person7}
            descrElement={
              <ul>
                <li>GameFi mechanism combines DeFi and NFT together</li>
                <li>Diversified gaming experience for different users</li>
                <li>Earn profit during game playing</li>
              </ul>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            poster={tu_3}
            imgLeft={person8}
            imgRight={person7}
            descrElement={
              <ul>
                <li>GameFi mechanism combines DeFi and NFT together</li>
                <li>Diversified gaming experience for different users</li>
                <li>Earn profit during game playing</li>
              </ul>
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
