import React, { useState, useEffect } from "react";
import axios from "axios";

const SubscriptionGuide = ({ type, imgSrc, channelId, onClickHandler }) => {
  const [channelInfo, setChannelInfo] = useState({});

  const getChannelInfo = async channelId => {
    const response = await axios
      .create({ baseURL: "http://localhost:3000/channels" })
      .get(`${channelId}`);

    setChannelInfo({
      thumbnails: response.data.thumbnails,
      title: response.data.title
    });

    /* Get Youtube Channels Data - Origin Method 
    const response = await axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3"
      })
      .get("/channels", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: "AIzaSyD0WRa-w79Wbv3BaMGlYDWyaXD0ufJpKAE",
          id: channelId
        }
      });
    */
    /* Migration: Youtube Channel Data to My Json Server 
    setTimeout(() => {
      axios
        .create({
          baseURL: "http://localhost:3000/channels"
        })
        .patch(`/${channelId}`, {
          title: response.data.items[0].snippet.title
        });
    }, 1000);
    */
  };

  useEffect(() => {
    getChannelInfo(channelId);
  }, []);

  if (type === "more") {
    return (
      <div className="subscription-guide" onClick={onClickHandler}>
        <div className="subscription-guide-icon">
          <img
            className="subscription-guide-img"
            alt="subscription guide img"
            src={imgSrc}
          />
        </div>
        <div className="subscription-guide-text">더보기</div>
      </div>
    );
  }

  if (type === "less") {
    return (
      <div className="subscription-guide" onClic={onClickHandler}>
        <div className="subscription-guide-icon">
          <img
            className="subscription-guide-img"
            alt="subscription guide img"
            src={imgSrc}
          />
        </div>
        <div className="subscription-guide-text">간략히보기</div>
      </div>
    );
  }

  if (!channelInfo.title) {
    return <div />;
  }

  return (
    <div className="subscription-guide">
      <div className="subscription-guide-icon">
        <img
          className="subscription-guide-img"
          alt="subscription guide img"
          src={channelInfo.thumbnails.medium.url}
        />
      </div>
      <div className="subscription-guide-text">{channelInfo.title}</div>
    </div>
  );
};

export default SubscriptionGuide;
