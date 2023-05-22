/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ButtonLink from "../../duplicateComponents/ButtonLink";

const JoinRequestCard = ({ logo, title, path, imgLoad }) => {
  return (
    <div className="col-12 col-sm-6 col-xl-4">
      <div className="card rounded-3 border-0 style-shadow-small text-center">
        {logo === null ? null : (
          <div className=" d-flex justify-content-center p-3">
            <img
              src={logo}
              className="card-img-top"
              id="img-join-request-width"
              alt="logo"
            />
          </div>
        )}
        {imgLoad ? (
          <div className="d-flex justify-content-center p-3 placeholder-glow">
            <div
              className="placeholder"
              style={{
                width: "9rem",
                backgroundColor: "var(--primary-color-opacity)",
                height: "6rem",
              }}
              role="status"
            >
              <span className="visually-hidden">Loading Img...</span>
            </div>
          </div>
        ) : null}
        <h4
          className="card-title fs-5 px-4 py-1 bg-dange fw-bold"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h4>
        <div className="m-3">
          <ButtonLink title={"عرض التفاصيل"} path={path} />
        </div>
      </div>
    </div>
  );
};

export default JoinRequestCard;
