import React from "react";

const FormInput = ({
  type,
  label,
  placeholder,
  idAndfor,
  isValid,
  msgError,
  name,
  onChange,
  value,
  isShowIcon,
  icon,
  isLabel,
  bgColor,
  shadow,
  readOnly,
}) => {
  return (
    <div className="position-relative">
      {isLabel === null ? null : (
        <label
          htmlFor={idAndfor}
          className="form-label fw-bold "
          style={{ fontSize: "14px" }}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        className={`form-control ${shadow}`}
        style={{
          backgroundColor: "#f9f9f9",
          padding: "10px",
          paddingRight: isShowIcon ? "30px" : "10xp",
        }}
        autoComplete="off"
        id={idAndfor}
        onChange={onChange}
        value={value}
        // value="Mark"
        placeholder={placeholder}
        required
        readOnly={readOnly}
      />
      {isShowIcon ? (
        <div
          className="position-absolute"
          style={{ bottom: "13px", right: "10px" }}
        >
          {icon}
        </div>
      ) : null}
      <div
        className={`${isValid}-feedbacke position-absolute text-danger fw-bold me-1 mt-1`}
        style={{ fontSize: "12px" }}
      >
        {msgError}
      </div>
    </div>
  );
};

export default FormInput;
