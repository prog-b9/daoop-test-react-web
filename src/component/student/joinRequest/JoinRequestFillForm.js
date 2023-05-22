/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../duplicateComponents/Button";
import FormInputTitleHead from "../../duplicateComponents/FormInputTitleHead";
import FormInput from "../../duplicateComponents/FormInput";
import PopupAreYouSure from "../../duplicateComponents/PopupAreYouSure";
import PopupDone from "../../duplicateComponents/PopupDone";
import { useParams } from "react-router-dom";
import StudentJoinRequestPageLogic from "../../../logic/student/joinRequest/StudentJoinRequestPageLogic";

const JoinRequestFillForm = ({ test }) => {
  // const idRoute = useParams();

  const [
    myDataCompany,
    loadingCompany,
    imagesCompany,
    columnCompanyAr,
    columnCompanyEn,
    myDataStudent,
    loadingStudent,
    responseSubmissitionByUsername,
    idRoute,
    submitAddSubmisstion,
  ] = StudentJoinRequestPageLogic();

  ///////////###### write fun addition count timeLine ###########////////////////////////

  return (
    // card-join-request-details
    <div className="card  border-0 style-shadow-small px-2 py-4">
      <div className=" d-flex justify-content-center">
        <img
          src={imagesCompany[idRoute.id]}
          className="p-3"
          id="img-join-request-details-width"
          alt="logo"
        />
      </div>
      <div className="card-body p-2">
        <div className=" m-0 m-lg-5">
          <div className="row gx-5 gy-3">
            <FormInputTitleHead title={"معلوماتك الشخصية"} fs={"19px"} />

            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataStudent && myDataStudent.name) || ""}
                readOnly={true}
                label={"الأسم الكامل"}
                placeholder={"الأسم الكامل"}
                idAndfor={"validationCustomFullName"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataStudent && myDataStudent.student_id) || ""}
                readOnly={true}
                label={"رقمك التدريبي"}
                placeholder={"رقمك التدريبي"}
                idAndfor={"validationCustomIdNo"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataStudent && myDataStudent.natioal_id) || ""}
                readOnly={true}
                label={"الهوية الشخصية للمتدرب"}
                placeholder={"الهوية الشخصية"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>

            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataStudent && myDataStudent.phone) || ""}
                readOnly={true}
                label={"رقم الهاتف"}
                placeholder={"رقم الهاتف"}
                idAndfor={"validationCustomPhoneNumber"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataStudent && myDataStudent.major) || ""}
                readOnly={true}
                label={"التخصص"}
                placeholder={"التخصص"}
                idAndfor={"validationCustoSpecial"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataStudent && myDataStudent.GPA) || ""}
                readOnly={true}
                label={"المعدل التراكمي"}
                placeholder={"المعدل التراكمي"}
                idAndfor={"validationCustomGPA"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <FormInputTitleHead title={"معلومات الجهة"} fs={"19px"} />
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                readOnly={true}
                value={
                  (myDataCompany && myDataCompany[idRoute.id].company_name) ||
                  ""
                }
                label={"أسم الجهة"}
                placeholder={"أسم الجهة"}
                idAndfor={"validationCustomCompanyName"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                value={(myDataCompany && myDataCompany[idRoute.id].email) || ""}
                readOnly={true}
                label={"البريد الإلكتروني"}
                placeholder={"البريد الإلكتروني"}
                idAndfor={"validationCustomCompanyEmail"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-12">
              <div className="col-10 col-lg-6 col-lg-6 col-xl-5 col-xxl-4  p-2 mt-5 m-auto">
                <Button
                  title={"أرسال"}
                  onclick={submitAddSubmisstion}
                  type={"button"}
                  // onclick={name}
                  // dataBsToggle="modal"
                  // dataBsTarget="#exampleModalJoinRequest"
                  // onclick={countTimeLineNow}
                  // type="button"
                />
              </div>
            </div>
          </div>
          {/* popoup Ate YOu Sure for Send data to sopervoiser */}
          {/* <PopupAreYouSure
            id={"exampleModalJoinRequest"}
            onCLick={countTimeLineNow}
            idPopupStar={"exampleModalJoinRequestDone"}
            textAlign={"center"}
            title={"هل أنت متأكد من أرسال البيانات للجهة؟"}
          />
          <PopupDone
            id={"exampleModalJoinRequestDone"}
            title={"تم الإرسال بنجاح"}
            subTitle={
              "تم إرسال طلب انضمام الى الجهة وانتظر حتى المنسق الكلية يتم قبولها"
            }
            subSubTitle={"نموذج : طلب انضمام للتدريب التعاوني"}
            icon={"../../images/send.gif"}
          /> */}
          {/* <div
            className="text-danger text-center fw-bold"
            style={{ transform: "translateY(20px)" }}
          >
            {msgError}
          </div> */}
        </div>
        {/* show notofications  */}
        {/* {idMsgError ? <NotificationContainer /> : null} */}
      </div>
    </div>
  );
};

export default JoinRequestFillForm;
