import React from "react";

const FormsEnrollCoopTriningDesiredItem = ({title,index}) => {
  return (
    <tr className="style-tr-without-border-bottom">
      <th>
        <div className="d-inline-block mx-2">{index}</div>
      </th>
      <td className="fw-bold">
        <span
          className=" d-flex  align-items-center"
          style={{ color: "var(--primary-color)" }}
        >
          {title}
        </span>
      </td>
    </tr>
  );
};

export default FormsEnrollCoopTriningDesiredItem;
