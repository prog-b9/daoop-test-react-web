import React from "react";
import PositionedImage from "./PositionedImage";
import Positioned from "./Positioned";

const StatusCard = ({ name, nameId, collageName, majorName, status, role }) => {
  return (
    <div
      className="p-3 rounded-4 mt-4 student-status-card-width m-auto d-flex justify-content-between flex-column position-relative"
      style={{ backgroundColor: "var(--primary-color)", zIndex: "1" }}
    >
      {/* positioned */}
      {status === null ? (
        null
      ) : status ? (
        <Positioned
          title={"مسجل"}
          bgColor={"var(--green-color)"}
          color={"#fff"}
          top={"-17px"}
          right={"20px"}
          fs={"13px"}
        />
      ) : (
        <Positioned
          title={"غير مسجل"}
          bgColor={"var(--red-color)"}
          color={"#fff"}
          top={"-17px"}
          right={"20px"}
          fs={"13px"}
        />
      )}

      {/* logo-tvtc-without-title */}
      <PositionedImage
        src={"../../images/logo-tvtc-without-title.png"}
        width={"70px"}
        height={"70px"}
        alt={"logo-tvtc-without-title"}
        top={""}
        left={""}
        bottom={"10px"}
        right={"20px"}
        rotate={"0"}
      />
      {/* triangle */}
      <PositionedImage
        src={"../../images/bg-triangle.png"}
        width={"60px"}
        height={"60px"}
        alt={"triangle"}
        top={"0"}
        left={"40px"}
        bottom={""}
        right={""}
        rotate={"180deg"}
      />

      {/* name and user-id */}
      <div>
        <div className="fw-bold text-white">{name}</div>
        <div
          className=" text-white text-opacity-50 mt-1"
          style={{ letterSpacing: "1px", fontSize: "14px" }}
        >
          {nameId}
        </div>
      </div>
      {/* collage name and major */}
      <div
        className="d-flex justify-content-between text-center "
        style={{ fontSize: "13px" }}
      >
        {/* empty becouse  justify-content-between*/}
        <div></div>
        <div>
          <div className="text-white">{collageName}</div>
          <div className="text-white">{majorName}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
