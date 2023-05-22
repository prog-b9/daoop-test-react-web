/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import FollowUpTaskCard from "./FollowUpTaskCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTasks } from "../../../../redux/actions/tasks/ActionTasks";
import LoadingPlaceholderItem from "../../../duplicateComponents/LoadingPlaceholderItem";
import AlertMsg from "../../../duplicateComponents/AlertMsg";
import StudentFollowUpTasksLogic from "../../../../logic/student/tasksAndSkills/StudentFollowUpTasksLogic";

const FollowUpTaskCardContainer = () => {
  const [myDataTasks, loadingTasks, isShowBtn, myDataSkills, loadingSkills] =
    StudentFollowUpTasksLogic();

    console.log(loadingTasks)

  return (
    <div className="row gy-3 placeholder-glow">
      {loadingTasks ? (
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
      ) : myDataTasks && Object.values(myDataTasks).length > 0 ? (
        myDataTasks &&
        Object.values(myDataTasks).map((item, i) => (
          <FollowUpTaskCard
            key={i}
            isDone={null}
            title={item.task_name}
            subTitle={`${item.task_details}`}
          />
        ))
      ) : (
        <AlertMsg msg={"لاتوجد مهام"} />
      )}
    </div>
  );
};

export default FollowUpTaskCardContainer;
