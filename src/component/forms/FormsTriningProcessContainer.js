import React from "react";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import FormsContainer from "./FormsContainer";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormInput from "../duplicateComponents/FormInput";
import Button from "../duplicateComponents/Button";
import PopupDone from "../duplicateComponents/PopupDone";
import FormsTriningProcessTableItem from "./FormsTriningProcessTableItem";
import FormInputTextArea from "../duplicateComponents/FormInputTextArea";
import TableContainer from "../duplicateComponents/TableContainer";

const FormsTriningProcessContainer = ({ propsTitle, propsSubTitle }) => {
  const dataTriningProcess = [
    {
      title: "مدى توفر الأجهزة و الخامات لدى الجهة التدريبية ",
    },
    {
      title: "وجود بيئة آمنة و مناسبة للتدريب المتدربات   ",
    },
    {
      title: "التزام جهة التدريب بالجدية في تدريب المتدربات",
    },
    {
      title: "مدى رضا المتدربات على جهة التدريب  ",
    },
    {
      title: "ارتباط التدريب بمجال تخصص المتدربة  ",
    },
    {
      title: "مدى توفر المهارات اللازمة لدى  المتدربة ",
    },
    {
      title: "مدى جودة متدربات التدريب التعاوني  ",
    },
    {
      title: "مدى رضا جهات التدريب عن المتدربات",
    },
  ];

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

      {/* forms */}
      <div className="">
        <FormsContainer
          titleHead={<FormInputTitleHead title={propsTitle} fs={"30px"} />}
          item={
            <form className="row gx-5 gy-3 needs-validation" noValidate>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"أسم المشرف"}
                  placeholder={"أسم المشرف"}
                  idAndfor={"validationCustomFullName"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"رقم الجوال"}
                  placeholder={"رقم الجوال"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"التخصص"}
                  placeholder={"التخصص"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"أسم الجهة"}
                  placeholder={"أسم الجهة"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"عدد المتدربين"}
                  placeholder={"عدد المتدربين"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-12">
                <TableContainer
                  className={"my-3"}
                  thead={[
                    "#",
                    "عناصر التقييم",
                    "ممتاز",
                    "جيد جدا",
                    "جيد",
                    "غير مقبول",
                  ]}
                  item={
                    <>
                      {dataTriningProcess.map((item, i) => (
                        <FormsTriningProcessTableItem
                          key={i}
                          index={i + 1}
                          title={item.title}
                        />
                      ))}
                    </>
                  }
                />
              </div>
              <div className="col-12">
                <FormInputTextArea
                  onChange={() => null}
                  // value={""}
                  label={
                    "مرئياتك حول وضع متدربات التدريب التعاوني خلال هذة الفترة "
                  }
                  placeholder={
                    "مرئياتك حول وضع متدربات التدريب التعاوني خلال هذة الفترة "
                  }
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-12">
                <FormInputTextArea
                  onChange={() => null}
                  // value={""}
                  label={"مرئياتك حول وضع جهات التدريب خلال هذة الفترة"}
                  placeholder={"مرئياتك حول وضع جهات التدريب خلال هذة الفترة"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>

              <div className="col-12">
                <div className="col-10 col-lg-6 col-xl-5 col-xxl-4  p-2 mt-5 m-auto">
                  <Button
                    title={"إرسال"}
                    dataBsToggle="modal"
                    dataBsTarget="#exampleModalForms"
                    type="button"
                  />
                </div>
                <PopupDone
                  id={"exampleModalForms"}
                  icon={"../../images/send.gif"}
                  title={"تم الإرسال بنجاح"}
                  subTitle={
                    "تم أرسال هذا النموذج  الجهة ونتمنى لك رحلة سعيدة في التدريب "
                  }
                  subSubTitle={` نموذج : ${propsTitle}`}
                />
              </div>
            </form>
          }
        />
      </div>
    </div>
  );
};

export default FormsTriningProcessContainer;
