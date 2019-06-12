import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "./VideoList";

const Content = ({ channelId }) => {
  const [videos, setVideos] = useState([]);

  const getVideos = async channelId => {
    /* Get Json-Server Youtube Channel Data - Temporary Method */

    const response = await axios
      .create({ baseURL: "http://localhost:3000/channels" })
      .get(`/${channelId}`);

    /* Get Youtube Video Data - Origin Method 
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
    */

    setVideos(response.data.data.items);

    /* Migration: Youtube Channel Data to My Json Server 
    axios
      .create({
        baseURL: "http://localhost:3000/channels"
      })
      .put(`/${channelId}`, { id: `${channelId}`, data: response.data });
    */
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
      <VideoList videos={videos} />
    </div>
  );
};

export default Content;
