import React from "react";
import PositionedImage from "./PositionedImage";

const TimeLineBoxCardLightGreen = ({ titleHeader, item, fs }) => {
  return (
    <div
      className=" py-4 mt-4 style-shadow-small position-relative"
      style={{
        backgroundColor: "var(--green-light-color)",
        borderRadius: "var(--radius)",
      }}
    >
      {/* top left triangle*/}
      <PositionedImage
        src={"../../images/bg-triangle-dark-green.png"}
        width={"60px"}
        height={"60px"}
        alt={"triangle"}
        top={"20px"}
        left={"0"}
        bottom={""}
        right={""}
        rotate={"0"}
      />
      {/* bottom left triangle*/}
      <PositionedImage
        src={"../../images/bg-triangle-dark-green.png"}
        width={"60px"}
        height={"60px"}
        alt={"triangle"}
        top={""}
        left={"40px"}
        bottom={"0"}
        right={""}
        rotate={"270deg"}
      />
      {/* top right logo-tvtc-without-title*/}
      <PositionedImage
        src={"../../images/logo-tvtc-without-title-dark.png"}
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
        className={`fw-bold text-center  text-dark style-title-head`}
        // style={{ fontSize: fs }}
      >
        {titleHeader}
      </div>
      <div className=" p-3 poll-container">{item}</div>
    </div>
  );
};

export default TimeLineBoxCardLightGreen;
