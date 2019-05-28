import React from "react";
import MenuIcon from "assets/images/menu.svg";
import LogoIcon from "assets/images/logo.svg";

import VideoIcon from "assets/images/video.svg";
import CategoryIcon from "assets/images/category.svg";
import ShareIcon from "assets/images/share.svg";
import NotificationIcon from "assets/images/notification.svg";
import MeIcon from "assets/images/me.svg";

import BasicIcon from "./BasicIcon";
import IconList from "./IconList";
import SearchForm from "./SearchForm";

const NavBar = () => {
  const icons = [
    { name: "video", imgSrc: VideoIcon },
    { name: "category", imgSrc: CategoryIcon },
    { name: "share", imgSrc: ShareIcon },
    { name: "notification", imgSrc: NotificationIcon },
    { name: "me", imgSrc: MeIcon }
  ];

  return (
    <div className="nav-bar">
      <BasicIcon name="menu" imgSrc={MenuIcon} />
      <BasicIcon name="logo" imgSrc={LogoIcon} />
      <SearchForm />
      <IconList icons={icons} />
    </div>
  );
};

export default NavBar;
