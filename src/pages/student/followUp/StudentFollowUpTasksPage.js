import React from "react";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import FollowUpTaskCardContainer from "../../../component/student/followUp//tasks/FollowUpTaskCardContainer";
import FollowUpTaskCardImplementContainer from "../../../component/student/followUp/tasks/FollowUpTaskCardImplementContainer";
import FollowUpTaskImplementYesOrNoContainer from "../../../component/student/followUp/tasks/FollowUpTaskImplementYesOrNoContainer";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
import Taps from "../../../component/duplicateComponents/Taps";
import StudentFollowUpSkillsContainer from "../../../component/student/followUp/skills/StudentFollowUpSkillsContainer";
const StudentFollowUpTasksPage = () => {
  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        {/* BreadCumb Router */}
        <Breadcrumbs
          main={"المتدرب"}
          mainPath={"/student/status"}
          element={["متابعة تنفيذ الخطة", "المهام والمهارات"]}
        />
        <div className=" container mt-4 p-3 p-md-5">
          <h1>fixed api (Tasks , Skills) and Btn Hide </h1>
          <Taps
            title={[
              "جميع المهام",
              "تنفيذ المهام",
              "حالة المهام",
              "جميع المهارات",
            ]}
            charIdAndTarget={["a", "b", "c", "d"]}
            titleItem={[
              <FollowUpTaskCardContainer />,
              <FollowUpTaskCardImplementContainer />,
              <FollowUpTaskImplementYesOrNoContainer />,
              <StudentFollowUpSkillsContainer />,
            ]}
          />
        </div>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentFollowUpTasksPage;
