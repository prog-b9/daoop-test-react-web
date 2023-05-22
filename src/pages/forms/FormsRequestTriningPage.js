import React from "react";
import Breadcrumbs from "../../components/duplicateComponents/Breadcrumbs";
import FormsRequestTriningContainer from "../../components/forms/FormsRequestTriningContainer";
import { useSelector } from "react-redux";
import HeaderSopervisor from "../../components/sopervisor/HeaderSopervisor";
import SidebarSopervisorPage from "../sideBar/SidebarSopervisorPage";

const FormsRequestTriningPage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderSopervisor />
        <Breadcrumbs main={formsAddress.mainSopervisor} element={["النماذج", formsAddress.RequestTrining.title]} />
        <FormsRequestTriningContainer
          propsTitle={formsAddress.RequestTrining.title}
          propsSubTitle={formsAddress.RequestTrining.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarSopervisorPage />
      </div>
    </div>
  );
};

export default FormsRequestTriningPage;
