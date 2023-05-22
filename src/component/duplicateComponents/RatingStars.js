import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Button from "../duplicateComponents/Button";
import PopupDone from "./PopupDone";
const RatingStars = () => {
  const [StarVal, setStarVal] = useState(1);

  const rateSettings = {
    size: 20,
    count: 5,
    value: 2,
    a11y: true,
    // isHalf: true,
    emptyIcon: <FontAwesomeIcon icon={farStar} />,
    halfIcon: <FontAwesomeIcon icon={faStarHalfAlt} />,
    filledIcon: <FontAwesomeIcon icon={fasStar} style={{ color: "#126c66" }} />,

    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
      setStarVal(newValue);
    },
  };

  return (
    <div className="d-flex justify-content-end align-items-center rounded-3 py-2 my-1">
      <span
        className="fw-bold fs-5 ms-3"
        style={{ color: "var(--primary-color)" }}
      >
        تقييم الجهة
      </span>
      <ReactStars {...rateSettings} />
      <span className="me-2">
        <Button
          title={"أرسال"}
          dataBsToggle="modal"
          dataBsTarget="#exampleModalStar"
          type="button"
        />
      </span>
      <PopupDone
        id={"exampleModalStar"}
        propsStarVal={StarVal}
        icon={"../../images/star-gold.gif"}
        title={"تم التقييم بنجاح"}
        subTitle={"شكراً لك على تقييم الجهة ونتمنى انك استمتعت في رحلة التدريب"}
        subSubTitle={`درجة التقييم ${StarVal} / 5`}
      />
    </div>
  );
};

export default RatingStars;
