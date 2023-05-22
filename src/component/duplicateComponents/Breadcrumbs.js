import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = ({ main, element, mainPath }) => {
  return (
    <div className="container px-3 px-md-5 mt-3">
      <div className="fw-bold style-Breadcrumbs-fs">
        <span>
          <Link
            to={mainPath}
            style={{ color: "var(--primary-color)", textDecoration: "none" }}
          >
            {main}
          </Link>
        </span>

        {element.map((item, i) => (
          <span key={i}>
            {/* <span> */}{" "}
            {/* <img
                src="../../../images/left-arrow.png"
                style={{ width: "13px" }}
                alt="left-arrow"
                className="mx-1"
              />{" "} */}
            <FontAwesomeIcon
              className="mx-1"
              style={{ fontSize: "14px", transform: "translateY(1px)" }}
              icon={faAngleLeft}
            />
            {/* </span> */}
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
