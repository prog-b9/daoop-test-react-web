import React from "react";

const FormInputRadio = ({ label, name, idAndFor, onChange }) => {
  return (
    <div className="">
      <input
        className="form-check-input shadow-none"
        type="radio"
        name={name}
        id={idAndFor}
        // onChange={() => console.log(onChange)}
      />
      <label
        className="form-check-label mx-2"
        style={{ fontSize: "14px" }}
        htmlFor={idAndFor}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInputRadio;
