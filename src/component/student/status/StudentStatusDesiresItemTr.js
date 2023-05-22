import React from "react";
import Badge from "../../duplicateComponents/Badge";
import LoadingPlaceholderItem from "../../duplicateComponents/LoadingPlaceholderItem";

const StudentStatusDesiresItemTr = ({ index, companyName, isStatus }) => {
  return (
    <tr className="style-tr-without-border-bottom">
      <th>
        <div className="d-inline-block mx-2 ">{index}</div>
      </th>
      <td className="fw-bold">
        <div
          className=" d-flex  text-nowrap align-items-center"
          style={{ color: "var(--primary-color)" }}
        >
          {companyName}
        </div>
      </td>
      <td>
        <div className="text-dark text-opacity-75 d-flex fw-bold">
          {isStatus === null ? (
            <LoadingPlaceholderItem
              isSize={"lg"}
              styleBgColor={"var(--primary-color-opacity)"}
              col={"col-12 col-lg-4 "}
            />
          ) : isStatus === 0 ? (
            <Badge
              title={"قيد الانتظار"}
              bgColor={"var(--yellow-opacity-color)"}
              color={"var(--yellow-color)"}
            />
          ) : isStatus === 1 ? (
            <Badge
              title={"تم الرفض"}
              bgColor={"var(--red-opacity-color)"}
              color={"var(--red-color)"}
            />
          ) : isStatus === 2 ? (
            <Badge
              title={"تم قبولك"}
              bgColor={"var(--green-opacity-color)"}
              color={"var(--green-color)"}
            />
          ) : null}

          {/* {isStatus === null ? null : isStatus === 1 ? (
            <Badge
              title={"تم قبولك"}
              bgColor={"var(--green-opacity-color)"}
              color={"var(--green-color)"}
            />
          ) : null}

          {isStatus === null ? null : isStatus === 2 ? (
            <Badge
              title={"قيد الانتظار"}
              bgColor={"var(--yellow-opacity-color)"}
              color={"var(--yellow-color)"}
            />
          ) : null} */}
        </div>
      </td>
    </tr>
  );
};

export default StudentStatusDesiresItemTr;
