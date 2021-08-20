import React from "react";
import logoTop from "../images/logo-top.png";
import "./header.css";
import button_2 from "../images/button_2.png";
import button_3 from "../images/button_3.png";
import top from "../images/top.png";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="header-bgi" src={top} alt="" />
        <div className="header-pc-content">
          <div className="header-left">
            <img className="header-logo" src={logoTop} alt="" />
            <div className="header-pc-menu">
              <span className="header-line">|</span>
              <img className="header-icon-home" src={button_2} alt="" />
              <span className="header-line">|</span>
              <button>GameFi</button>
              <button>MarketPlace</button>
              <button>Docs</button>
            </div>
          </div>

          <button className="header-button-play">
            <img width="100%" src={button_3} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}
