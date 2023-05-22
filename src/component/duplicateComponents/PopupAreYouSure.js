import React from "react";

const PopupAreYouSure = ({ id, title, idPopupStar, textAlign, onCLick }) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        style={{
          backgroundColor: "var(--black-color-opacity)",
          zIndex: "10001",
        }}
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center ">
          <div className="popup-done-my-custom-container m-2">
            <div className="popup-done-my-custom-content modal-content d-flex justify-content-between flex-column">
              <div className="popup-done-my-custom-img position-relative  p-5">
                <div
                  className="bg-white rounded-circle position-absolute  d-flex justify-content-center align-items-center style-shadow-small"
                  style={{
                    width: "100px",
                    height: "100px",
                    left: "50%",
                    bottom: "-50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={"../../images/alert.gif"}
                    style={{ width: "120px", height: "120px" }}
                    alt="gif-star-gold"
                    className="bg-dange"
                  />
                </div>
              </div>
              {/* text */}
              <div className="popup-done-my-custom-text p-2 p-sm-3  mt-5">
                {/* title */}
                <div
                  className={`popup-done-my-custom-text-title text-${textAlign} fw-bold fs-5`}
                >
                  {title}
                </div>
                {/* sub title */}
                {/* <div
                  className="popup-done-my-custom-text-sub-title text-dark text-opacity-75 fw-bold w-75 m-auto my-2"
                  style={{ fontSize: "11px" }}
                >
                  {subTitle}
                </div> */}
                {/* <div
                  className="popup-done-my-custom-text-sub-title fw-bold my-2"
                  style={{ fontSize: "12px", color: "var(--primary-color)" }}
                >
                </div> */}
              </div>
              {/* btn */}
              <div className=" col-3 m-auto w-100 d-flex py-3 px-4 justify-content-end">
                <div
                  className=" w-50 p-2"
                  style={{
                    borderRadius: "0 0 10px 0",
                  }}
                  // id="hover-btn-green-light"
                >
                  <button
                    data-bs-dismiss="modal"
                    id="hover-btn-green-light"
                    className="w-100 border-0 btn text-white fw-bold style-Breadcrumbs-fs"
                  >
                    الغاء
                  </button>
                </div>
                <div
                  className=" w-50 p-2"
                  // id="primary-hover"
                  style={{
                    borderRadius: "0 0  0 10px",
                  }}
                >
                  <button
                    id="primary-hover"
                    data-bs-target={`#${idPopupStar}`}
                    data-bs-toggle="modal"
                    onClick={onCLick}
                    className="w-100 border-0 btn text-white fw-bold style-Breadcrumbs-fs"
                  >
                    نعم
                  </button>
                </div>
                {/* <Button title={"إغلاق"} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAreYouSure;
