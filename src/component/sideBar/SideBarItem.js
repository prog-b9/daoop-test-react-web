import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";

const SideBarItem = ({ title, icon, path }) => {
  return (
    <MenuItem
      component={<Link to={path} />}
      icon={
        <div className="mx-1 p-2 d-flex justify-content-center ms-0 ms-sm-4 align-items-center css-6a03ny22 sidebar-menu-item sidebar-icon">
          <img
            src={icon}
            style={{ width: "30px", height: "30px" }}
            alt="icon"
          />{" "}
        </div>
      }
      className=" rounded-2 my-1 "
    >
      <div
        className="fw-bold mx-1 css-12w9als22"
        title={title}
        style={{ fontSize: "15px" }}
      >
        {title}
      </div>
    </MenuItem>
  );
};

export default SideBarItem;
