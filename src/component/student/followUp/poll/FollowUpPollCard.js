import React from "react";
import FormInputRadio from "../../../duplicateComponents/FormInputRadio";

const FollowUpPollCard = ({ index, title, isShowRadioBox }) => {
  return (
    <div
      className="card rounded-0 rounded-start style-shadow-small"
      style={{
        borderRight: "solid var(--primary-color)",
        borderWidth: "0 5px 0  0",
      }}
    >
      <div className="card-body row d-flex align-items-center justify-content-between">
        {/* col 1 */}

        <div className="col-12 col-lg-8 mt-3 mt-lg-0">
          <div className="d-flex align-items-center">
            <div
              className="p-2 rounded text-white"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              {index}
            </div>
            <div className="lh-lg mx-3 text-end">{title}</div>
          </div>
        </div>
        {/* col 2 */}
        <div className="col-12 col-lg-3">
          <div className="d-flex justify-content-center my-3 my-lg-0">
            {/* input radio One */}
            <FormInputRadio
              name={`flexRadioDefault${index}`}
              id={`flexRadioDefault${index}`}
              onChange={1}
            />
            {/* input radio two */}
            <FormInputRadio
              name={`flexRadioDefault${index}`}
              id={`flexRadioDefault${index}`}
              onChange={2}
            />
            {/* input radio three */}
            <FormInputRadio
              name={`flexRadioDefault${index}`}
              id={`flexRadioDefault${index}`}
              onChange={3}
            />
            {/* input radio four */}
            <FormInputRadio
              name={`flexRadioDefault${index}`}
              id={`flexRadioDefault${index}`}
              onChange={4}
            />
            {/* input radio five */}
            <FormInputRadio
              name={`flexRadioDefault${index}`}
              id={`flexRadioDefault${index}`}
              onChange={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpPollCard;
