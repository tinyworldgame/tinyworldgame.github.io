import React from "react";
import "./sectionTitle.css";

export default function SectionTitle(props) {
  const { title, id } = props;
  return (
    <div className="center-bg section-title">
      {id && <div id={id} className="section-title-anchor" />}
      <span>{title.toUpperCase()}</span>
    </div>
  );
}
