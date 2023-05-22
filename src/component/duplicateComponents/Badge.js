import React from "react";

const Badge = ({ title, bgColor, color }) => {
  return (
    <span
      className="badge px-3 py-2 m-1  d-flex align-items-center justify-content-center rounded-pill "
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      {title}
    </span>
  );
};

export default Badge;
