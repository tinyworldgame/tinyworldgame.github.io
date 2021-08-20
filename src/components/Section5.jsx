import React from "react";
import SectionTitle from "./SectionTitle";

import person4h from "../images/a4h.png"; // 彩色小人黑白
import person4 from "../images/a4.png"; // 彩色小人
import diwen_4 from "../images/diwen_4.png"; // 斜杠底纹
import png000 from "../images/000.png"; // 斜杠底纹

import icon_1 from "../images/icon_1.png"; // 黑白 icon
import icon_2 from "../images/icon_2.png"; // 黑白 icon
import icon_3 from "../images/icon_3.png"; // 黑白 icon

export default function Section5() {
  return (
    <section className="section5">
      <SectionTitle id="TNC" title="Tokenomics" />
      <div>
        <img className="section5-img-left1" src={diwen_4} alt="" />
        <img className="section5-img-right1" src={person4h} alt="" />
        <img className="section5-img-right2" src={person4} alt="" />
      </div>
      <p className="sub-title">What is TNC?</p>
      <p className="section5-text">
        TINY COIN(TNC) is the governance token for Tiny World. TNC can be earned
        by playing the game, yield farming, staking and actively participating
        in community governance. TNC token is a key component of the Tiny
        World’s decentralized game economy that incentivize our players who
        actively interact with our game and reward developers who contribute to
        the development of the game.
      </p>

      <div className="section5-icons-container">
        <div className="section5-icons-item-box">
          <img className="section5-icon" src={icon_1} alt="icon_1" />
          <div>Currency of The Game Economy</div>
        </div>
        <div className="section5-icons-item-box">
          <img className="section5-icon" src={icon_2} alt="icon_2" />
          <div>Reward for Playing and Staking</div>
        </div>
        <div className="section5-icons-item-box">
          <img className="section5-icon" src={icon_3} alt="icon_3" />
          <div>Decentralized Governance</div>
        </div>
      </div>

      <div className="section5-content">
        <img className="section5-poster" src={png000} alt="" />
      </div>
    </section>
  );
}
