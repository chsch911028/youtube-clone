import React, { Fragment, useState } from "react";

import MoreIcon from "assets/images/more.svg";
import LessIcon from "assets/images/less.svg";
import GuideItem from "./GuideItem";

const GuideCollapsibleList = ({ items }) => {
  const [show, setShow] = useState(false);

  const onClickHanlder = () => {
    setShow(!show);
  };

  const moreItem = { title: `${items.length}개 더보기`, imgSrc: MoreIcon };
  const lessItem = { title: `간략히 보기`, imgSrc: LessIcon };

  const renderedGuideItems = items.map(item => {
    return <GuideItem key={item.title} item={item} />;
  });

  renderedGuideItems.push(
    <GuideItem
      key={lessItem.title}
      item={lessItem}
      onClickHanlder={onClickHanlder}
    />
  );

  return (
    <Fragment>
      {show ? (
        renderedGuideItems
      ) : (
        <GuideItem
          key={moreItem.title}
          item={moreItem}
          onClickHanlder={onClickHanlder}
        />
      )}
    </Fragment>
  );
};

export default GuideCollapsibleList;
