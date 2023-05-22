import React from "react";
import Breadcrumbs from "../../components/duplicateComponents/Breadcrumbs";
import FormsDirectTriningContainer from "../../components/forms/FormsDirectTriningContainer";
import { useSelector } from "react-redux";
import HeaderSopervisor from "../../components/sopervisor/HeaderSopervisor";
import SidebarSopervisorPage from "../sideBar/SidebarSopervisorPage";

const FormsDirectTriningPage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderSopervisor />
        <Breadcrumbs
          main={formsAddress.mainSopervisor}
          element={["النماذج", formsAddress.DirectTrining.title]}
        />
        <FormsDirectTriningContainer
          propsTitle={formsAddress.DirectTrining.title}
          propsSubTitle={formsAddress.DirectTrining.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarSopervisorPage />
      </div>
    </div>
  );
};

export default FormsDirectTriningPage;
