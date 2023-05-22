import React from "react";
import TimeLineWithTitleAndSubTitle from "./TimeLineWithTitleAndSubTitle";
import LoadingPlaceholderItem from "./LoadingPlaceholderItem";

const LoadingTimeLineDarkGreen = ({ countPlaceholder }) => {
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
                  styleBgColor={"var(--primary-color)"}
                />
              </>
            }
            subTitle={
              <>
                <LoadingPlaceholderItem
                  isSize={"sm"}
                  col={"col-6 col-sm-3"}
                  styleBgColor={"var(--primary-color)"}
                />
              </>
            }
            whatColor={"darkGreen"}
          />
        ))}
    </div>
  );
};

export default LoadingTimeLineDarkGreen;
