import React from "react";

const FollowUpTaskCardImplement = ({ title, isShowCheckBox }) => {
  return (
    <div
      className="card rounded-0 rounded-start style-shadow-small"
      style={{
        borderRight: "solid var(--primary-color)",
        borderWidth: "0 5px 0  0",
      }}
    >
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          {/* <span className="p-2 rounded text-white mx-2" style={{backgroundColor:"var(--primary-color)"}}>1</span> */}
          <span className="fw-bold style-Breadcrumbs-fs">{title}</span>
        </div>

        {isShowCheckBox ? (
          <span className="">
            <div className="form-check d-flex justify-content-center align-items-center mb-1">
              <input
                className="form-check-input border shadow-none"
                type="checkbox"
                value=""
              />
            </div>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default FollowUpTaskCardImplement;
