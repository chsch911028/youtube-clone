import React from "react";
// import youtube from "apis/youtube";
import Content from "./Content";

const Main = props => {
  const channelList = [
    "UCZHBZUrLKMoL6FxpvdRzhKA",
    "UC2ja61Zku_rw3ZBfDZi8cuQ",
    "UCFCtZJTuJhE18k8IXwmXTYQ",
    "UCLvhr40dgoBcV4XBlOhauNw",
    "UCNymqCXr3sxL8dnmO_jScuA"
  ];

  /*
      "UCFOixeB9gbedVi6uwnsfHMQ",
    "UCMVC92EOs9yDJG5JS-CMesQ",
    "UCaJdckl6MBdDPDf75Ec_bJA",
    "UCzVxelIsmKDrNQTUHpzokQg",
    "UCcWOqKgGR8rmNHsb2P6PGgQ"
  */

  const renderedContents = channelList.map(channelId => {
    return <Content key={channelId} channelId={channelId} />;
  });

  return <div className="main">{renderedContents}</div>;
};

export default Main;
