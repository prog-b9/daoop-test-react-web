import React from "react";
import Button from "../duplicateComponents/Button";
import FormInput from "../duplicateComponents/FormInput";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormsContainer from "./FormsContainer";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import PopupDone from "../duplicateComponents/PopupDone";

const FormsRequestTriningContainer = ({ propsTitle, propsSubTitle }) => {
  // const dataInputs = [
  //   {
  //     // type:{"text"},
  //     // onChange={() => null},
  //     // label:{"الرقم التدريبي"},
  //     // placeholder:{"الرقم التدريبي"},
  //     // idAndfor:{"validationCustomFullName"},
  //     // isValid:{"valid"},
  //     // msgValid:{"Gooooooooood !!"},
  //   },
  // ];
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
      <FormsContainer
        titleHead={<FormInputTitleHead title={propsTitle} fs={"30px"} />}
        item={
          <form className="row gx-5 gy-3 needs-validation" noValidate>
            <FormInputTitleHead fs={"21px"} title={"بيانات المتدرب"} />
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"الرقم التدريبي"}
                placeholder={"الرقم التدريبي"}
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
                label={"القسم"}
                placeholder={"القسم"}
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
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <FormInputTitleHead
              fs={"21px"}
              title={"بيانات منسق و مشرف التدريب التعاوني بالكلية "}
            />
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"أسم المنسق"}
                placeholder={"أسم المنسق"}
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
                label={"البريد الكتروني"}
                placeholder={"البريد الكتروني"}
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
                label={"الجوال"}
                placeholder={"الجوال"}
                idAndfor={"validationCustomFullName"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <FormInputTitleHead fs={"21px"} title={"بيانات منشأة التدريب"} />
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"أسم المنشأة"}
                placeholder={"أسم المنشأة"}
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
                label={"الهاتف الثابت"}
                placeholder={"الهاتف الثابت"}
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
                label={"الفاكس"}
                placeholder={"الفاكس"}
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
                label={"ص.ب"}
                placeholder={"ص.ب"}
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
                label={"العنوان"}
                placeholder={"العنوان"}
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
                label={"فترات الدوام"}
                placeholder={"فترات الدوام"}
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
                label={"عدد الفرص  المتاحة لتخصص التسويق"}
                placeholder={"عدد الفرص  المتاحة لتخصص التسويق"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <FormInputTitleHead
              fs={"21px"}
              title={"بيانات مسؤول التدريب في المنشأة"}
            />
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
                label={"الهاتف الثابت"}
                placeholder={"الهاتف الثابت"}
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
            <div className="col-lg-6">
              <FormInput
                type={"text"}
                onChange={() => null}
                // value={""}
                label={"الختم"}
                placeholder={"الختم يختم اثناء الطباعة النموذج"}
                idAndfor={"validationCustomIdPrivate"}
                isValid={"valid"}
                msgValid={"Gooooooooood !!"}
              />
            </div>
            <div className="col-12">
              <div className="col-10 col-lg-6 col-lg-6 col-xl-5 col-xxl-4  p-2 mt-5 m-auto">
                <Button
                  title={"أرسال"}
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

export default FormsRequestTriningContainer;
