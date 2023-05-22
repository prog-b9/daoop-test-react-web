import React from "react";

const PositionedImage = ({
  src,
  width,
  height,
  alt,
  top,
  left,
  bottom,
  right,
  rotate,
}) => {
  return (
    <div
      className="position-absolute"
      style={{
        bottom: bottom,
        left: left,
        top: top,
        right: right,
        transform: `rotate(${rotate})`,
      }}
    >
      <img src={src} style={{ width: width, height: height }} alt={alt} />
    </div>
  );
};

export default PositionedImage;
