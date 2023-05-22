import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TemplateCircle = ({ value, circleWidth, w, h, p, fs, text }) => {
  return (
    <CircularProgressbar
      value={value}
      strokeWidth={circleWidth}
      styles={{
        root: {
          // backgroundColor: "#f00",
          width: w,
          height: h,
          padding: p,
        },
        path: {
          stroke: "var(--primary-color)",
        },
        trail: {
          // Trail color
          stroke: "var(--black-color-opacity)",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",
          // Rotate the trail
          transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        text: {
          // Text color
          fill: "var(--primary-color)",
          fontWeight: "bold",
          // Text size
          fontSize: fs,
        },
      }}
      text={`${text}${value}`}
    />
  );
};

export default TemplateCircle;
