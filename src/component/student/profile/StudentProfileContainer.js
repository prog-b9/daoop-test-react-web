/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import TimeLineBoxCardDarkGreen from "../../duplicateComponents/TimeLineBoxCardDarkGreen";
import TimeLineWithTitleAndSubTitle from "../../duplicateComponents/TimeLineWithTitleAndSubTitle";
import FormsContainer from "../../forms/FormsContainer";
import Button from "../../duplicateComponents/Button";
import FormInput from "../../duplicateComponents/FormInput";
import FormInputTitleHead from "../../duplicateComponents/FormInputTitleHead";
import LoadingTimeLineLightGreen from "../../duplicateComponents/LoadingTimeLineLightGreen";
import StudentProfileContainerLogic from "../../../logic/student/profile/StudentProfileContainerLogic";

const StudentProfileContainer = () => {
  const [myDataStudent, loading] = StudentProfileContainerLogic();

  const columnEng = [
    "name",
    "student_id",
    "natioal_id",
    "address",
    "phone",
    "collage_name",
    "Department",
    "major",
    "GPA",
  ];

  const columnAr = [
    "الأسم الكامل",
    "رقمك التدريبي",
    "الهوية الشخصية للمتدرب",
    "العنوان",
    "رقم الهاتف",
    "أسم الكلية",
    "القسم",
    "التخصص",
    "المعدل التراكمي",
  ];

  return (
    <div className="container p-3 p-md-5">
      <div className="row">
        {/* Display info student */}
        <div className="col-12 col-lg-6">
          <TimeLineBoxCardDarkGreen
            titleHeader={"معلوماتك الشخصية"}
            item={
              <div>
                {loading ? (
                  <LoadingTimeLineLightGreen countPlaceholder={4} />
                ) : myDataStudent && Object.values(myDataStudent).length > 0 ? (
                  myDataStudent &&
                  columnAr.map((item, i) => (
                    <TimeLineWithTitleAndSubTitle
                      key={i}
                      title={item}
                      subTitle={
                        myDataStudent[columnEng[i]] === null
                          ? "-"
                          : myDataStudent[columnEng[i]]
                      }
                      whatColor={"lightGreen"}
                    />
                  ))
                ) : (
                  // (() => {
                  // titleStudentArr.map((item, i) => (
                  //   <TimeLineWithTitleAndSubTitle
                  //     key={i}
                  //     title={item}
                  //     // subTitle={"dwef"}
                  //     subTitle={Object.values(myDataStudent[0])}
                  //     whatColor={"lightGreen"}
                  //   />
                  // ))
                  // <>
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.name}
                  //     subTitle={myDataStudent[0].name}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.student_id}
                  //     subTitle={myDataStudent[0].student_id}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.natioal_id}
                  //     subTitle={myDataStudent[0].natioal_id}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.address}
                  //     subTitle={myDataStudent[0].address}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.phone}
                  //     subTitle={myDataStudent[0].phone}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.collage_name}
                  //     subTitle={myDataStudent[0].collage_name}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.Department}
                  //     subTitle={myDataStudent[0].Department}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.major}
                  //     subTitle={myDataStudent[0].major}
                  //     whatColor={"lightGreen"}
                  //   />
                  //   <TimeLineWithTitleAndSubTitle
                  //     title={titleStudent.GPA}
                  //     subTitle={myDataStudent[0].GPA}
                  //     whatColor={"lightGreen"}
                  //   />{" "}
                  // </>
                  <TimeLineWithTitleAndSubTitle
                    title={"لاتوجد بيانات"}
                    whatColor={"lightGreen"}
                  />
                )}
              </div>
            }
          />
        </div>
        {/* <div className="col-12 col-lg-6">
          <TimeLineBoxCardDarkGreen
            titleHeader={"معلوماتك الشخصية"}
            item={
              <div>
                {loading ? (
                  <LoadingTimeLineLightGreen countPlaceholder={4} />
                ) : myDataStudent && Object.values(myDataStudent).length > 0 ? (
                  myDataStudent &&
                  Object.values(titleStudentArr).map((item, i) => (
                    <TimeLineWithTitleAndSubTitle
                      key={i}
                      title={item}
                      subTitle={item}
                      whatColor={"lightGreen"}
                    />
                  ))
                ) : (
                  <TimeLineWithTitleAndSubTitle
                    title={"لاتوجد بيانات"}
                    whatColor={"lightGreen"}
                  />
                )}
              </div>
            }
          />
        </div> */}
        {/* Display info student */}
        <div className="col-12 col-lg-6">
          <FormsContainer
            titleHead={
              <FormInputTitleHead title={"تغيير كلمة المرور"} fs={"21px"} />
            }
            item={
              <form className="row gx-5 gy-3 needs-validation" noValidate>
                <div className="col-12">
                  <FormInput
                    type={"text"}
                    onChange={() => null}
                    // value={""}
                    label={"كلمة المرور القديمة"}
                    placeholder={"كلمة المرور القديمة"}
                    idAndfor={"validationCustomFullName"}
                    isValid={"valid"}
                    msgValid={"Gooooooooood !!"}
                  />
                </div>
                <div className="col-12">
                  <FormInput
                    type={"text"}
                    onChange={() => null}
                    // value={""}
                    label={"كلمة المرور الجديدة"}
                    placeholder={"كلمة المرور الجديدة"}
                    idAndfor={"validationCustomIdNo"}
                    isValid={"valid"}
                    msgValid={"Gooooooooood !!"}
                  />
                </div>
                <div className="col-12">
                  <div className="col-12 col-sm-6   p-2 mt-5 m-auto">
                    <Button
                      title={"أرسال"}
                      //   dataBsToggle="modal"
                      //   dataBsTarget="#exampleModalForms"
                      type="button"
                    />
                  </div>
                  {/* <PopupStar
                     id={"exampleModalForms"}
                     icon={"../../images/send.gif"}
                     title={"تم الإرسال بنجاح"}
                     subTitle={
                       "تم أرسال هذا النموذج  الجهة ونتمنى لك رحلة سعيدة في التدريب "
                     }
                     subSubTitle={" نموذج : توجية المتدرب"}
                   /> */}
                </div>
              </form>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StudentProfileContainer;
