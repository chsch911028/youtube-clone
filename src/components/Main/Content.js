import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "./VideoList";

const Content = ({ channelId }) => {
  const [videos, setVideos] = useState([]);

  const getVideos = async channelId => {
    console.log(channelId);
    const response = await axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3"
      })
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 10,
          order: "date",
          key: "AIzaSyD0WRa-w79Wbv3BaMGlYDWyaXD0ufJpKAE",
          channelId: channelId
        }
      });

    setVideos(response.data.items);
    //response.data.nextPageToken
  };

  useEffect(() => {
    getVideos(channelId);
  }, []);

  if (videos.length === 0) {
    return <div />;
  }

  return (
    <div className="content">
      <div className="content-title">{videos[0].snippet.channelTitle}</div>
      <VideoList key={videos[0].snippet.channelTitle} videos={videos} />
    </div>
  );
};

export default Content;
