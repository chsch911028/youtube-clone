import React from "react";

const GuideItem = ({ item }) => {
  return (
    <div className="guide-item">
      <div className="guide-icon">
        <img
          className="guide-icon-img"
          alt="home-guide-icon"
          src={item.imgSrc}
        />
      </div>
      <div className="guide-text">{item.text}</div>
    </div>
  );
};

export default GuideItem;
