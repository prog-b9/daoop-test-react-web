import React from "react";
import Breadcrumbs from "../../components/duplicateComponents/Breadcrumbs";
import FormsGuidanceContainer from "../../components/forms/FormsGuidanceContainer";
import { useSelector } from "react-redux";
import SidebarSopervisorPage from "../sideBar/SidebarSopervisorPage";
import HeaderSopervisor from "../../components/sopervisor/HeaderSopervisor";

const FormsGuidancePage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderSopervisor />
        <Breadcrumbs
          main={formsAddress.mainSopervisor}
          element={["النماذج", formsAddress.Guidance.title]}
        />
        <FormsGuidanceContainer
          propsTitle={formsAddress.Guidance.title}
          propsSubTitle={formsAddress.Guidance.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarSopervisorPage />
      </div>
    </div>
  );
};

export default FormsGuidancePage;
