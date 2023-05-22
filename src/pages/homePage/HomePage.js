/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import HeaderHomePage from "../../component/homePage/HeaderHomePage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudent } from "../../redux/actions/student/ActionStudent";
import {
  addSubmissition,
  getSubmissitionByUsername,
} from "../../redux/actions/submissition/ActionSubmissition";
import HLanding from "../../component/homePage/HLanding";
import { tokenStudentUsername } from "../../redux/types/Types";
const HomePage = () => {
  const myDispatch = useDispatch();

  useEffect(() => {
    myDispatch(getAllStudent());
    myDispatch(getSubmissitionByUsername(tokenStudentUsername));
  }, []);

  // api get all studnet
  const myDataStudent = useSelector((state) => state.rootStudent.student);
  const myDataSubmissition = useSelector(
    (state) => state.rootSubmissitions.submissition
  );
  // const loadingStudent = useSelector((state) => state.rootStudent.loading);

  const [load, setLoad] = useState(true);

  //   if (myDataStudent) {
  //     console.log(myDataStudent);
  //   }

  //   if (myDataSubmissition) {
  //     console.log(myDataSubmissition);
  //   }

  const submitBtn = async (e) => {
    e.preventDefault();

    setLoad(true);

    await myDispatch(
      addSubmissition({
        student_id: "12",
        password: "123456",
      })
    );

    setLoad(false);
  };

  useEffect(() => {
    if (load === false) {
      if (myDataSubmissition) {
        console.log(myDataSubmissition);
      }
    }
  }, [load]);
  return (
    <div
      className="position-relative"
      style={{
        minHeight: "200vh",
        marginTop: "100vh - 80px",
      }}
    >
      <HeaderHomePage />

      <HLanding />
      <button className="mt-5" onClick={submitBtn}>
        btn
      </button>
      {/* <About /> */}
      {/* <LoginStartService /> */}
    </div>
  );
};

export default HomePage;
