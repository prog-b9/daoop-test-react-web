import React from "react";
import Button from "../duplicateComponents/Button";
import FormInput from "../duplicateComponents/FormInput";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormsContainer from "./FormsContainer";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import PopupDone from "../duplicateComponents/PopupDone";

const FormsGuidanceContainer = ({ propsTitle, propsSubTitle }) => {
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
        // title Head put becouse if the  print
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

export default FormsGuidanceContainer;
