import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map(video => {
    console.log(video.id.videoId);
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return <div className="video-list">{renderedVideos}</div>;
};

export default VideoList;
