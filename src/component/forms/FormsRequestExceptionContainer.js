/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useRef, useState } from "react";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import FormsContainer from "./FormsContainer";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormInput from "../duplicateComponents/FormInput";
import Button from "../duplicateComponents/Button";
// import ButtonLink from "../duplicateComponents/ButtonLink";
import FormInputTextArea from "../duplicateComponents/FormInputTextArea";
// import PopupDone from "../duplicateComponents/PopupDone";
// import { useReactToPrint } from "react-to-print";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import jsPDF from "jspdf";
// import TemplateJs from "../../template/TemplateJs";
// import { saveTicketAsPdf } from "./test";
const FormsRequestExceptionContainer = ({ propsTitle, propsSubTitle }) => {
  const componentRef = useRef(null);

  const [dataInput, setDataInput] = useState({
    studentName: "",
    studentId: "",
    departement: "",
  });

  const handelChangeForms = (e) => {
    // console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    setDataInput((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(dataInput.studentName);
  };

  let bb = "باسل محمد";

  const handleGeneratePdf = () => {
    let hh = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>forms</title>
    </head>
    
    <body>
    
        <table class="table" charset="utf-8">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td charset="utf-8">
                       باسل محمد
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    
    </body>
    
    </html>

    `;
    // const doc = new jsPDF({
    //   orientation: "p",
    //   unit: "pt",
    //   format: "a4",
    // });
    // const width = doc.internal.pageSize.getWidth();
    // doc
    //   .html(hh, {
    //     width: width,
    //     windowWidth: 794,
    //     margin: [58, 80, 52, 80],
    //     html2canvas: { scale: 0.57 },
    //   })
    //   .then(() => {
    //     doc.save(`${propsTitle}.pdf`);
    //   });

    /////////////////////////////////////////////////////////////////
    // const AmiriRegular = environment.AmiriRegular;

    // const myFont = "4_5805562707671255225.ttf";
    // doc.addFileToVFS("Amiri.ttf");
    // doc.addFont("Amiri.ttf", "Amiri", "normal");
    // doc.setFont(myFont);
    // doc.getFontList()

    //doc.setFont("Amiri"); // set font
    //doc.setFontSize(20);

    //  doc.addFileToVFS("THSarabunNew.ttf", font);
    // doc.addFont("THSarabunNew.ttf", "Sarabun", "normal");

    // doc.setFont("Sarabun");
  };

  return (
    <div className="container p-3 p-md-5">
      <TimeLineBoxCardDarkGreen
        titleHeader={`ماهو ${propsTitle} ؟`}
        fs={"22px"}
        item={
          <div>
            <TimeLineWithTitleAndSubTitle
              title={propsTitle}
              subTitle={propsSubTitle}
              whatColor={"lightGreen"}
            />
          </div>
        }
      />
      {/* 
      <div ref={componentRef} className="">
        <table className="table p-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* <div ref={componentRef}> */}
      {/* <TemplateJs reeef={componentRef} /> */}
      {/* </div> */}

      {/* forms */}
      <div className="">
        <FormsContainer
          // reef={componentRef}
          titleHead={<FormInputTitleHead title={propsTitle} fs={"30px"} />}
          item={
            <form className="row gx-5 gy-3">
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={handelChangeForms}
                  // value={""}
                  label={"أسم المتدرب"}
                  name={"studentName"}
                  placeholder={"أسم المتدرب"}
                  idAndfor={"validationCustomFullName"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={handelChangeForms}
                  // value={""}
                  label={"الرقم التدريبي"}
                  name={"studentId"}
                  placeholder={"الرقم التدريبي"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={handelChangeForms}
                  // value={""}
                  label={"القسم"}
                  name={"departement"}
                  placeholder={"القسم"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"المادة المتبيقة"}
                  name={"المادة المتبيقة"}
                  placeholder={"المادة المتبيقة"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"عدد ساعاتها"}
                  name={"عدد ساعاتها"}
                  placeholder={"عدد ساعاتها"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-12">
                <FormInputTextArea
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"دواعي الاستثناء"}
                  placeholder={"دواعي الاستثناء"}
                  idAndfor={"validationCustomIdPrivate"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <FormInputTitleHead
                title={"يعبأ من القبول والتسجيل"}
                fs={"21px"}
              />
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"الفصل الحالي للمتدربة"}
                  name={"الفصل الحالي للمتدربة"}
                  placeholder={"الفصل الحالي للمتدربة"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"المعدل التراكمي"}
                  name={"المعدل التراكمي"}
                  placeholder={"المعدل التراكمي"}
                  idAndfor={"validationCustomIdPrivate"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-12">
                <FormInputTextArea
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"رأي رئيس القسم"}
                  placeholder={"رأي رئيس القسم"}
                  idAndfor={"validationCustomIdPrivate"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-12">
                <FormInputTextArea
                  // onChange={handelChangeForms}
                  // value={""}
                  label={"رأي وكيل شؤون المتدربين"}
                  placeholder={"رأي وكيل شؤون المتدربين"}
                  idAndfor={"validationCustomIdPrivate"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>

              {/* <PopupDone
                id={"exampleModalForms"}
                icon={"../../images/send.gif"}
                title={"تم الإرسال بنجاح"}
                subTitle={
                  "تم أرسال هذا النموذج  الجهة ونتمنى لك رحلة سعيدة في التدريب "
                }
                subSubTitle={` نموذج : ${propsTitle}`}
              /> */}
            </form>
          }
        />
        <div className="col-12">
          <div className="col-10 col-lg-6 col-lg-6 col-xl-5 col-xxl-4  p-2 mt-5 m-auto">
            <Button
              title={"أرسال"}
              // dataBsToggle="modal"
              // onclick={handlePrint}
              onclick={handleGeneratePdf}
              // onclick={()=>submitForms()}
              // onclick={saveTicketAsPdf}
              // onclick={downloadPDF}
              // dataBsTarget="#exampleModalForms"
              type="button"
            />
            <div className="my-3"></div>
            {/* <a
              href="../../rows.PDF"
              download={`${propsTitle}.pdf`}
              // dataBsToggle="modal"
              // onclick={handlePrint}
              // dataBsTarget="#exampleModalForms"

              // type="button"
            >
              تنزيل
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsRequestExceptionContainer;
