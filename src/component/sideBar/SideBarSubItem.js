import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBarSubItem = ({ title, path }) => {
  return (
    <MenuItem
      component={<Link to={path} />}
      icon={
        <div
          className=" rounded-circle d-flex align-items-center justify-content-center "
          style={{
            width: "15px",
            height: "15px",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={"../../../images/point.png"}
            style={{ width: "25px", height: "25px" }}
            alt="icon"
            className=""
          />
        </div>
      }
      className=" rounded-2 bg-white  justify-content-star"
    >
      <div
        className="fw-bold css-12w9als22 me-0"
        title={title}
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: "12px",
        }}
      >
        {title}
      </div>
    </MenuItem>
  );
};

export default SideBarSubItem;
