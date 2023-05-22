import React from "react";
import { SubMenu } from "react-pro-sidebar";

const SideBarItemWithSubItem = ({ title, icon, item }) => {
  return (
    <SubMenu
      className="my-1 bg-white"
      label={
        <div
          title={title}
          className="fw-bold mx-1 css-12w9als22"
          style={{ fontSize: "15px" }}
        >
          {title}
        </div>
      }
      icon={
        <div className="mx-1 p-2 d-flex justify-content-center ms-0 ms-sm-4 align-items-center css-6a03ny22 sidebar-icon">
          <img
            src={icon}
            style={{ width: "30px", height: "30px" }}
            alt="icon"
          />{" "}
        </div>
      }
    >
      <div> {item}</div>
    </SubMenu>
  );
};

export default SideBarItemWithSubItem;
