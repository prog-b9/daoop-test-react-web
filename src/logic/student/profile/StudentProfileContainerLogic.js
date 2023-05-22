/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentByUsername } from "../../../redux/actions/student/ActionStudent";
import { tokenStudentUsername } from "../../../redux/types/Types";
const StudentProfileContainerLogic = () => {
  const myDispatch = useDispatch();
  
  const myDataStudent = useSelector((state) => state.rootStudent.student);
  const loading = useSelector((state) => state.rootStudent.loading);
  
  useEffect(() => {
    myDispatch(getStudentByUsername(tokenStudentUsername));
  }, []);
  return [myDataStudent, loading];
};

export default StudentProfileContainerLogic;
