import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map(video => {
    return <VideoItem key={video.etag} video={video} />;
  });

  return <div className="video-list">{renderedVideos}</div>;
};

export default VideoList;
