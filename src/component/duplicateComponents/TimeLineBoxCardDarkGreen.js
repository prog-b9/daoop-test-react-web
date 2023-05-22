import React from "react";
import PositionedImage from "./PositionedImage";

const TimeLineBoxCardDarkGreen = ({ titleHeader, item, fs }) => {
  return (
    <div
      className=" py-4 mt-4 style-shadow-small position-relative "
      style={{
        backgroundColor: "var(--primary-color)",
        borderRadius: "var(--radius)",
      }}
    >
      {/* top left triangle*/}
      <PositionedImage
        src={"../../images/bg-triangle.png"}
        width={"60px"}
        height={"60px"}
        alt={"triangle"}
        top={"20px"}
        left={"0"}
        bottom={""}
        right={""}
        rotate={"90deg"}
      />
      {/* bottom left triangle*/}
      <PositionedImage
        src={"../../images/bg-triangle.png"}
        width={"60px"}
        height={"60px"}
        alt={"triangle"}
        top={""}
        left={"40px"}
        bottom={"0"}
        right={""}
        rotate={"0"}
      />
      {/* top right logo-tvtc-without-title*/}
      <PositionedImage
        src={"../../images/logo-tvtc-without-title.png"}
        width={"70px"}
        height={"70px"}
        alt={"triangle"}
        top={"7px"}
        left={""}
        bottom={""}
        right={"50px"}
        rotate={""}
      />

      <div
        className={`fw-bold text-center px-3 text-white style-title-head`}
        // style={{ fontSize: fs }}
      >
        {titleHeader}
      </div>
      <div className=" p-3 poll-container">{item}</div>
    </div>
  );
};

export default TimeLineBoxCardDarkGreen;
