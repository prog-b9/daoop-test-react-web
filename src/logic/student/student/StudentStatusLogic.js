/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentByUsername } from "../../../redux/actions/student/ActionStudent";
import {
  tokenCompanyUsername,
  tokenSopervisorUsername,
  tokenStudentUsername,
} from "../../../redux/types/Types";
import { getSubmissitionByUsername } from "../../../redux/actions/submissition/ActionSubmissition";
import { getCompanyByUsername } from "../../../redux/actions/company/ActionCompany";
import { getSopervisorByUsername } from "../../../redux/actions/sopervisor/ActionSopervisor";

const StudentStatusLogic = () => {
  const myDispatch = useDispatch();

  // Start Student
  const myDataStudentByUsername = useSelector(
    (state) => state.rootStudent.student
  );

  const loadingStudentByUsername = useSelector(
    (state) => state.rootStudent.loading
  );
  // End Student
  ///////////////////////////////////////////
  //Start Company by username
  const myDataCompanyByUsername = useSelector(
    (state) => state.rootCompany.company
  );
  const loadingCompanyByUsername = useSelector(
    (state) => state.rootCompany.loading
  );
  //End Company by username
  ///////////////////////////////////////////
  //Start Submissition by username
  const myDataSubmissitionByUsername = useSelector(
    (state) => state.rootSubmissitions.submissition.data
  );
  const loadingSubmissitionByUsername = useSelector(
    (state) => state.rootSubmissitions.loading
  );
  //End Submissition by username
  ///////////////////////////////////////////
  //Start sopervisor by username
  const myDataSopervisorByUsername = useSelector(
    (state) => state.rootSopervisor.sopervisor.data
  );
  const loadingSopervisorByUsername = useSelector(
    (state) => state.rootSopervisor.loading
  );
  //End sopervisor by username
  ///////////////////////////////////////////

  //   if (
  //     myDataStudentByUsername &&
  //     myDataCompanyByUsername &&
  //     myDataSopervisorByUsername &&
  //     myDataSubmissitionByUsername
  //   ) {
  // console.log(myDataStudentByUsername);
  // console.log(myDataCompanyByUsername);
  // console.log(myDataSopervisorByUsername);
  // console.log(myDataSubmissitionByUsername);
  //   }

  ///////////columns Ar <==> En ////////////

  const columnCompanyEn = [
    "company_name",
    "about",
    "email",
    "phone",
    "address",
    "Working_hours",
    "Fax",
    "Zip_code",
  ];

  const columnCompanyAr = [
    "أسم الجهة",
    "نبذة عن الجهة",
    "البريد الإلكتروني",
    "رقم الهاتف",
    "العنوان",
    "ساعات العمل",
    "فاكس",
    "الرمز البريدي",
  ];

  const columnSopervisorAr = [
    "أسم المشرف",
    "أسم الكلية",
    "قسم المشرف",
    "الوظيفة",
    "البريد الإلكتروني",
    "رقم الهاتف",
  ];
  const columnSopervisorEn = [
    "name",
    "collage_name",
    "department",
    "job_type",
    "email",
    "phone",
  ];

  useEffect(() => {
    // username student
    myDispatch(getStudentByUsername(tokenStudentUsername));
    // username Student
    myDispatch(getSubmissitionByUsername(tokenStudentUsername));
    // username company
    myDispatch(getCompanyByUsername(tokenCompanyUsername));
    // username sopervisor
    myDispatch(getSopervisorByUsername(tokenSopervisorUsername));
  }, []);

  // console.log(loadingStudentByUsername);

  return [
    myDataStudentByUsername,
    loadingStudentByUsername,
    myDataSopervisorByUsername,
    loadingSopervisorByUsername,
    myDataCompanyByUsername,
    loadingCompanyByUsername,
    myDataSubmissitionByUsername,
    loadingSubmissitionByUsername,
    columnCompanyAr,
    columnCompanyEn,
    columnSopervisorAr,
    columnSopervisorEn,
  ];
};

export default StudentStatusLogic;
