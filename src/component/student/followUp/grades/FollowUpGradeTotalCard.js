import React from "react";
import LoadingPlaceholderItem from "../../../duplicateComponents/LoadingPlaceholderItem";

const FollowUpGradeTotalCard = ({ grade, percent }) => {
  return (
    <div
      className="card fw-bold"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="card-header border-0 fs-5 text-white">المجموع</div>
      <div className="card-body">
        <h5 className="card-title fw-bold">
          {/* grade from 100 */}
          <div className="text-white d-flex ">
            {grade === null ? <span className="text-white">-</span> : grade} /
            100
          </div>
          <div
            className="my-2 bg-white d-flex align-items-center justify-content-center p-1 rounded-circle d-inline-block"
            style={{ width: "60px", height: "60px" }}
          >
            {!isNaN(grade) ? (grade * 100) / grade + "%" : "-"}
          </div>
        </h5>
        {percent === null ? (
          <LoadingPlaceholderItem
            isSize={"sm"}
            col={"col-12"}
            styleBgColor={"var(--green-light-color)"}
          />
        ) : (
          <div
            className="progress mt-3 rounded-5 bg-light bg-opacity-25"
            style={{
              height: "7px",
              backgroundColor: "var(--green-light-color)",
            }}
          >
            <div
              className="progress-bar bg-white"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: `${isNaN(percent) ? 0 : percent}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowUpGradeTotalCard;
