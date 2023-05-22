/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import FollowUpGradeTotalCard from "./FollowUpGradeTotalCard";
import TableContainer from "../../../duplicateComponents/TableContainer";
import FollowUpGradeTableCard from "./FollowUpGradeTableCard";
import Taps from "../../../duplicateComponents/Taps";

import LoadingPlaceholderItem from "../../../duplicateComponents/LoadingPlaceholderItem";
import FollowUpGradeContainerLogic from "../../../../logic/student/grades/FollowUpGradeContainerLogic";
const FollowUpGradeContainer = () => {
  const [myDataGrades, loading] = FollowUpGradeContainerLogic();

  return (
    <div className="container p-3 p-md-5 mt-4 mt-md-0 placeholder-glow">
      <Taps
        title={["ملخص الدرجات", "تفاصيل الدرجات النهائية"]}
        charIdAndTarget={["a", "b"]}
        titleItem={[
          <div className="col-12 col-lg-6 placeholder-glow">
            {loading ? (
              <FollowUpGradeTotalCard
                grade={
                  <LoadingPlaceholderItem
                    isSize={"sm"}
                    col={"col-3 col-sm-2 mx-2"}
                    styleBgColor={"var(--green-light-color)"}
                  />
                }
                percent={null}
              />
            ) : myDataGrades && Object.values(myDataGrades).length > 0 ? (
              <FollowUpGradeTotalCard
                grade={myDataGrades[0].total}
                percent={42}
              />
            ) : null}
          </div>,
          <TableContainer
            className={"my-5"}
            thead={[
              "#",
              "البنود",
              "درجة التقييم",
              "الدرجة المستحقة",
              "نسبة الانجاز",
            ]}
            item={
              <>
                {loading ? (
                  <>
                    <FollowUpGradeTableCard
                      index={1}
                      title={
                        <LoadingPlaceholderItem
                          isSize={"lg"}
                          styleBgColor={"var(--primary-color-opacity)"}
                          col={"col-12 "}
                        />
                      }
                      limitGrade={40}
                      finalTotal={0}
                    />

                    <FollowUpGradeTableCard
                      index={2}
                      title={
                        <LoadingPlaceholderItem
                          isSize={"lg"}
                          styleBgColor={"var(--primary-color-opacity)"}
                          col={"col-12 "}
                        />
                      }
                      limitGrade={40}
                      finalTotal={0}
                    />
                    <FollowUpGradeTableCard
                      index={3}
                      title={
                        <LoadingPlaceholderItem
                          isSize={"lg"}
                          styleBgColor={"var(--primary-color-opacity)"}
                          col={"col-12 "}
                        />
                      }
                      limitGrade={40}
                      finalTotal={0}
                    />
                  </>
                ) : myDataGrades && // <LoadingTimeLineDarkGreen countPlaceholder={4} />
                  Object.values(myDataGrades).length > 0 ? (
                  <>
                    <FollowUpGradeTableCard
                      index={1}
                      title={"تقييم جهة التدريب"}
                      limitGrade={40}
                      // grade={null}
                      finalTotal={parseInt(myDataGrades[0].training_provider)}
                    />
                    <FollowUpGradeTableCard
                      index={2}
                      title={"تقييم مشرف التدريب"}
                      limitGrade={30}
                      // grade={12}
                      // finalTotal={parseInt(
                      //   myDataGrades[0].Training_supervisor_evaltion
                      // )}
                    />
                    <FollowUpGradeTableCard
                      index={3}
                      title={"تقييم ومناقشة التقرير النهائي "}
                      limitGrade={30}
                      // grade={35}
                      finalTotal={parseInt(
                        myDataGrades[0].final_report_evaltion
                      )}
                    />
                  </>
                ) : null}
              </>
            }
          />,
        ]}
      />
      {/* <div className="row ">
        <div className="col-12 col-lg-6 mt-4 m-auto">
          <FollowUpGradeTotalCard grade={23} percent={42} />
        </div>
      </div> */}
      {/* <TableContainer
        className={"my-5"}
        thead={["#", "البنود", "الدرجة", "نسبة الانجاز"]}
        item={
          <>
            <FollowUpGradeTableCard
              index={1}
              title={"تقييم جهة التدريب"}
              limitGrade={30}
              grade={null}
              percent={null}
            />
            <FollowUpGradeTableCard
              index={2}
              title={"تقييم مشرف التدريب"}
              limitGrade={40}
              grade={12}
              percent={49}
            />
            <FollowUpGradeTableCard
              index={3}
              title={"تقييم ومناقشة التقرير النهائي "}
              limitGrade={30}
              grade={35}
              percent={100}
            />
          </>
        }
      /> */}
      {/* <div className="row ">
        <FormInputTitleHead
          title={"تفاصيل الدرجات"}
          fs={"30px"}
          textAlign={"center"}
        />
        <div className="col-12 col-lg-6">
          <TimeLineBoxCardDarkGreen
            titleHeader={"تقييم المتدرب من جهة التدريب"}
            fs={"20px"}
            item={
              <div>
                <TimeLineWithTitleAndSubTitle
                  title={"تقبل التوجيهات والارشادات"}
                  subTitle={"7"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"lightGreen"}
                />
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"lightGreen"}
                />
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"lightGreen"}
                />
              </div>
            }
          />
        </div>
        <div className="col-12 col-lg-6">
          <TimeLineBoxCardLightGreen
            titleHeader={"تقييم مشرف التدريب"}
            fs={"20px"}
            item={
              <div>
                <TimeLineWithTitleAndSubTitle
                  title={"تقبل التوجيهات والارشادات"}
                  subTitle={"7"}
                  whatColor={"darkGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"darkGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"darkGreen"}
                />
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"darkGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"darkGreen"}
                />
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"darkGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"darkGreen"}
                />
              </div>
            }
          />
        </div>
        <div className="col-12 col-lg-6">
          <TimeLineBoxCardDarkGreen
            titleHeader={"تقييم ومناقشة التقرير النهائي"}
            fs={"20px"}
            item={
              <div>
                <TimeLineWithTitleAndSubTitle
                  title={"تقبل التوجيهات والارشادات"}
                  subTitle={"7"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"lightGreen"}
                />
                <TimeLineWithTitleAndSubTitle
                  title={"المظهر الشخصي"}
                  subTitle={"5"}
                  whatColor={"lightGreen"}
                />{" "}
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"lightGreen"}
                />
                <TimeLineWithTitleAndSubTitle
                  title={"العلاقة مع زملاء العمل"}
                  subTitle={"6"}
                  whatColor={"lightGreen"}
                />
              </div>
            }
          />
        </div>
      </div> */}
    </div>
  );
};

export default FollowUpGradeContainer;
