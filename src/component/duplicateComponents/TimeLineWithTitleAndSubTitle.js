import React from "react";

const TimeLineWithTitleAndSubTitle = ({
  title,
  subTitle,
  whatColor,
  color,
  fw,
}) => {
  return whatColor === "lightGreen" ? (
    <div className="poll-container-item style-Breadcrumbs-fs">
      <div className="poll-container-item-title  ">{title}</div>
      <div className="poll-container-item-sub-title text-white text-opacity-75">
        {subTitle}
      </div>
    </div>
  ) : whatColor === "darkGreen" ? (
    <div className="poll-container-item">
      <div
        className=" poll-container-item-title-dark "
        style={{ color: "var(--primary-color)" }}
      >
        {title}
      </div>
      <div
        className={`poll-container-item-sub-title text-dark text-opacity-75 ${fw}`}
      >
        {subTitle}
      </div>
    </div>
  ) : null;
};

export default TimeLineWithTitleAndSubTitle;
