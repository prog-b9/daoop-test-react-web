import React from "react";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
// import TimeLine from "../../../components/student/TimeLine";
import JoinRequestCardContainer from "../../../component/student/joinRequest/JoinRequestCardContainer";
// import { useSelector } from "react-redux";

const StudentJoinRequestPage = () => {
  // const countTimeLine = useSelector((state) => state.rootForms.countTimeLine);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        {/* BreadCumb Router */}
        <Breadcrumbs
          main={"المتدرب"}
          mainPath={"/student/status"}
          element={["طلب انضمام للتدريب"]}
        />
        <div className="container p-3 p-md-5">
          {/* TimeLine */}
          {/* <TimeLine count={countTimeLine} /> */}
          <JoinRequestCardContainer />
        </div>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentJoinRequestPage;
