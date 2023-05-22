import React from "react";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
import FollowUpGradeContainer from "../../../component/student/followUp/grades/FollowUpGradeContainer";

const StudentFollowUpGradePage = () => {
  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        <Breadcrumbs
          mainPath={"/student/status"}
          main={"المتدرب"}
          element={["متابعة تنفيذ الخطة", "الدرجات"]}
          />
          <h1>Fixed Api (Grades) </h1>
        <FollowUpGradeContainer />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentFollowUpGradePage;
