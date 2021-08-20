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
    <div id="Play-to-Earn" className="swiper-content">
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
                <li>
                  Enjoy opening mystery boxes under a transparent and fair
                  mechanism
                </li>
                <li>Yield aggregator makes GameFi more profitable</li>
                <li>
                  NFT yield farming enables frictionless flow of NFT in the DeFi
                  world
                </li>
                <li>Liquidity mining accelerator with your NFTs</li>
                <li>NFT marketplace enables free trade of NFT assets</li>
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
                <li>
                  Idle Game – enjoy great gaming experience with your spare time
                </li>
                <li>
                  More than 80 materials and 200 weapons – all game properties
                  are tradable
                </li>
                <li>Equipment recycling - another Play to Earn experience</li>
                <li>
                  Arm your heroes with stronger weapons and make it to the top
                  of the leaderboard for amazing rewards
                </li>
                <li>
                  Conquer the world boss together with global gamers and share
                  the spoils of war
                </li>
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
                <li>
                  Simulation Game: own the land of your own Dungeon and become
                  the ruler
                </li>
                <li>Build your own Dungeon and earn abundant rewards</li>
                <li>
                  Assemble heroes and team up for an adventure to others'
                  Dungeons and loot their rewards
                </li>
              </ul>
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
