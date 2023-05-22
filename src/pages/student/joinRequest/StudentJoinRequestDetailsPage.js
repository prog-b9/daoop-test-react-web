import React from "react";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
// import TimeLine from "../../../component/student/TimeLine";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import JoinRequestDetails from "../../../component/student/joinRequest/JoinRequestDetails";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StudentJoinRequestDetailsPage = () => {
  // const countTimeLine = useSelector((state) => state.rootForms.countTimeLine);
  const idRoute = useParams();


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

        <div className="container p-3 p-md-5 ">
          {/* TimeLine */}
          {/* <TimeLine count={countTimeLine + 1} /> */}
          <JoinRequestDetails propsIdRoute={idRoute.id}/>
        </div>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentJoinRequestDetailsPage;
