/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGradesByUsername } from "../../../redux/actions/grades/ActionGrades";
import { tokenCompanyUsername } from "../../../redux/types/Types";
const FollowUpGradeContainerLogic = () => {
  const myDispatch = useDispatch();


  // api grades
  const myDataGrades = useSelector((state) => state.rootGrades.grades.data);
  const loading = useSelector((state) => state.rootGrades.loading);

  useEffect(() => {
    myDispatch(getGradesByUsername(tokenCompanyUsername));
  }, []);
  return [myDataGrades, loading];
};

export default FollowUpGradeContainerLogic;
