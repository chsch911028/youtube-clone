import React, { useEffect, useState } from "react";
import getChannel from "apis/youtube/getChannel";
import VideoList from "./VideoList";

const Content = ({ channelId }) => {
  const [videos, setVideos] = useState([]);

  const setChannel = channelId => {
    getChannel(channelId).then(response => {
      setVideos(response.data.data.items);
    });
  };

  useEffect(() => {
    setChannel(channelId);
  }, []);

  if (videos.length === 0) {
    return <div />;
  }

  return (
    <div className="content">
      <div className="content-title">{videos[0].snippet.channelTitle}</div>
      <VideoList videos={videos} />
    </div>
  );
};

export default Content;
