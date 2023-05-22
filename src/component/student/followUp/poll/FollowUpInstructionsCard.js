import React from "react";
import Positioned from "../../../duplicateComponents/Positioned";
import TimeLineWithTitleAndSubTitle from "../../../duplicateComponents/TimeLineWithTitleAndSubTitle";
import TimeLineBoxCardDarkGreen from "../../../duplicateComponents/TimeLineBoxCardDarkGreen";
const FollowUpInstructionsCard = () => {
  return (
    <div className="">
      <div className=" position-relative">
        <Positioned
          title={"ملاحضة"}
          bgColor={"var(--green-light-color)"}
          top={"-20px"}
          right={"35px"}
          z={1}
        />
        <TimeLineBoxCardDarkGreen
          titleHeader={"استبانة استطلاع رأي المتدرب عن التدريب التعاوني"}
          fs={"22px"}
          item={
            <div>
              <TimeLineWithTitleAndSubTitle
                title={"أخي المتدرب"}
                subTitle={
                  "أهلاً بك عزيزي المتدرب , مع شكرنا الجزيل لتعاونكم ونود معرفة وجهة نظركم عن التدريب العاوني , نأمل منكم تعاونكم معنا في إعطاء المعلومات الدقيقة حتى نتكمن من تحسين وتطوير الأداء في المستقبل مقدرين لكم جهدكم المبذولة ."
                }
                whatColor={"lightGreen"}
              />

              <TimeLineWithTitleAndSubTitle
                title={"درجة التقييم"}
                subTitle={
                  "الدرجة من  خمسة ( 5 ) تعني أعلى تقدير والدرجة واحد ( 1 ) تعني أقل تقدير"
                }
                whatColor={"lightGreen"}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default FollowUpInstructionsCard;
