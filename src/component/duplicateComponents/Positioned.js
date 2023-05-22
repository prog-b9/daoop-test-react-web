import React from "react";

const Positioned = ({
  title,
  color,
  bgColor,
  top,
  right,
  left,
  bottom,
  fs,
  z,
}) => {
  return (
    <div
      className="position-absolute fw-bold p-1 px-2 rounded-5"
      style={{
        right: right,
        top: top,
        left: left,
        bottom: bottom,
        color: color,
        backgroundColor: bgColor,
        fontSize: fs,
        zIndex: z,
      }}
    >
      {title}
    </div>
  );
};

export default Positioned;
