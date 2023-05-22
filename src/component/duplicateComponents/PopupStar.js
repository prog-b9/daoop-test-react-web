import React from "react";
import Button from "../duplicateComponents/Button";

const PopupStar = ({ id, title, subTitle, subSubTitle, icon }) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        style={{ backgroundColor: "var(--black-color-opacity)" }}
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center ">
          <div className="popup-done-my-custom-container m-2">
            <div className="popup-done-my-custom-content modal-content  d-flex justify-content-between flex-column">
              <div className="popup-done-my-custom-img position-relative  p-5">
                <div
                  className="bg-white rounded-circle position-absolute  d-flex justify-content-center align-items-center style-shadow-large"
                  style={{
                    width: "100px",
                    height: "100px",
                    left: "50%",
                    bottom: "-50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={icon}
                    style={{ width: "150px", height: "150px" }}
                    alt="gif-star-gold"
                    className="bg-dange"
                  />
                </div>
              </div>
              {/* text */}
              <div className="popup-done-my-custom-text p-2 p-sm-3 bg-daner text-center mt-5">
                {/* title */}
                <div className="popup-done-my-custom-text-title fw-bold fs-4 mb-2">
                  {title}
                </div>
                {/* sub title */}
                <div
                  className="popup-done-my-custom-text-sub-title text-dark text-opacity-75 fw-bold w-75 m-auto my-2"
                  style={{ fontSize: "11px" }}
                >
                  {subTitle}
                </div>
                <div
                  className="popup-done-my-custom-text-sub-title fw-bold my-2"
                  style={{ fontSize: "12px", color: "var(--primary-color)" }}
                >
                  {subSubTitle}
                </div>
              </div>
              {/* btn */}
              <div className=" p-2 m-auto" style={{ width: "100px" }}>
                <Button
                  type={"button"}
                  title={"إغلاق"}
                  dataBsDismiss={"modal"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupStar;
