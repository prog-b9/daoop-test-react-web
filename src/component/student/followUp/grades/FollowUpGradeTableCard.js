/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import TemplateCircle from "../../../duplicateComponents/TemplateCircle";


const FollowUpGradeTableCard = ({ index, title, limitGrade, finalTotal }) => {


  return (
    <tr className="style-tr-without-border-bottom">
      <th>
        <div className="d-inline-block mx-2 mt-3">{index}</div>
      </th>
      <td className="fw-bold">
        <div
          className=" d-flex mt-3 text-nowrap align-items-center"
          style={{ color: "var(--primary-color)" }}
        >
          {title}
        </div>
      </td>
      <td>
        <div className="text-dark text-opacity-75 mt-3 fw-bold">
          {limitGrade}
        </div>
      </td>
      <td>
        <div className="text-dark text-opacity-75 mt-3 fw-bold">
          {isNaN(finalTotal) ? "-" : finalTotal}
        </div>
      </td>
      <td>
        <div className="p-0 m-0">
          <TemplateCircle
            value={isNaN(finalTotal) ? 0 : ((finalTotal * 100) / limitGrade).toFixed(0)}
            w={"70px"}
            h={"70px"}
            p={"5px"}
            circleWidth={"11"}
            fs={"30px"}
            text={`${isNaN(finalTotal) ? "" : "%"}`}
          />
        </div>
      </td>
    </tr>
  );
};

export default FollowUpGradeTableCard;
