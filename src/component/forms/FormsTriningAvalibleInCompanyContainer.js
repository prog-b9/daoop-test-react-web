import React, { useState } from "react";
import Button from "../duplicateComponents/Button";
import PopupDone from "../duplicateComponents/PopupDone";
import FormInput from "../duplicateComponents/FormInput";
import FormInputTextArea from "../duplicateComponents/FormInputTextArea";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormsContainer from "./FormsContainer";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import TableContainer from "../duplicateComponents/TableContainer";
import FormsTriningAvalibleInCompanyTableItem from "./FormsTriningAvalibleInCompanyTableItem";
import FormInputCheckBox from "../duplicateComponents/FormInputCheckBox";

const FormsTriningAvalibleInCompanyContainer = ({
  propsTitle,
  propsSubTitle,
}) => {
  const whatGiveMecheckBox = ["مكافئة", "مواصلات", "دورات", "علاج", "إعاشة"];
  const [arrDept, setArrDept] = useState([1]);

  const addDept = () => {
    setArrDept([...arrDept, arrDept]);
  };

  return (
    <div className="container p-3 p-md-5">
      <TimeLineBoxCardDarkGreen
        fs={"22px"}
        titleHeader={`ماهو ${propsTitle} ؟`}
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
                  label={"أسم المنشأة"}
                  placeholder={"أسم المنشأة"}
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
                  label={"طبيعة النشاط"}
                  placeholder={"طبيعة النشاط"}
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
                  label={"التليفون"}
                  placeholder={"التليفون"}
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
                  label={"فاكس"}
                  placeholder={"فاكس"}
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
                  label={"الفترة من "}
                  placeholder={"الفترة من"}
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
                  label={"الفترة الى"}
                  placeholder={"الفترة الى"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <FormInputTitleHead
                title={"عدد الفرص التدريبية المتاحة للمتدربات لدى المنشأة"}
                fs={"21px"}
              />
              <div className="col-12">
                <div className="bg-dange">
                  <Button
                    type={"button"}
                    onclick={() => addDept()}
                    title={
                      <div className="d-flex align-items-center">
                        <div className="text-white">فرصة تدريبية</div>
                        <div className="text-white d-flex fw-bold mx-2 align-items-center justify-content-center">
                          <ion-icon color="#" name="add-circle"></ion-icon>
                        </div>
                      </div>
                    }
                    width={"140px"}
                  />
                </div>
                <TableContainer
                  className={"my-4"}
                  thead={[
                    "#",
                    "القسم",
                    "عدد الفرص التدريبية المتاحة",
                    "الفرص الوظيفية ",
                  ]}
                  item={
                    <>
                      {arrDept.map((item, i) => (
                        <FormsTriningAvalibleInCompanyTableItem
                          index={i + 1}
                          key={i}
                          title={item}
                        />
                      ))}
                    </>
                  }
                />
              </div>
              <FormInputTitleHead title={"موقع التدريب"} fs={"21px"} />
              <div className="col-lg-6">
                <FormInputTextArea
                  onChange={() => null}
                  // value={""}
                  label={"المقر الرئيسي ويقع في"}
                  placeholder={"المقر الرئيسي ويقع في"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <div className="col-lg-6">
                <FormInputTextArea
                  onChange={() => null}
                  // value={""}
                  label={"أحد الفروع ويقع في"}
                  placeholder={"أحد الفروع ويقع في"}
                  idAndfor={"validationCustomIdNo"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              <FormInputTitleHead
                title={"الرجاء وضع علامة على ما سوف تقدمه منشأتكم للمتدربة"}
                fs={"21px"}
              />
              <div className="col-12">
                <div className="row justify-content-between">
                  {whatGiveMecheckBox.map((item, i) => (
                    <div key={i} className="col d-flex align-items-center m-1">
                      <FormInputCheckBox />
                      <div className="mx-2 fw-bold">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <FormInputTitleHead
                title={"المسؤول عن التدريب في المنشأة"}
                fs={"21px"}
              />
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"الاسم"}
                  placeholder={"الاسم"}
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
                  label={"الوظيفة"}
                  placeholder={"الوظيفة"}
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
                  label={"الهاتف"}
                  placeholder={"الهاتف"}
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
                  label={"البريد الكتروني"}
                  placeholder={"البريد الكتروني"}
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
                  label={"مدير المنشأة"}
                  placeholder={"مدير المنشأة"}
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
                  label={"التوقيع"}
                  placeholder={"التوقيع"}
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

export default FormsTriningAvalibleInCompanyContainer;
