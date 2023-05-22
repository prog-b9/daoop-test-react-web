import React from "react";
import StudentStatusDesiresItem from "./StudentStatusDesiresItem";
import Taps from "../../duplicateComponents/Taps";

const StudentStatusDesiresContainer = () => {
  return (
    <div className="container p-0 pb-5">
      <Taps
        title={["رغبات انضمام للتدريب", "حالة الرغبات"]}
        charIdAndTarget={["a", "b"]}
        titleItem={[
          <StudentStatusDesiresItem
            index={1}
            title={"وزارة التجارة"}
            isStatus={null}
          />,
          <div>
            <div className="my-3">
              <StudentStatusDesiresItem
                index={1}
                title={"وزارة التجارة"}
                isStatus={0}
              />
            </div>
            <div className="my-3">
              <StudentStatusDesiresItem
                index={2}
                title={"وزارة التعليم"}
                isStatus={1}
              />
            </div>
            <div className="my-3">
              <StudentStatusDesiresItem
                index={3}
                title={"بنك الرياض"}
                isStatus={2}
              />
            </div>
          </div>,
        ]}
      />
    </div>
  );
};

export default StudentStatusDesiresContainer;
