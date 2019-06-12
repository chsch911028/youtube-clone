import React from "react";

const BasicIcon = ({ name, imgSrc }) => {
  return (
    <button className={`basic-icon-button ${name}-icon-button`}>
      <img
        className={`basic-icon-img ${name}-icon-img`}
        src={imgSrc}
        alt="basci-icon"
      />
    </button>
  );
};

export default BasicIcon;
