import React from "react";
import BasicIcon from "./BasicIcon";

const IconList = ({ icons }) => {
  const renderedIcons = icons.map(icon => {
    return <BasicIcon name={icon.name} imgSrc={icon.imgSrc} />;
  });

  return <div className="icon-list">{renderedIcons}</div>;
};

export default IconList;
