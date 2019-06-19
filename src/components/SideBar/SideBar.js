import React, { useState, useEffect } from "react";
import GuideList from "./GuideList";

//Main
import HomeGuideIcon from "assets/images/home.svg";
import HotGuideIcon from "assets/images/hot.svg";
import SubscribeGuideIcon from "assets/images/subscribe.svg";

//Sub
import LibraryGuideIcon from "assets/images/library.svg";
import RecentWatchGuideIcon from "assets/images/recent-watch-videos.svg";
import ToWatchGuideIcon from "assets/images/to-watch-videos.svg";
import TopPlaylistGuideIcon from "assets/images/top-playlist.svg";
import LikedVideosGuideIcon from "assets/images/like.svg";

//Subscription
import getSubscriptions from "apis/youtube/getSubscriptions";

//Youtube More
import youtubePremiumIcon from "assets/images/youtube-premium.svg";
import youtubeMovieIcon from "assets/images/youtube-movie.svg";
import youtubeGameIcon from "assets/images/youtube-game.svg";
import youtubeLiveIcon from "assets/images/youtube-live.svg";

//Youtube
import youtubeSettingIcon from "assets/images/youtube-setting.svg";
import youtubeReportIcon from "assets/images/youtube-report.svg";
import youtubeCustomerCenterIcon from "assets/images/youtube-customer-center.svg";
import youtubeSendingOpinionIcon from "assets/images/youtube-sending-opinion.svg";

const SideBar = props => {
  const mainGuides = [
    { title: "홈", imgSrc: HomeGuideIcon },
    { title: "인기", imgSrc: HotGuideIcon },
    { title: "구독", imgSrc: SubscribeGuideIcon }
  ];

  const subGuides = [
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
      const data = response.data.map(item => {
        return {
          title: item.snippet.title,
          imgSrc: item.snippet.thumbnails.medium.url
        };
      });

      setSubscriptions(data);
    });
  }, []);

  const youtubeMoreGuides = [
    { title: "YouTube Premium", imgSrc: youtubePremiumIcon },
    { title: "YouTube 영화", imgSrc: youtubeMovieIcon },
    { title: "게임", imgSrc: youtubeGameIcon },
    { title: "실시간", imgSrc: youtubeLiveIcon }
  ];

  const youtubeThirdGuides = [
    { title: "설정", imgSrc: youtubeSettingIcon },
    { title: "신고 기록", imgSrc: youtubeReportIcon },
    { title: "고객센터", imgSrc: youtubeCustomerCenterIcon },
    { title: "의견 보내기", imgSrc: youtubeSendingOpinionIcon }
  ];

  return (
    <div className="side-bar">
      <GuideList items={mainGuides} />
      <GuideList items={subGuides} />
      <GuideList guideTitle="구독" baiscItemCount="7" items={subscriptions} />
      <GuideList guideTitle="YOUTUBE 더보기" items={youtubeMoreGuides} />
      <GuideList items={youtubeThirdGuides} />
    </div>
  );
};

export default SideBar;
