import React from "react";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import StudentProfileContainer from "../../../component/student/profile/StudentProfileContainer";

const StudentProfilePage = () => {
  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        <Breadcrumbs main={"المتدرب"}
          mainPath={"/student/status"}
          element={["المعلومات الشخصية"]} />
        <StudentProfileContainer/>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentProfilePage;
