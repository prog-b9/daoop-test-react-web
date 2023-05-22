/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import FollowUpTaskCard from "../tasks/FollowUpTaskCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllSkills } from "../../../../redux/actions/skills/ActionSkills";
import LoadingPlaceholderItem from "../../../duplicateComponents/LoadingPlaceholderItem";
import AlertMsg from "../../../duplicateComponents/AlertMsg";
import StudentFollowUpTasksLogic from "../../../../logic/student/tasksAndSkills/StudentFollowUpTasksLogic";

const StudentFollowUpSkillsContainer = () => {
  // const myDispatch = useDispatch();
  // useEffect(() => {
  //   myDispatch(getAllSkills());
  // }, []);
  // const myDataSkills = useSelector((state) => state.rootSkills.skills.data);
  // const loading = useSelector((state) => state.rootSkills.loading);
  const [myDataTasks, loadingTasks, isShowBtn, myDataSkills, loadingSkills] =
    StudentFollowUpTasksLogic();

  return (
    <div className="row gy-3 placeholder-glow">
      {loadingSkills ? (
        Array(4)
          .fill(0)
          .map((_, i) => (
            <FollowUpTaskCard
              key={i}
              isDone={null}
              title={
                <LoadingPlaceholderItem
                  col={"col-12 px-5 "}
                  styleBgColor={"var(--primary-color-opacity)"}
                  isSize={"lg"}
                />
              }
              subTitle={
                <LoadingPlaceholderItem
                  col={"col-12"}
                  styleBgColor={"var(--primary-color-opacity)"}
                  isSize={"sm"}
                />
              }
            />
          ))
      ) : myDataSkills && Object.values(myDataSkills).length > 0 ? (
        myDataSkills &&
        Object.values(myDataSkills).map((item, i) => (
          <FollowUpTaskCard key={i} isDone={null} title={item.skill_name} />
        ))
      ) : (
        <AlertMsg msg={"لاتوجد مهارات"} />
      )}
    </div>
  );
};

export default StudentFollowUpSkillsContainer;
