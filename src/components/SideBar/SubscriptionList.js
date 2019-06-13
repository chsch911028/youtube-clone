import React, { useState } from "react";
import SubscriptionGuide from "./SubscriptionGuide";
import MoreIcon from "assets/images/more.svg";
import LessIcon from "assets/images/less.svg";

const SubscriptionList = ({ channelIds }) => {
  const [more, setMore] = useState(false);

  const renderedSubscriptionGuide = channelIds.map(channelId => {
    return <SubscriptionGuide key={channelId} channelId={channelId} />;
  });

  const onClickHandler = e => {
    setMore(!more);
  };

  let moreAndLess;

  if (channelIds.length > 7) {
    moreAndLess = (
      <SubscriptionGuide
        type="more"
        imgSrc={MoreIcon}
        onClickHandler={onClickHandler}
      />
    );
  }

  return (
    <div className="subscription-list">
      <div className="subscription-text">구독</div>
      {renderedSubscriptionGuide}
      {moreAndLess}
    </div>
  );
};

export default SubscriptionList;
