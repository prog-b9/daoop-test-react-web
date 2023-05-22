/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SideBarItem from "../SideBarItem";
import SideBarItemWithSubItem from "../SideBarItemWithSubItem";
import { Sidebar, Menu } from "react-pro-sidebar";
import SideBarSubItem from "../SideBarSubItem";
import { Link } from "react-router-dom";

const SideBarContainer = ({ IsPosition }) => {
  const [getYear, setGetYear] = useState("");
  const [getMonth, setGetMonth] = useState("");
  const [getDay, setGetDay] = useState("");

  const dayOfTheWeek = [
    "الأحد",
    "الأثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  let dateNowObject = new Date();

  let dateNow = dateNowObject.toLocaleDateString();
  useEffect(() => {
    // console.log(dateNowObject);
    // setGetYear(dateNowObject.getFullYear());
    // setGetMonth(dateNowObject.getMonth() + 1);
    setGetDay(dateNowObject.getDay());
    // console.log(dateNowObject.getDay());
    // console.log(dateNow);
    // console.log()
  }, []);

  const [collapseWidth, setCollapseWidth] = useState(768);
  const [isHover, setIsHover] = useState(false);
  const boxStyle = {
    //...
    // backgroundColor: isHover ? "var(--primary-color)" : "var(--primary-color)",
  };
  const getWidth = () => {
    setCollapseWidth(window.innerWidth);
  };
  useEffect(() => {
    // console.log(window.innerWidth);
    // console.log(collapseWidth);
    window.addEventListener("resize", getWidth);
    if (collapseWidth < 768) {
      // setCollapseWidth(window.innerWidth)
      // setCollapse(true);
    } else {
      // setCollapse(false);
    }
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [window.innerWidth]);

  return (
    <div
      className={` bg-white ${IsPosition} p-1 d-flex flex-column justify-content-between`}
      // style={{ width: collapseWidth + "px" }}
    >
      {/* btn arrow open or close the sidebar container  */}
      {/* <div
        className="position-absolute bg-white style-shadow-large rounded  d-flex align-items-center justify-content-center"
        style={{
          width: "25px",
          height: "25px",
          left: "-13px",
          top: "80px",
          cursor: "pointer",
        }}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div> */}
      <div className="text-end bg-white style-sidebar-scroll-radius">
        <div className="d-flex justify-content-center">
          <Link to={"/"}>
            {window.innerWidth < 768 ? (
              <img
                src="../../../images/logo.png"
                style={{ width: "110px", height: "70px" }}
                alt=""
                className="Daoob_logo mt-2"
              />
            ) : (
              <img
                src="../../../images/logo.png"
                style={{ width: "110px", height: "70px" }}
                alt=""
                className="Daoob_logo"
              />
            )}
          </Link>
        </div>
        <Sidebar
          rtl={true}
          // defaultCollapsed={
          //   window.innerWidth <= 768 && window.innerWidth >= 576 ? true : false
          // }
          className="m-0 m-md-2 bg-white border-0 p-2 w-100"
        >
          <Menu
            // onClick={activeColor}
            className="py-2 py-md-0 bg-white ps-3 ps-sm-0 ps-md-0 ps-lg-3"
          >
            <SideBarItem
              title={"حالة المتدرب"}
              icon={"../../../images/icon-status.png"}
              path={"/student/status"}
            />
            <SideBarItemWithSubItem
              title={"متابعة تنفيذ الخطة"}
              icon={"../../../images/follow-up.png"}
              item={
                <div className="p-1">
                  <SideBarSubItem
                    title={"المهام و المهارات"}
                    path={"/student/follow-up-tasks"}
                  />
                  <SideBarSubItem
                    title={"الدرجات"}
                    path={"/student/follow-up-grade"}
                  />
                  <SideBarSubItem
                    title={"استطلاع رأي"}
                    path={"/student/follow-up-poll"}
                  />
                </div>
              }
            />
            <SideBarItemWithSubItem
              title={"النماذج"}
              icon={"../../../images/icon-forms.png"}
              item={
                <div className="bg-transparent border-0 p-1">
                  <SideBarSubItem
                    title={"التحاق بالتدريب التعاوني"}
                    path={"/student/forms-enroll-trining"}
                  />
                  <SideBarSubItem
                    title={"طلب استثناء"}
                    path={"/student/forms-request-exception"}
                  />
                </div>
              }
            />
            <SideBarItem
              title={"طلب انضمام للتدريب"}
              icon={"../../../images/join-request.png"}
              path={"/student/join-request"}
            />
          </Menu>
        </Sidebar>
      </div>
      {/* Date */}
      <div className=" fw-bold text-center my-3 date-sidebar">
        <div className="text-black-50">{dayOfTheWeek[getDay]}</div>
        {/* <div className="text-black-50">
          0{getDay}/0{getMonth}/{getYear}
        </div> */}
        <div className="text-black-50">{dateNow} </div>
      </div>
    </div>
  );
};

export default SideBarContainer;
