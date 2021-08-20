import React from "react";
import SectionTitle from "./SectionTitle";

import person1 from "../images/a3h.png"; // 透明底小人
import person2 from "../images/a3.png"; // 彩色小人
import diwen_2 from "../images/diwen_2.png"; // 星星底纹
import banner4 from "../images/banner4.png";
import banner4_small from "../images/banner4-400px.png";

export default function Section2() {
  return (
    <section className="section2">
      <SectionTitle id="introduction" title="INTRODUCTION" />
      <img className="section2-img-person1" src={person1} alt="" />
      <img className="section2-img-person2" src={person2} alt="" />
      <img className="section2-img-diwen" src={diwen_2} alt="" />

      <div className="section2-content main-content">
        <img className="section2-img-banner" src={banner4} srcSet={`${banner4_small} 400w, ${banner4} 1000w`} sizes="(max-width: 600px) 100vw, 800px" alt="" />

        <div className="section2-content-text-container center-bg">
          <p className="margin-auto section2-text">
            Tiny World is a blockchain game universe with a combination of NFT,
            DeFi and Gaming. By summoning your own heroes, you can enter
            different worlds to start your conquerer quest. Alternatively, start
            your adventure to the dungeon to realize your 'Play to Earn'
            experience.
          </p>
          <button className="section2-img-button center-bg">Learn More</button>
        </div>
      </div>
    </section>
  );
}
