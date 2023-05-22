import React from "react";
import SidebarPage from "../../sideBar/SidebarStudentPage";
import HeaderStudent from "../../../component/student/header/HeaderStudent";
import FollowUpPollCardStudentContainer from "../../../component/student/followUp/poll/FollowUpPollCardStudentContainer";
import Breadcrumbs from "../../../component/duplicateComponents/Breadcrumbs";
import FollowUpInstructionsCard from "../../../component/student/followUp/poll/FollowUpInstructionsCard";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllStudent } from "../../../redux/actions/ActionStudent";
// import { useEffect } from "react";

const StudentFollowUpPollPage = () => {
  // const myDispatch = useDispatch();
  // useEffect(() => {
  //   myDispatch(getAllStudent());
  // }, []);
  // const myDataPosts = useSelector((state) => state.rootStudent.student.data);
  // const loading = useSelector((state) => state.rootStudent.loading);
  // console.log(myDataPosts.data);
  // console.log(loading);
  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        <Breadcrumbs
          mainPath={"/student/status"}

          main={"المتدرب"}
          element={["متابعة تنفيذ الخطة", "استطلاع رأي"]}
        />
        <div className="container p-3 p-md-5">
          <FollowUpInstructionsCard />
          <FollowUpPollCardStudentContainer />
        </div>
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default StudentFollowUpPollPage;
