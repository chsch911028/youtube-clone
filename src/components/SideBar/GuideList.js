import React from "react";
import GuideItem from "./GuideItem";

import MoreIcon from "assets/images/more.svg";
import LessIcon from "assets/images/less.svg";
import GuideCollapsibleList from "./GuideCollapsibleList";

const GuideList = ({ guideTitle, baiscItemCount, items }) => {
  let renderedGuideTitle;
  if (guideTitle) {
    renderedGuideTitle = <div className="guide-title">{guideTitle}</div>;
  }

  let renderedGuideCollasibleList;
  baiscItemCount = Number(baiscItemCount);
  if (items.length > baiscItemCount) {
    let theOtherItems = items.splice(baiscItemCount);

    renderedGuideCollasibleList = (
      <GuideCollapsibleList items={theOtherItems} />
    );
  }

  const renderedGuideItems = items.map(item => {
    return <GuideItem key={item.title} item={item} />;
  });

  return (
    <div className="guide-list">
      {renderedGuideTitle}
      {renderedGuideItems}
      {renderedGuideCollasibleList}
    </div>
  );
};

export default GuideList;
