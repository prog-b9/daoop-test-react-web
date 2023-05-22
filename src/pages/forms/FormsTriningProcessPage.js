import React from "react";
import Breadcrumbs from "../../components/duplicateComponents/Breadcrumbs";
import FormsTriningProcessContainer from "../../components/forms/FormsTriningProcessContainer";
import { useSelector } from "react-redux";
import HeaderSopervisor from "../../components/sopervisor/HeaderSopervisor";
import SidebarSopervisorPage from "../sideBar/SidebarSopervisorPage";

const FormsTriningProcessPage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderSopervisor />
        <Breadcrumbs
          main={formsAddress.mainSopervisor}
          element={["النماذج", formsAddress.TriningProcess.title]}
        />
        <FormsTriningProcessContainer
          propsTitle={formsAddress.TriningProcess.title}
          propsSubTitle={formsAddress.TriningProcess.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarSopervisorPage />
      </div>
    </div>
  );
};

export default FormsTriningProcessPage;
