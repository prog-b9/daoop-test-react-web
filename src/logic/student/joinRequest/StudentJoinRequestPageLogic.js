/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompany } from "../../../redux/actions/company/ActionCompany";
import { getStudentByUsername } from "../../../redux/actions/student/ActionStudent";

import { useState } from "react";
import { tokenStudentUsername } from "../../../redux/types/Types";
import {
  addSubmissition,
  getSubmissitionByUsername,
} from "../../../redux/actions/submissition/ActionSubmissition";
import { useParams } from "react-router-dom";
import { NotificationsToast } from "../../../component/duplicateComponents/NotificationsToast";
const StudentJoinRequestPageLogic = () => {
  const idRoute = useParams();

  const myDispatch = useDispatch();

  // console.log(idRoute.id);
  const [load, setLoad] = useState(true);

  // api get all compnay
  const myDataCompany = useSelector((state) => state.rootCompany.company.data);
  const loadingCompany = useSelector((state) => state.rootCompany.loading);
  // api get all studnet
  const myDataStudent = useSelector((state) => state.rootStudent.student);
  const loadingStudent = useSelector((state) => state.rootStudent.loading);

  const responseSubmissitionByUsername = useSelector(
    (state) => state.rootSubmissitions.submissition
  );

  // const loadingSubmissitionByUsername = useSelector(
  //   (state) => state.rootSubmissitions.loading
  // );

  // const [studentId, setStudentId] = useState(null);
  // const [companyName, setCompanyName] = useState(null);
  // const [idMsgError, setIdMsgError] = useState(false);

  // if (myDataStudent && responseSubmissitionByUsername) {
  //   // console.log(myDataStudent);
  //   console.log(responseSubmissitionByUsername);
  // }

  const imagesCompany = [
    "../../images/logo-ministry-commerce.png",
    "../../images/logo-tvtc.png",
    "../../images/logo-aramco.png",
    "../../images/logo-learn.png",
    "../../images/logo-bank.png",
    "../../images/logo-ministry-commerce.png",
    "../../images/logo-tvtc.png",
    "../../images/logo-aramco.png",
    "../../images/logo-learn.png",
    "../../images/logo-bank.png",
  ];

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

  // add submisstion
  const submitAddSubmisstion = async (e) => {
    e.preventDefault();
    setLoad(true);
    await myDispatch(
      addSubmissition({
        "student-id": myDataStudent.student_id,
        name: myDataCompany[idRoute.id].company_name,
      })
    );
    setLoad(false);
  };
  ///////////////////////////
  useEffect(() => {
    if (load === false) {
      if (responseSubmissitionByUsername.data === "done") {
        NotificationsToast("done", null, "تم إضافة الرغبة");
      } else if (
        responseSubmissitionByUsername.data === "already in this company"
      ) {
        NotificationsToast("warn", null, "الجهة مضافة سابقاً");
      } else {
        NotificationsToast("error", null, "  هناك مشكلة في إضافة الجهة");
      }
    }
  }, [load]);

  useEffect(() => {
    myDispatch(getAllCompany());
    myDispatch(getStudentByUsername(tokenStudentUsername));
    myDispatch(getSubmissitionByUsername(tokenStudentUsername));
  }, []);

  return [
    myDataCompany,
    loadingCompany,
    imagesCompany,
    columnCompanyAr,
    columnCompanyEn,
    myDataStudent,
    loadingStudent,
    responseSubmissitionByUsername,
    idRoute,
    submitAddSubmisstion,
  ];
};

export default StudentJoinRequestPageLogic;
