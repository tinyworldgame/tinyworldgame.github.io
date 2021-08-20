import React from "react";
import "./sectionTitle.css";

export default function SectionTitle(props) {
  const { title } = props;
  return <div className="center-bg section-title">{title.toUpperCase()}</div>;
}
