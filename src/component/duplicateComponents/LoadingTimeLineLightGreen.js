import React from "react";
import TimeLineWithTitleAndSubTitle from "./TimeLineWithTitleAndSubTitle";
import LoadingPlaceholderItem from "./LoadingPlaceholderItem";

const LoadingTimeLineLightGreen = ({ countPlaceholder }) => {
  return (
    <div className="placeholder-glow">
      {Array(countPlaceholder)
        .fill(0)
        .map((_, i) => (
          <TimeLineWithTitleAndSubTitle
            key={i}
            title={
              <>
                <LoadingPlaceholderItem
                  isSize={"lg"}
                  col={"col-12 col-sm-6"}
                  styleBgColor={"var(--green-light-color)"}
                />
              </>
            }
            subTitle={
              <>
                <LoadingPlaceholderItem
                  isSize={"sm"}
                  col={"col-6 col-sm-3"}
                  styleBgColor={"var(--green-light-color)"}
                />
              </>
            }
            whatColor={"lightGreen"}
          />
        ))}
    </div>
  );
};

export default LoadingTimeLineLightGreen;
