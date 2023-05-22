import React from "react";
import { Link } from "react-router-dom";

const NotificationItem = ({ title, subTitle, time, path }) => {
  return (
    <Link
      to={path}
      id="hover-btn-green-light"
      className="list-group-item list-group-item-action "
    >
      <div className="d-flex w-100 justify-content-between">
        <h5
          className="mb-1 fw-bold"
          style={{
            fontSize: "15px",
            color: "var(--primary-color)",
          }}
        >
          {title}
        </h5>
        <small className="fw-bold" style={{ fontSize: "11px" }}>
          {" "}
          {time}{" "}
        </small>
      </div>
      <p
        className="mb-1 text-dark text-opacity-50 text-end"
        style={{ fontSize: "12px" }}
      >
        {subTitle}{" "}
      </p>
    </Link>
  );
};

export default NotificationItem;
