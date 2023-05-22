/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const HeaderHomePage = () => {
  const activesMenu = () => {
    let bars = document.querySelector(".bars");
    bars.classList.toggle("active");
  };
  const headerItem = [
    {
      title: "رحلة دؤوب",
      path: "/sopervisor/status",
    },
    {
      title: "الخدمات",
      // path: "/sopervisor/status",
    },
    {
      title: "المنتجات",
      // path: "/sopervisor/status",
    },
    {
      title: "الاخبار",
      // path: "/sopervisor/status",
    },
    {
      title: "تواصل معنا",
      // path: "/sopervisor/status",
    },
    {
      title: "بدء الخدمة",
      path: "/login",
    },
  ];
  return (
    <nav
      className="navbar navbar-expand-md bg-white shadow-sm p-0 position-fixed top-0 w-100"
      style={{ zIndex: "1000" }}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/student/status"}>
          <img
            src="../../../images/logo.png"
            style={{ width: "110px", height: "70px" }}
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler shadow-none border-0"
          // style={{ borderWidth: "3px", borderColor: "var(--primary-color)" }}
          style={{ backgroundColor: "var(--primary-color)" }}
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
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            {/* <img
              src="../../images/menu-white.png"
              style={{ width: "35px", height: "35px" }}
              alt=""
            /> */}
          </div>
        </button>
        <div
          className="collapse navbar-collapse p-0 py-2 "
          id="navbarSupportedContent"
        >
          <div className="navbar-nav me-0 me-md-5 p-2 mb-lg-0">
            {headerItem.map((item, i) => (
              <li className="nav-item mt-1 mt-md-2" key={i}>
                {i < headerItem.length - 1 ? (
                  <Link
                    to={item.path}
                    className="nav-link fw-bold text-dark text-end text-md-center mx-0 mx-lg-3"
                    aria-current="page"
                  >
                    {item.title}
                  </Link>
                ) : null}
                {i === headerItem.length - 1 ? (
                  <Link
                    to={item.path}
                    // onClick={}
                    // data-bs-target="#staticBackdrop"
                    // data-bs-toggle="modal"
                    className="btn fw-bold rounded-5 text-center px-3 py-2 mx-0 mx-lg-3 w-100"
                    id="style-btn-start-service"
                  >
                    {item.title}
                  </Link>
                ) : null}
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHomePage;
