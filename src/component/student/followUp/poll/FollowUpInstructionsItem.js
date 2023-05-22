import React from "react";

const FollowUpInstructionsItem = ({ title, subTitle }) => {
  return (
    <div className="poll-container-item">
      <div className="poll-container-item-title">{title}</div>
      <div className="poll-container-item-sub-title text-white text-opacity-75">
        {subTitle}
      </div>
    </div>
  );
};

export default FollowUpInstructionsItem;
