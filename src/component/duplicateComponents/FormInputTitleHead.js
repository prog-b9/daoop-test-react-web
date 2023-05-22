import React from "react";

const FormInputTitleHead = ({ title,textAlign}) => {
  return (
    <div
      className={`fw-bold my-4 text-${textAlign} style-title-head`}
      style={{ color: "var(--primary-color)" }}
    >
      {title}
    </div>
  );
};

export default FormInputTitleHead;
