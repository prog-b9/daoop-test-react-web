/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import SideBarContainer from "../../sideBar/student/SideBarContainer";
import NotificationItem from "../../duplicateComponents/NotificationItem";

import LoadingPlaceholderItem from "../../duplicateComponents/LoadingPlaceholderItem";
import HeaderStudentLogic from "../../../logic/student/header/HeaderStudentLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const HeaderStudent = () => {
  const [myDataStudent, loading, accountItem, dataNotification, activesMenu] =
    HeaderStudentLogic();

  // if (myDataStudent) {
  // console.log(loading);
  // }

  return (
    <nav
      className="navbar navbar-expand-md px-3  style-shadow-large"
      style={{ backgroundColor: "var(--primary-color)", zIndex: "10000" }}
    >
      <div className="container d-flex p-0  justify-content-end">
        {/* <div className="bg-white p-1 m-1 rounded-2">
          <img
            src="../../images/icon-add-notification.png"
            style={{ width: "35px", height: "35px" }}
            alt=""
          />
        </div> */}
        <div className="dropdown ">
          <button
            className="btn bg-white p-1 px-2 m-1 rounded-2 border-0 d-flex align-items-center justify-content-center position-relative"
            // style={{ fontSize: "35px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {dataNotification.length}
              <span className="visually-hidden">unread messages</span>
            </span>
            {/* <ion-icon
              name="notifications"
              style={{ fontSize: "35px", color: "var(--primary-color)" }}
            ></ion-icon>{" "} */}
            <FontAwesomeIcon
              icon={faBell}
              color="var(--primary-color)"
              style={{ fontSize: "35px" }}
            />
          </button>
          <div
            className="dropdown-menu text-center  p-0 style-shadow-small  border-0"
            style={{ width: "200px" }}
          >
            <div
              className="list-group style-sidebar-scroll-radius"
              style={{
                height: "200px",
                backgroundColor: "var(--green-light-color)",
              }}
            >
              {dataNotification.length === 0 ? (
                <div className=" mt-5 d-flex align-items-center  justify-content-center">
                  <span className="mx-1 text-dark text-opacity-75 fw-bold">
                    {" "}
                    لاتوجد اشعارات
                  </span>
                  <ion-icon name="notifications-off"></ion-icon>
                </div>
              ) : (
                dataNotification.map((item, i) => (
                  <NotificationItem
                    key={i}
                    title={item.title}
                    subTitle={item.subTitle}
                    time={item.time}
                    path={item.path}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div className="dropdown ">
          <button
            className="btn bg-white p-1 px-2 m-1 rounded-2 border-0 d-flex align-items-center justify-content-center"
            style={{ fontSize: "35px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <ion-icon name="person-circle"></ion-icon> */}
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
          <ul className="dropdown-menu bg-white text-center p-2 style-shadow-small border-0">
            {accountItem.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="rounded-2 my-1 d-flex"
                style={{
                  backgroundColor: "var(--bg-body)",
                  fontSize: "30px",
                  textDecoration: "none",
                }}
              >
                <div
                  className="dropdown-item fw-bold rounded-2 d-flex align-items-center justify-content-between"
                  href="#"
                  style={{ fontSize: "25px" }}
                >
                  {item.icon === null ? null : (
                    <img
                      src={item.icon}
                      style={{ width: "22px", height: "22px" }}
                      alt={`icon - ${item.title}`}
                    />
                  )}
                  <span
                    className={`fs-6 mx-2 text-end p-1 ${item.color} w-100`}
                    // style={{ color: "var(--primary-color)" }}
                  >
                    {" "}
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <button
          className="navbar-toggler bg-white mx-1 p-0 px-2 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          onClick={activesMenu}
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <div className="bars">
            {/* <img
                src="../../images/menu.png"
                style={{ width: "35px", height: "35px" }}
                alt=""
              /> */}
            <div style={{ backgroundColor: "var(--primary-color)" }}></div>
            <div style={{ backgroundColor: "var(--primary-color)" }}></div>
            <div style={{ backgroundColor: "var(--primary-color)" }}></div>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-3 my-sm-0">
            <li className="bg-white m-1 p-2 rounded-2 fw-bold text-center placeholder-glow">
              {loading ? (
                <LoadingPlaceholderItem
                  isSize={"lg"}
                  col={"col-12 px-5 my-1"}
                  styleBgColor={"var(--primary-color)"}
                />
              ) : myDataStudent ? (
                myDataStudent.name
              ) : (
                <LoadingPlaceholderItem
                  isSize={"lg"}
                  col={"col-12 px-5 my-1"}
                  styleBgColor={"var(--primary-color)"}
                />
              )}
            </li>{" "}
            <li className="d-block d-md-none">
              <SideBarContainer IsPosition={"rounded-2 p-1 m-1"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderStudent;
