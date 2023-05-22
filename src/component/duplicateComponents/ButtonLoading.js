import React from "react";

const ButtonLoading = ({ title, width }) => {
  return (
    <div className="">
      <button
        className="btn text-white"
        style={{ backgroundColor: "var(--primary-color)", width: width }}
        type="button"
        disabled
      >
        <div
          className="spinner-border mx-2 text-white fw-bold spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></div>
        {title}
      </button>
    </div>
  );
};

export default ButtonLoading;
