import React from "react";
import GuideItem from "./GuideItem";

const GuideList = ({ items }) => {
  const renderedGuideItems = items.map(item => {
    return <GuideItem key={item.text} item={item} />;
  });
  return <div className="guid-list">{renderedGuideItems}</div>;
};

export default GuideList;
