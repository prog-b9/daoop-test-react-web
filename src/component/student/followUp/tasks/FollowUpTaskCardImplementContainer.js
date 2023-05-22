/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import FollowUpTaskCardImplement from "./FollowUpTaskCardImplement";
import Button from "../../../duplicateComponents/Button";
import PopupDone from "../../../duplicateComponents/PopupDone";
import PopupAreYouSure from "../../../duplicateComponents/PopupAreYouSure";

import LoadingPlaceholderItem from "../../../duplicateComponents/LoadingPlaceholderItem";
import AlertMsg from "../../../duplicateComponents/AlertMsg";
import StudentFollowUpTasksLogic from "../../../../logic/student/tasksAndSkills/StudentFollowUpTasksLogic";
const FollowUpTaskCardImplementContainer = () => {
  const [myDataTasks, loadingTasks, isShowBtn, myDataSkills, loadingSkills] = StudentFollowUpTasksLogic();

//   const [isShowBtn, setIsShowBtn] = useState(true);

//   useEffect(() => {
//     if (myDataTasks) {
//       myDataTasks.length === 1 && setIsShowBtn(false);
//     }
//   },[loadingTasks]);

  return (
    <div>
      <div className="row gy-3 placeholder-glow">
        {loadingTasks ? (
          Array(4)
            .fill(0)
            .map((_, i) => (
              <div className="col-12 col-lg-6" key={i}>
                <FollowUpTaskCardImplement
                  key={i}
                  isShowCheckBox={true}
                  title={
                    <LoadingPlaceholderItem
                      col={"px-5"}
                      styleBgColor={"var(--primary-color-opacity)"}
                      isSize={"lg"}
                    />
                  }
                />
              </div>
            ))
        ) : myDataTasks && Object.values(myDataTasks).length > 0 ? (
          myDataTasks &&
          Object.values(myDataTasks).map((item, i) => (
            <div className="col-12 col-lg-6" key={i}>
              <FollowUpTaskCardImplement
                title={item.task_name}
                isShowCheckBox={true}
              />
            </div>
          ))
        ) : (
          <>
            <AlertMsg msg={"لاتوجد مهام لتنفيذها"} />
          </>
        )}
      </div>
      {isShowBtn ? (
        <div className="col-12 col-md-6 col-lg-5 col-xl-4  p-2 mt-4 m-auto">
          <Button
            title={"إرسال"}
            type={"button"}
            dataBsToggle={"modal"}
            dataBsTarget={"#exampleModalTaskCardImplement"}
          />
        </div>
      ) : null}

      <PopupAreYouSure
        id={"exampleModalTaskCardImplement"}
        idPopupStar={"exampleModalTaskDone"}
        textAlign={"center"}
        title={
          <div>
            <div className="fs-3">{`المهام التي تم تنفيذها وعددها (3) `}</div>
            <div className="mt-3">
              <FollowUpTaskCardImplement
                title={"الكتابة على الكمبيوتر"}
                isShowCheckBox={false}
              />
              <FollowUpTaskCardImplement
                title={"الكتابة على الكمبيوتر"}
                isShowCheckBox={false}
              />

              <FollowUpTaskCardImplement
                title={"الكتابة على الكمبيوتر"}
                isShowCheckBox={false}
              />
            </div>
          </div>
        }
      />
      <PopupDone
        id={"exampleModalTaskDone"}
        title={"تم الإرسال بنجاح"}
        subTitle={
          "تم إرسال طلب انضمام الى الجهة وانتظر حتى المنسق الكلية يتم قبولها"
        }
        subSubTitle={"نموذج : طلب انضمام للتدريب التعاوني"}
        icon={"../../images/send.gif"}
      />
    </div>
  );
};

export default FollowUpTaskCardImplementContainer;
