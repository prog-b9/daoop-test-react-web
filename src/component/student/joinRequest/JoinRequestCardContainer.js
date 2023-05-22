/* eslint-disable no-unused-vars */
import React from "react";
import JoinRequestCard from "./JoinRequestCard";
import LoadingPlaceholderItem from "../../duplicateComponents/LoadingPlaceholderItem";
import StudentJoinRequestPageLogic from "../../../logic/student/joinRequest/StudentJoinRequestPageLogic";
import AlertMsg from "../../duplicateComponents/AlertMsg";
const JoinRequestCardContainer = () => {
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

  // console.log(loadingCompany);

  // if (myDataCompany) {
  //   console.log(myDataCompany);
  // }

  return (
    <div className="py-5">
      <div className="row gy-4  placeholder-glow">
        {loadingCompany ? (
          Array(6)
            .fill(0)
            .map((_, i) => (
              <JoinRequestCard
                key={i}
                logo={null}
                imgLoad={true}
                title={
                  <LoadingPlaceholderItem
                    isSize={"sm"}
                    col={"col-8"}
                    styleBgColor={"var(--primary-color-opacity)"}
                  />
                }
              />
            ))
        ) : myDataCompany ? (
          myDataCompany.length > 0 ? (
            Object.values(myDataCompany).map((item, i) => (
              <JoinRequestCard
                key={i}
                logo={imagesCompany[i]}
                title={item.company_name}
                path={`/student/join-request-details/${i}`}
                // timeLineCount={1}
              />
            ))
          ) : (
            <div>
              <AlertMsg msg={"لاتوجد جهات"} />
            </div>
          )
        ) : (
          Array(6)
            .fill(0)
            .map((_, i) => (
              <JoinRequestCard
                key={i}
                logo={null}
                imgLoad={true}
                title={
                  <LoadingPlaceholderItem
                    isSize={"sm"}
                    col={"col-8"}
                    styleBgColor={"var(--primary-color-opacity)"}
                  />
                }
              />
            ))
        )}
        {/* {loadingCompany ? (
          Array(6)
            .fill(0)
            .map((_, i) => (
              <JoinRequestCard
                key={i}
                logo={null}
                imgLoad={true}
                title={
                  <LoadingPlaceholderItem
                    isSize={"sm"}
                    col={"col-8"}
                    styleBgColor={"var(--primary-color-opacity)"}
                  />
                }
                path={"/student/join-request-details/:id"}
              />
            ))
        ) : myDataCompany && Object.values(myDataCompany).length > 0 ? (
          Object.values(myDataCompany).map((item, i) => (
            <JoinRequestCard
              key={i}
              logo={imagesCompany[i]}
              title={item.company_name}
              path={`/student/join-request-details/${i}`}
              // timeLineCount={1}
            />
          ))
        ) : (
         
        )} */}
      </div>
    </div>
  );
};

export default JoinRequestCardContainer;
