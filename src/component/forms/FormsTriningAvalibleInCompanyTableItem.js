import React from "react";
// import FormInputRadio from "../duplicateComponents/FormInputRadio";
import FormInput from "../duplicateComponents/FormInput";
import FormInputCheckBox from "../duplicateComponents/FormInputCheckBox";

const FormsTriningAvalibleInCompanyTableItem = ({ index, title }) => {
  return (
    <tr className="style-tr-without-border-bottom">
      {/* index */}
      <th>
        <div>{index}</div>
      </th>
      {/* title */}
      <td>
        {/* <div>{title}</div> */}
        <div style={{ width: "200px" }}>
          <FormInput
            type={"text"}
            onChange={() => null}
            // value={""}
            isLabel={null}
            placeholder={"أسم القسم ..."}
            idAndfor={"validationCustomIdNo"}
            isValid={"valid"}
            msgValid={"Gooooooooood !!"}
          />
        </div>
      </td>
      {/* input radio */}
      <td>
        <div style={{ width: "200px" }}>
          {" "}
          <FormInput
            type={"text"}
            onChange={() => null}
            // value={""}
            isLabel={null}
            placeholder={"عدد الفرص المتاحة ..."}
            idAndfor={"validationCustomIdNo"}
            isValid={"valid"}
            msgValid={"Gooooooooood !!"}
          />
        </div>
      </td>
      <td>
        {/* <FormInput /> */}
        <div className="d-flex">
          <FormInputCheckBox />
          <div className="mx-2">توظيف</div>
        </div>
        <div className="d-flex">
          <FormInputCheckBox />
          <div className="mx-2">تدريب</div>
        </div>
      </td>
    </tr>
  );
};

export default FormsTriningAvalibleInCompanyTableItem;
