import React from "react";

const FormsContainer = ({ titleHead, item, reef }) => {
  return (
    <div
      ref={reef}
      className="card my-4 border-0 style-shadow-smal p-3 p-md-4 "
      style={{ borderRadius: "var(--radius)" }}
    >
      <div className=" d-flex justify-content-center">{titleHead} </div>
      <div className="card-body p-2">
        <div className="">{item}</div>
      </div>
    </div>
  );
};

export default FormsContainer;
