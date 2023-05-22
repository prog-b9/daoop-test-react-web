import React from "react";

const FormInputTextArea = ({
  label,
  placeholder,
  idAndfor,
  isValid,
  msgValid,
  onChange,
  value,
}) => {
  return (
    <div className="">
      <label
        htmlFor={idAndfor}
        className="form-label fw-bold "
        style={{ fontSize: "14px" }}
      >
        {label}
      </label>
      <textarea
        className="form-control shadow-none p-2 style-scroll-radius"
        style={{ backgroundColor: "#f9f9f9" }}
        id={idAndfor}
        onChange={onChange}
        value={value}
        // value="Mark"
        placeholder={placeholder}
        required
      ></textarea>
      <div className={`${isValid}-feedback`}>{msgValid}</div>
    </div>
  );
};

export default FormInputTextArea;
