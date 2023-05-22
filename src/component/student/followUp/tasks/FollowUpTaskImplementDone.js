import React from "react";
import FollowUpTaskCardImplement from "./FollowUpTaskCardImplement";

const FollowUpTaskImplementDone = () => {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              {/* <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
              <div className="fw-bold fs-5">
                المهام التي تم تنفيذها وعددها{" "}
                <span
                  className="mx-1 fw-bold fs-4"
                  style={{ color: "var(--primary-color)" }}
                >
                  (2)
                </span>
              </div>
            </div>
            <div className="modal-body ">
              <div className=" my-1">
                <FollowUpTaskCardImplement title={"الكتابة على الكمبيوتر"} />
              </div>
              <div className=" my-1">
                <FollowUpTaskCardImplement title={"الكتابة على الكمبيوتر"} />
              </div>
              <div className=" my-1">
                <FollowUpTaskCardImplement title={"الكتابة على الكمبيوتر"} />
              </div>
            </div>
            <div className="fw-bold fs-5 me-3">
              هل أنت متأكد من تنفيذ المهام ؟
            </div>
            <div className="modal-footer border-0 fw-bold">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                // id="primary-hover"
              >
                إلغاء
              </button>
              <button
                type="button"
                className="btn text-white"
                data-bs-target="#staticBackdropDone"
                data-bs-toggle="modal"
                id="primary-hover"
                style={{ fontSize: "16px" }}
              >
                نعم
                {/* إلغاء */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpTaskImplementDone;
