import React from "react";
import logoTop from "../images/logo-top.png";
import "./header.css";
import button_2 from "../images/button_2.png";
import button_3 from "../images/button_3.png";
import top from "../images/top.png";

function scrollTo(e) {
  // console.log("event", e);
  e.preventDefault();
  const herf = e.target.href;
  const id = herf.split("#")[1];
  console.log('id', id);
  const toElement = document.querySelector("#" + id);
  toElement.scrollIntoView({
    behavior: "smooth"
  });
}

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
              <a onClick={scrollTo} href="#introduction">
                Introduction
              </a>
              <a onClick={scrollTo} href="#Features">
                Features
              </a>
              <a onClick={scrollTo} href="#Play-to-Earn">
                Play-to-Earn
              </a>
              <a onClick={scrollTo} href="#TNC">
                TNC
              </a>
              <button>Docs</button>
            </div>
          </div>

          <button className="header-button-play">
            <img width="100%" src={button_3} alt="" />
          </button>
          <button className="header-button-toggle">-</button>
        </div>
      </div>
    </header>
  );
}
