import React from "react";
import HeaderStudent from "../../component/student/header/HeaderStudent";
import Breadcrumbs from "../../component/duplicateComponents/Breadcrumbs";
import SidebarPage from "../sideBar/SidebarStudentPage";
import FormsRequestExceptionContainer from "../../component/forms/FormsRequestExceptionContainer";
import { useSelector } from "react-redux";

const FormsRequestExceptionPage = () => {
  const formsAddress = useSelector((state) => state.rootForms.dataForms);

  return (
    <div className="position-relative">
      {/* here all contant */}
      <div className="main">
        <HeaderStudent />
        <Breadcrumbs main={formsAddress.mainStudent} element={["النماذج", formsAddress.RequestException.title]} />
        <FormsRequestExceptionContainer
          propsTitle={formsAddress.RequestException.title}
          propsSubTitle={formsAddress.RequestException.subTitle}
        />
      </div>
      {/* here side bar */}
      <div className="d-none d-md-block">
        <SidebarPage />
      </div>
    </div>
  );
};

export default FormsRequestExceptionPage;
