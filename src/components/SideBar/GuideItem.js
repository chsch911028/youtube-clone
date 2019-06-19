import React from "react";

const GuideItem = ({ item, onClickHanlder }) => {
  return (
    <div className="guide-item" onClick={onClickHanlder}>
      <div className="guide-icon">
        <img
          className="guide-icon-img"
          alt="home-guide-icon"
          src={item.imgSrc}
        />
      </div>
      <div className="guide-text">{item.title}</div>
    </div>
  );
};

export default GuideItem;
