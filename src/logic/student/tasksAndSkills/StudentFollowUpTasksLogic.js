/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  getAllTasks,
  // getTasksByUsername,
} from "../../../redux/actions/tasks/ActionTasks";
import {
  getAllSkills,
  // getSkillsByUsername,
} from "../../../redux/actions/skills/ActionSkills";
import { tokenStudentUsername } from "../../../redux/types/Types";

const StudentFollowUpTasksLogic = () => {
  const myDispatch = useDispatch();

  // tasks
  const myDataTasks = useSelector((state) => state.rootTasks.tasks.data);
  const loadingTasks = useSelector((state) => state.rootTasks.loading);
  // skills
  const myDataSkills = useSelector((state) => state.rootSkills.skills.data);
  const loadingSkills = useSelector((state) => state.rootSkills.loading);
  // anuther
  const [isShowBtn, setIsShowBtn] = useState(true);

  useEffect(() => {
    if (myDataTasks) {
      myDataTasks.length === 0 ? setIsShowBtn(false) : setIsShowBtn(true);
    }
  });

  useEffect(() => {
    myDispatch(getAllTasks(tokenStudentUsername));
    myDispatch(getAllSkills(tokenStudentUsername));
  }, []);

  return [myDataTasks, loadingTasks, isShowBtn, myDataSkills, loadingSkills];
};

export default StudentFollowUpTasksLogic;
