import React, { useState, useEffect } from "react";
import GuideList from "./GuideList";

import HomeGuideIcon from "assets/images/home.svg";
import HotGuideIcon from "assets/images/hot.svg";
import SubscribeGuideIcon from "assets/images/subscribe.svg";

import LibraryGuideIcon from "assets/images/library.svg";
import RecentWatchGuideIcon from "assets/images/recent-watch-videos.svg";
import ToWatchGuideIcon from "assets/images/to-watch-videos.svg";
import TopPlaylistGuideIcon from "assets/images/top-playlist.svg";
import LikedVideosGuideIcon from "assets/images/like.svg";

//apis
import getSubscriptions from "apis/youtube/getSubscriptions";

const SideBar = props => {
  const mainGuidItems = [
    { title: "홈", imgSrc: HomeGuideIcon },
    { title: "인기", imgSrc: HotGuideIcon },
    { title: "구독", imgSrc: SubscribeGuideIcon }
  ];

  const subGuidItems = [
    { title: "라이브러리", imgSrc: LibraryGuideIcon },
    { title: "최근 본 동영상", imgSrc: RecentWatchGuideIcon },
    { title: "나중에 볼 동영상", imgSrc: ToWatchGuideIcon },
    {
      title:
        "Top 50 This Weeks & Top 100 Songs 2019(Best New Music Hits Playlist)",
      imgSrc: TopPlaylistGuideIcon
    },
    { title: "좋아요 표시한 동영상", imgSrc: LikedVideosGuideIcon }
  ];

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    getSubscriptions().then(response => {
      console.log(response.data);
      const data = response.data.map(item => {
        return {
          title: item.snippet.title,
          imgSrc: item.snippet.thumbnails.medium.url
        };
      });

      setSubscriptions(data);
    });
  }, []);

  return (
    <div className="side-bar">
      <GuideList items={mainGuidItems} />
      <GuideList items={subGuidItems} />
      <GuideList items={subscriptions} />
    </div>
  );
};

export default SideBar;
