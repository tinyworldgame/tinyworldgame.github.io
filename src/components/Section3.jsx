import React from "react";
import SectionTitle from "./SectionTitle";

import diwen_1 from "../images/diwen_1.png"; // 黄色闪电底纹
import diwen_3 from "../images/diwen_3.png"; // 字母加logo底纹
import diwen_4 from "../images/diwen_4.png"; // 斜杠底纹

// import banner3_1 from "../images/banner3_1.png";
// import banner3_2 from "../images/banner3_2.png";
// import banner3_3 from "../images/banner3_3.png";

export default function Section3() {
  return (
    <section className="section3">
      <SectionTitle title="FEATURES" />
      <img className="section3-img-center" src={diwen_1} alt="" />
      <img className="section3-img-left1" src={diwen_3} alt="" />
      <img className="section3-img-right1" src={diwen_4} alt="" />
      <div className="section3-content text-center">
        <div className="section3-img-box">
          <div className="section3-img-bg section3-img-banner1"></div>
          <div className="section3-img-bg-text">GameFi</div>
          <p>
            On-chain DeFi and off-chain game system including various types of elements.
          </p>
        </div>
        <div className="section3-img-box">
          <div className="section3-img-bg section3-img-banner2"></div>
          <div className="section3-img-bg-text">Conqueror</div>
          <p>
            Summon your NFT heroes to enter the Conquerors’ world and build your
            own dynasty.
          </p>
        </div>
        <div className="section3-img-box">
          <div className="section3-img-bg section3-img-banner3"></div>
          <div className="section3-img-bg-text">Dungeons</div>
          <p>
            Become the rule of Dungeons and team up for an adventure to others’
            Dungeons!
          </p>
        </div>
      </div>
    </section>
  );
}
