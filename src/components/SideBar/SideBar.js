import React from "react";
import GuideList from "./GuideList";

import HomeGuideIcon from "assets/images/home.svg";
import HotGuideIcon from "assets/images/hot.svg";
import SubscribeGuideIcon from "assets/images/subscribe.svg";

import LibraryGuideIcon from "assets/images/library.svg";
import RecentWatchGuideIcon from "assets/images/recent-watch-videos.svg";
import ToWatchGuideIcon from "assets/images/to-watch-videos.svg";
import TopPlaylistGuideIcon from "assets/images/top-playlist.svg";
import LikedVideosGuideIcon from "assets/images/like.svg";
import SubscriptionList from "./SubscriptionList";

const SideBar = props => {
  const mainGuidItems = [
    { text: "홈", imgSrc: HomeGuideIcon },
    { text: "인기", imgSrc: HotGuideIcon },
    { text: "구독", imgSrc: SubscribeGuideIcon }
  ];

  const subGuidItems = [
    { text: "라이브러리", imgSrc: LibraryGuideIcon },
    { text: "최근 본 동영상", imgSrc: RecentWatchGuideIcon },
    { text: "나중에 볼 동영상", imgSrc: ToWatchGuideIcon },
    {
      text:
        "Top 50 This Weeks & Top 100 Songs 2019(Best New Music Hits Playlist)",
      imgSrc: TopPlaylistGuideIcon
    },
    { text: "좋아요 표시한 동영상", imgSrc: LikedVideosGuideIcon }
  ];

  const channelIds = [
    "UCZHBZUrLKMoL6FxpvdRzhKA",
    "UC2ja61Zku_rw3ZBfDZi8cuQ",
    "UCFCtZJTuJhE18k8IXwmXTYQ",
    "UCLvhr40dgoBcV4XBlOhauNw",
    "UCNymqCXr3sxL8dnmO_jScuA",
    "UCFOixeB9gbedVi6uwnsfHMQ",
    "UCMVC92EOs9yDJG5JS-CMesQ",
    "UCaJdckl6MBdDPDf75Ec_bJA",
    "UCzVxelIsmKDrNQTUHpzokQg",
    "UCcWOqKgGR8rmNHsb2P6PGgQ"
  ];

  return (
    <div className="side-bar">
      <GuideList items={mainGuidItems} />
      <GuideList items={subGuidItems} />
      <SubscriptionList channelIds={channelIds} />
    </div>
  );
};

export default SideBar;
