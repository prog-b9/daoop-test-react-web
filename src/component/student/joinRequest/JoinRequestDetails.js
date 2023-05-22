/* eslint-disable no-unused-vars */
import React from "react";
import ButtonLink from "../../duplicateComponents/ButtonLink";
import TimeLineWithTitleAndSubTitle from "../../duplicateComponents/TimeLineWithTitleAndSubTitle";
import TimeLineBoxCardLightGreen from "../../duplicateComponents/TimeLineBoxCardLightGreen";
import StudentJoinRequestPageLogic from "../../../logic/student/joinRequest/StudentJoinRequestPageLogic";
import LoadingTimeLineDarkGreen from "../../duplicateComponents/LoadingTimeLineDarkGreen";

const JoinRequestDetails = ({ propsIdRoute }) => {
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

  return (
    <div className="">
      <TimeLineBoxCardLightGreen
        titleHeader={
          loadingCompany ? (
            <div className="d-flex justify-content-center p-3 placeholder-glow">
              <div
                className="placeholder"
                style={{
                  width: "9rem",
                  backgroundColor: "var(--primary-color)",
                  height: "6rem",
                }}
                role="status"
              >
                <span className="visually-hidden">Loading Img...</span>
              </div>
            </div>
          ) : (
            <div className=" d-flex justify-content-center ">
              <img
                src={imagesCompany[propsIdRoute]}
                className="p-3 bg-white rounded-3"
                style={{ zIndex: "1" }}
                id="img-join-request-details-width"
                alt="logo"
              />
            </div>
          )
        }
        item={
          <div>
            {loadingCompany ? (
              <LoadingTimeLineDarkGreen countPlaceholder={4} />
            ) : (
              myDataCompany &&
              myDataCompany.map((_, i) =>
                i < 8 ? (
                  <TimeLineWithTitleAndSubTitle
                    key={i}
                    title={columnCompanyAr[i]}
                    subTitle={myDataCompany[propsIdRoute][columnCompanyEn[i]]}
                    whatColor={"darkGreen"}
                    fw={"fw-bold"}
                  />
                ) : null
              )
            )}
          </div>
        }
      />
      <div className="col-10 col-md-6 col-lg-5 col-xl-4 p-2 m-auto mt-4">
        <ButtonLink
          title={"التقديم"}
          path={`/student/join-request-fill-form/${propsIdRoute}`}
        />
      </div>
    </div>
  );
};

export default JoinRequestDetails;
