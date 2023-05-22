import React from "react";

const LoadingPlaceholderItem = ({ col, bgColor, styleBgColor, isSize }) => {
  return (
    <>
      {isSize === "lg" ? (
        <span
          className={`placeholder  ${col} bg-${bgColor}  rounded-1`}
          style={{ backgroundColor: styleBgColor }}
        ></span>
      ) : isSize === "sm" ? (
        <span
          className={`placeholder  placeholder-sm ${col} bg-${bgColor}  rounded-1`}
          style={{ backgroundColor: styleBgColor }}
        ></span>
      ) : null}
    </>
  );
};

export default LoadingPlaceholderItem;
