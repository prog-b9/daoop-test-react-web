import React from "react";
import FormInputRadio from "../duplicateComponents/FormInputRadio";

const FormsTriningProcessTableItem = ({ index, title }) => {
  return (
    <tr className="style-tr-without-border-bottom">
      {/* index */}
      <th>
        <div>{index}</div>
      </th>
      {/* title */}
      <td>
        <div style={{ width: "350px" }}>{title}</div>
      </td>
      {/* input radio */}
      <td>
        <FormInputRadio
          name={`radioTriningProcess${index}`}
          idAndFor={`radioTriningProcess${index}`}
        />
      </td>
      <td>
        <FormInputRadio
          name={`radioTriningProcess${index}`}
          idAndFor={`radioTriningProcess${index}`}
        />
      </td>
      <td>
        <FormInputRadio
          name={`radioTriningProcess${index}`}
          idAndFor={`radioTriningProcess${index}`}
        />
      </td>
      <td>
        <FormInputRadio
          name={`radioTriningProcess${index}`}
          idAndFor={`radioTriningProcess${index}`}
        />
      </td>
    </tr>
  );
};

export default FormsTriningProcessTableItem;
