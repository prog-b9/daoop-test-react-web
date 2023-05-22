import React from "react";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
// import TimeLine from "../../../components/student/TimeLine";
import JoinRequestFillForm from "../../../component/student/joinRequest/JoinRequestFillForm";
// import { useSelector } from "react-redux";
// import { useState } from "react";

const StudentJoinRequestFillFormPage = () => {
  // const countTimeLine = useSelector((state) => state.rootForms.countTimeLine);

  // number timeline now
  // const [Now, setNow] = useState(2);
  // const countTimeLineNow = (e) => {
  //   setNow(e);
  // };

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
          {/* <TimeLine count={countTimeLine + Now} /> */}
          {/* <JoinRequestFillForm test={countTimeLineNow} /> */}
          <JoinRequestFillForm />
        </div>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentJoinRequestFillFormPage;
