import React from "react";
import Button from "../duplicateComponents/Button";
import FormInput from "../duplicateComponents/FormInput";
import FormInputTitleHead from "../duplicateComponents/FormInputTitleHead";
import FormsContainer from "./FormsContainer";
import TimeLineWithTitleAndSubTitle from "../duplicateComponents/TimeLineWithTitleAndSubTitle";
import TimeLineBoxCardDarkGreen from "../duplicateComponents/TimeLineBoxCardDarkGreen";
import FormInputRadio from "../duplicateComponents/FormInputRadio";
import FormInputRadioContainer from "../duplicateComponents/FormInputRadioContainer";
import PopupDone from "../duplicateComponents/PopupDone";
import TableContainer from "../duplicateComponents/TableContainer";

import FormsEnrollCoopTriningDesiredItem from "./FormsEnrollCoopTriningDesiredItem";

const FormsEnrollCoopTriningContainer = ({ propsTitle, propsSubTitle }) => {
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
              <div className="col-lg-6">
                <FormInput
                  type={"text"}
                  onChange={() => null}
                  // value={""}
                  label={"المعدل التراكمي"}
                  placeholder={"المعدل التراكمي"}
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
                  label={"جوال أخر"}
                  placeholder={"جوال أخر"}
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
                  label={"موقع السكن (الحي - الشارع)"}
                  placeholder={"موقع السكن (الحي - الشارع)"}
                  idAndfor={"validationCustomIdPrivate"}
                  isValid={"valid"}
                  msgValid={"Gooooooooood !!"}
                />
              </div>
              {/* <FormInputTitleHead title={"الرغبات"} fs={"22px"} /> */}
              <div className="col-12">
                <TableContainer
                  className={"my-3"}
                  thead={["#", "الرغبات"]}
                  item={
                    <>
                      <FormsEnrollCoopTriningDesiredItem
                        index={1}
                        title={"وزارة التجارة"}
                      />
                      <FormsEnrollCoopTriningDesiredItem
                        index={2}
                        title={"وزارة التعليم"}
                      />
                      <FormsEnrollCoopTriningDesiredItem
                        index={3}
                        title={"بنك الرياض"}
                      />
                    </>
                  }
                />
              </div>
              <div className="col-lg-6">
                <FormInputRadioContainer
                  title={"الوضع الأكاديمي للمتدربة"}
                  item={
                    <div>
                      <div className="my-2">
                        <FormInputRadio
                          name={"empty"}
                          label={"متفرغة للتدريب التعاوني "}
                          idAndFor={"emptyId1"}
                        />
                      </div>
                      <div className="my-2">
                        <FormInputRadio
                          label={"تبقى مقرر إضافة إلى التدريب التعاوني  "}
                          name={"empty"}
                          idAndFor={"emptyId2"}
                        />
                      </div>
                    </div>
                  }
                  note={
                    "# عند الضغط على الخيار الثاني اذهب الى نموذج طلب الاستثناء"
                  }
                  path={"/student/forms-student-request-exception"}
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
    </div>
  );
};

export default FormsEnrollCoopTriningContainer;
