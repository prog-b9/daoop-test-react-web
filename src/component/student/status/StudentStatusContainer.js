/* eslint-disable no-unused-vars */
import React from "react";
import TimeLineWithTitleAndSubTitle from "../../duplicateComponents/TimeLineWithTitleAndSubTitle";
import TimeLineBoxCardLightGreen from "../../duplicateComponents/TimeLineBoxCardLightGreen";
import TimeLineBoxCardDarkGreen from "../../duplicateComponents/TimeLineBoxCardDarkGreen";
import Taps from "../../duplicateComponents/Taps";
// import StudentStatusDesiresItem from "./StudentStatusDesiresItem";
import LoadingTimeLineLightGreen from "../../duplicateComponents/LoadingTimeLineLightGreen";
import LoadingTimeLineDarkGreen from "../../duplicateComponents/LoadingTimeLineDarkGreen";
import AlertMsg from "../../duplicateComponents/AlertMsg";
import TableContainer from "../../duplicateComponents/TableContainer";
import StudentStatusDesiresItemTr from "./StudentStatusDesiresItemTr";
import LoadingPlaceholderItem from "../../duplicateComponents/LoadingPlaceholderItem";
import StudentStatusLogic from "../../../logic/student/student/StudentStatusLogic";

const StudentStatusContainer = () => {
  const [
    myDataStudentByUsername,
    loadingStudentByUsername,
    myDataSopervisorByUsername,
    loadingSopervisorByUsername,
    myDataCompanyByUsername,
    loadingCompanyByUsername,
    myDataSubmissitionByUsername,
    loadingSubmissitionByUsername,
    columnCompanyAr,
    columnCompanyEn,
    columnSopervisorAr,
    columnSopervisorEn,
  ] = StudentStatusLogic();

  return (
    <div className="row my-5 gy-3">
      <Taps
        title={["معلومات مشرفيك", "معلومات الجهة", "حالة الرغبات"]}
        charIdAndTarget={["a", "b", "c"]}
        titleItem={[
          <TimeLineBoxCardLightGreen
            titleHeader={"معلومات مشرفيك"}
            fs={"22px"}
            item={
              <div>
                {loadingSopervisorByUsername ? (
                  <LoadingTimeLineDarkGreen countPlaceholder={4} />
                ) : myDataSopervisorByUsername &&
                  Object.keys(myDataSopervisorByUsername).length > 0 ? (
                  Object.values(myDataSopervisorByUsername).map((item, i) =>
                    i < columnSopervisorAr.length - 1 ? (
                      <TimeLineWithTitleAndSubTitle
                        key={i}
                        title={columnSopervisorAr[i]}
                        subTitle={
                          myDataSopervisorByUsername[columnSopervisorEn[i]] ===
                          null
                            ? "-"
                            : myDataSopervisorByUsername[columnSopervisorEn[i]]
                        }
                        whatColor={"darkGreen"}
                      />
                    ) : null
                  )
                ) : (
                  <TimeLineWithTitleAndSubTitle
                    title={"لاتوجد بيانات"}
                    whatColor={"darkGreen"}
                  />
                )}
              </div>
            }
          />,
          <TimeLineBoxCardDarkGreen
            fs={"22px"}
            titleHeader={"معلومات الجهة"}
            item={
              <div>
                {loadingCompanyByUsername ? (
                  <LoadingTimeLineLightGreen countPlaceholder={4} />
                ) : myDataCompanyByUsername &&
                  Object.keys(myDataCompanyByUsername).length > 0 ? (
                  Object.values(myDataCompanyByUsername).map((item, i) =>
                    i < columnCompanyAr.length - 1 ? (
                      <TimeLineWithTitleAndSubTitle
                        key={i}
                        title={columnCompanyAr[i]}
                        subTitle={myDataCompanyByUsername[columnCompanyEn[i]]}
                        whatColor={"lightGreen"}
                      />
                    ) : null
                  )
                ) : (
                  <TimeLineWithTitleAndSubTitle
                    title={"لاتوجد بيانات"}
                    whatColor={"lightGreen"}
                  />
                )}
              </div>
            }
          />,
          <div className="placeholder-glow">
            {myDataSubmissitionByUsername &&
            Object.values(myDataSubmissitionByUsername).length > 0 ? (
              <TableContainer
                thead={["#", "أسم الجهة", "حالة الرغبات"]}
                charIdAndTarget={["a", "b", "c"]}
                item={
                  <>
                    {loadingSubmissitionByUsername
                      ? Array(2)
                          .fill(0)
                          .map((_, i) => (
                            <StudentStatusDesiresItemTr
                              key={i}
                              index={i + 1}
                              companyName={
                                <LoadingPlaceholderItem
                                  isSize={"lg"}
                                  styleBgColor={"var(--primary-color-opacity)"}
                                  col={"col-12 col-lg-6 "}
                                />
                              }
                              isStatus={null}
                            />
                          ))
                      : myDataSubmissitionByUsername &&
                        Object.values(myDataSubmissitionByUsername).map(
                          (item, i) => (
                            <StudentStatusDesiresItemTr
                              key={i}
                              index={i + 1}
                              companyName={item.company_name}
                              isStatus={parseInt(+item.approved)}
                            />
                          )
                        )}
                  </>
                }
              />
            ) : (
              <AlertMsg msg={"لاتوجد رغبات"} />
            )}
          </div>,
        ]}
      />
    </div>
  );
};

export default StudentStatusContainer;
