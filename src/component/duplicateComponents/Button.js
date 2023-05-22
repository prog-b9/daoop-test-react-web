import React from "react";
// import { Link } from "react-router-dom";

const Button = ({
  title,
  dataBsToggle,
  dataBsTarget,
  dataBsDismiss,
  type,
  onclick,
  width,
  disabled,
  fs
}) => {
  return (
    <div className="d-flex justify-content-center " style={{ width: width }}>
      <button
        disabled={disabled}
        type={type}
        className="btn fw-bold text-white text-center w-100 border-0 p-2 "
        id="primary-hover"
        data-bs-toggle={dataBsToggle}
        data-bs-target={dataBsTarget}
        data-bs-dismiss={dataBsDismiss}
        onClick={onclick}
        style={{fontSize:fs}}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
