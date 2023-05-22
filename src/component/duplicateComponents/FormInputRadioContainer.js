import React from "react";
import { Link } from "react-router-dom";

const FormInputRadioContainer = ({ title, item, note, path }) => {
  return (
    <div className="">
      <div className="fw-bold">{title}</div>
      <div className=" p-1 px-2">{item}</div>
      <div
        className=" p-1 me-3 text-dark text-opacity-50"
        style={{ fontSize: "11px" }}
      >
        {note}
        <Link
          to={path}
          className="fw-bold mx-1"
          style={{
            color: "var(--primary-color)",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          هنا
        </Link>
      </div>
    </div>
  );
};

export default FormInputRadioContainer;
