import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoItem = ({ video }) => {
  const videoInfo = video.snippet;
  const videoId = video.id.videoId;
  const [viewCount, setViewCount] = useState("");

  const getViewCount = async videoId => {
    const response = await axios
      .create({ baseURL: "http://localhost:3000/videos" })
      .get(`/${videoId}`);

    /* Get Youtube Channel Data - Origin Method 
    const response = await axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3"
      })
      .get("/videos", {
        params: {
          part: "statistics",
          key: "AIzaSyD0WRa-w79Wbv3BaMGlYDWyaXD0ufJpKAE",
          id: videoId
        }
      });
    */

    setViewCount(response.data.statistics.viewCount);

    /* Migration: Youtube Video Data to My Json Server 
    setTimeout(() => {
      axios
        .create({
          baseURL: "http://localhost:3000"
        })
        .post(`/videos`, {
          id: videoId,
          statistics: response.data.items[0].statistics
        });
    }, 1000);
    */
  };

  useEffect(() => {
    if (videoId) {
      getViewCount(videoId);
    }
  }, []);

  return (
    <div className="video-item">
      <img
        className="video-item-img"
        src={videoInfo.thumbnails.medium.url}
        alt="video"
      />
      <div className="video-channel-title">{videoInfo.channelTitle}</div>
      <div className="video-item-title">{videoInfo.title}</div>
      <div className="video-item-view-count">{viewCount}</div>
      <div className="video-item-view-count">{videoInfo.publishedAt}</div>
    </div>
  );
};

export default VideoItem;
