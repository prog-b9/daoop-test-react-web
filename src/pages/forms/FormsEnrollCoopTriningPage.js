import React from "react";
import HeaderStudent from "../../component/student/header/HeaderStudent";
import Breadcrumbs from "../../component/duplicateComponents/Breadcrumbs";
import SidebarPage from "../sideBar/SidebarStudentPage";
import FormsEnrollCoopTriningContainer from "../../component/forms/FormsEnrollCoopTriningContainer";
import { useSelector } from "react-redux";

const FormsEnrollCoopTriningPage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        <Breadcrumbs
          main={formsAddress.mainStudent}
          element={["النماذج", formsAddress.EnrollCoopTrining.title]}
        />
        <FormsEnrollCoopTriningContainer
          propsTitle={formsAddress.EnrollCoopTrining.title}
          propsSubTitle={formsAddress.EnrollCoopTrining.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default FormsEnrollCoopTriningPage;
