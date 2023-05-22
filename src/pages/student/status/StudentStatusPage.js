/* eslint-disable no-unused-vars */
import React from "react";
import SidebarStudentPage from "../../sideBar/SidebarStudentPage";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
// import SidebarPage from "../../sideBar/SidebarPage";
import StudentStatusContainer from "../../../component/student/status/StudentStatusContainer";
// import StudentStatusDesiresContainer from "../../../components/student/status/StudentStatusDesiresContainer";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
import StatusCard from "../../../component/duplicateComponents/StatusCard";
import LoadingPlaceholderItem from "../../../component/duplicateComponents/LoadingPlaceholderItem";
import StudentStatusLogic from "../../../logic/student/student/StudentStatusLogic";

const StudentStatusPage = () => {
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
    <div className="position-relative">
      {/* here all contant */}
      <div className="main ">
        <HeaderStudent />
        {/* BreadCumb Router */}
        <Breadcrumbs
          main={"المتدرب"}
          mainPath={"/student/status"}
          element={["حالة المتدرب"]}
        />
        <div className="container p-3 p-md-5">
          <div>
            {loadingStudentByUsername ? (
              <div className="placeholder-glow">
                <StatusCard
                  name={
                    <LoadingPlaceholderItem
                      isSize={"lg"}
                      col={"col-7"}
                      bgColor={"white"}
                    />
                  }
                  nameId={
                    <LoadingPlaceholderItem
                      isSize={"sm"}
                      col={"col-3"}
                      bgColor={"white"}
                    />
                  }
                  collageName={
                    <div>
                      <LoadingPlaceholderItem
                        isSize={"sm"}
                        col={"col-12"}
                        bgColor={"white"}
                      />
                      <LoadingPlaceholderItem
                        isSize={"sm"}
                        col={"col-7"}
                        bgColor={"white"}
                      />
                    </div>
                  }
                  majorName={<span className="px-5 mx-3"></span>}
                  status={null}
                />
              </div>
            ) : myDataStudentByUsername &&
              Object.values(myDataStudentByUsername).length > 0 ? (
              <StatusCard
                name={
                  myDataStudentByUsername.name === null
                    ? "-"
                    : myDataStudentByUsername.name
                }
                nameId={
                  myDataStudentByUsername.student_id === null
                    ? "-"
                    : myDataStudentByUsername.student_id
                }
                collageName={
                  myDataStudentByUsername.collage_name === null
                    ? "-"
                    : myDataStudentByUsername.collage_name
                }
                majorName={
                  myDataStudentByUsername.major === null
                    ? "-"
                    : myDataStudentByUsername.major
                }
                status={true}
              />
            ) : null}
          </div>
          <StudentStatusContainer />
        </div>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarStudentPage />
      </div>
    </div>
  );
};

export default StudentStatusPage;
