import React from "react";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormInput from "../duplicateComponents/FormInput";
import Button from "../duplicateComponents/Button";
import FormsContainer from "./FormsContainer";
import PopupDone from "../duplicateComponents/PopupDone";

const FormsDirectTriningContainer = ({ propsTitle, propsSubTitle }) => {
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
      <FormsContainer
        titleHead={<FormInputTitleHead title={propsTitle} fs={"30px"} />}
        item={
          <form className="row gx-5 gy-3 needs-validation" noValidate>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"أسم المتدرب"}
                placeholder={"أسم المتدرب"}
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
                label={"رقم المتدرب"}
                placeholder={"رقم المتدرب"}
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
                label={"القسم"}
                placeholder={"القسم"}
                idAndfor={"validationCustomIdPrivate"}
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
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"تاريخ مباشرة التدريب"}
                placeholder={"تاريخ مباشرة التدريب"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"اسم مسؤول المباشر"}
                placeholder={"اسم مسؤول المباشر"}
                idAndfor={"validationCustomIdPrivate"}
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
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"رقم الهاتف"}
                placeholder={"رقم الهاتف"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"رقم الفاكس"}
                placeholder={"رقم الفاكس"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"البريد الالكتروني"}
                placeholder={"البريد الالكتروني"}
                idAndfor={"validationCustomIdPrivate"}
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
                idAndfor={"validationCustomIdPrivate"}
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
                placeholder={"التوقيع يكتب اثناء الطباعة النموذج"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-12">
              <div className="col-10  col-lg-6 col-xl-5 col-xxl-4  p-2 mt-5 m-auto">
                <Button
                  title={"أرسال النموذج الى الجهة"}
                  dataBsToggle="modal"
                  dataBsTarget="#exampleModalForms"
                  type="button"
                />
              </div>
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
          </form>
        }
      />
    </div>
  );
};

export default FormsDirectTriningContainer;
