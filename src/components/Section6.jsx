import React from "react";

// import person6 from "../images/a6.png"; // 彩色小人
import logo from "../images/logo.png"; // logo
// import partnerdi from "../images/logodi.png"; // partners
import diwen_2 from "../images/diwen_2.png"; // 星星底纹

import icon1 from "../images/1.png";
import icon2 from "../images/2.png";
import icon3 from "../images/3.png";
import icon4 from "../images/4.png";

export default function Section6() {
  return (
    <section className="text-center section6">
      <img className="section6-img-right1" src={diwen_2} alt="" />
      {/* <div className="margin-auto section6-content">
        <img className="section5-poster" src={partnerdi} alt="" />
        <img className="section6-img-left" src={person6} alt="" />
      </div> */}
      <img width="250" src={logo} alt="" />
      <div className="section6-icon-list">
        <img height="30" src={icon1} alt="" />
        <img height="30" src={icon2} alt="" />
        <img height="30" src={icon3} alt="" />
        <img height="30" src={icon4} alt="" />
      </div>
    </section>
  );
}
