import React from "react";
import Badge from "../../duplicateComponents/Badge";

const StudentStatusDesiresItem = ({ title, isStatus, index }) => {
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
          <span
            className="p-2 rounded text-white mx-2 ms-5"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            {index}
          </span>
          <span className="style-Breadcrumbs-fs fw-bold">{title}</span>
        </div>

        {isStatus === null ? null : isStatus === 0 ? (
          <Badge
            title={"تم الرفض"}
            bgColor={"var(--red-opacity-color)"}
            color={"var(--red-color)"}
          />
        ) : null}

        {isStatus === null ? null : isStatus === 1 ? (
          <Badge
            title={"تم قبولك"}
            bgColor={"var(--green-opacity-color)"}
            color={"var(--green-color)"}
          />
        ) : null}

        {isStatus === null ? null : isStatus === 2 ? (
          <Badge
            title={"قيد الانتظار"}
            bgColor={"var(--yellow-opacity-color)"}
            color={"var(--yellow-color)"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default StudentStatusDesiresItem;
