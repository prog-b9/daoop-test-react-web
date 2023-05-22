import React from "react";
import Breadcrumbs from "../../components/duplicateComponents/Breadcrumbs";
import FormsTriningAvalibleInCompanyContainer from "../../components/forms/FormsTriningAvalibleInCompanyContainer";
import { useSelector } from "react-redux";
import SidebarSopervisorPage from "../sideBar/SidebarSopervisorPage";
import HeaderSopervisor from "../../components/sopervisor/HeaderSopervisor";

const FormsTriningAvalibleInCompanyPage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderSopervisor />
        <Breadcrumbs
          main={formsAddress.mainSopervisor}
          element={["النماذج", formsAddress.TriningAvalibleInCompany.title]}
        />
        <FormsTriningAvalibleInCompanyContainer
          propsTitle={formsAddress.TriningAvalibleInCompany.title}
          propsSubTitle={formsAddress.TriningAvalibleInCompany.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarSopervisorPage />
      </div>
    </div>
  );
};

export default FormsTriningAvalibleInCompanyPage;
