import React from "react";

const FollowUpTaskCard = ({ title, subTitle, isDone }) => {
  return (
    <div className="col-12 col-lg-6">
      <div
        className="card rounded-0 rounded-start style-shadow-small"
        style={{
          borderRight: "solid var(--primary-color)",
          borderWidth: "0 5px 0  0",
        }}
      >
        <div className="card-body ">
          <div className="d-flex justify-content-between style-Breadcrumbs-fs">
            <span className="fw-bold ">{title}</span>
            {isDone === null ? null : isDone ? (
              <span
                className="badge m-1  d-flex align-items-center justify-content-center rounded-pill "
                style={{
                  backgroundColor: "var(--green-opacity-color)",
                  color: "var(--green-color)",
                }}
              >
                تم تنفيذها
              </span>
            ) : (
              <span
                className="badge m-1  d-flex align-items-center justify-content-center rounded-pill "
                style={{
                  backgroundColor: "var(--red-opacity-color)",
                  color: "var(--red-color)",
                }}
              >
                لم يتم تنفيذها
              </span>
            )}
          </div>
          <p className="card-text text-dark text-opacity-75 lh-lg mt-2 style-thead-tbody-fs">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FollowUpTaskCard;
