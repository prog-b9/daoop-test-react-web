import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ title, path }) => {
  return (
    <div className="d-flex justify-content-center">
      <Link
        to={path}
        className="btn fw-bold text-white text-center w-100 border-0 p-2"
        id="primary-hover"
      >
        {title}
      </Link>
    </div>
  );
};

export default ButtonLink;
