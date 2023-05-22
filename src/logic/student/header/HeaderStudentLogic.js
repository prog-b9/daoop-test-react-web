/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { getStudentByUsername } from "../../../redux/actions/student/ActionStudent";
// import { tokenUsername } from "../../../redux/types/Types";
import { useEffect } from "react";
import { tokenStudentUsername } from "../../../redux/types/Types";
const HeaderStudentLogic = () => {
  const myDispatch = useDispatch();

  const accountItem = [
    {
      title: "المعلومات الشخصية",
      path: "/student/profile",
      icon: null,
      color: "",
    },
    {
      title: "التواصل",
      path: "/",
      icon: null,
      color: "",
    },
    {
      title: "تسجيل خروج",
      path: "/",
      icon: "../../images/logout.png",
      color: "text-danger",
    },
  ];
  const dataNotification = [
    {
      title: "المشرف",
      subTitle: "يجب انهاء المهام قبل نهاية التدريب",
      time: "منذ 3 ايام",
      path: "/student/follow-up-tasks",
    },
    {
      title: "مدير النظام",
      subTitle: "يجب انهاء المهام قبل نهاية التدريب",
      time: "منذ 5 ايام",
      path: "/student/follow-up-tasks",
    },
    {
      title: "مدير النظام",
      subTitle: "يجب انهاء المهام قبل نهاية التدريب",
      time: "منذ 9 ايام",
      path: "/student/follow-up-tasks",
    },

    {
      title: "مدير النظام",
      subTitle: "يجب انهاء المهام قبل نهاية التدريب",
      time: "منذ 5 ايام",
      path: "/student/follow-up-tasks",
    },
  ];
  // active the burrger menu to (x)
  const activesMenu = () => {
    let bars = document.querySelector(".bars");
    bars.classList.toggle("active");
  };

  // api students
  const myDataStudent = useSelector((state) => state.rootStudent.student);
  const loading = useSelector((state) => state.rootStudent.loading);

  // const memoizedVal = useMemo(() => loading);

  useEffect(() => {
    myDispatch(getStudentByUsername(tokenStudentUsername));
  }, []);

  return [
    myDataStudent,
    loading,
    accountItem,
    dataNotification,
    activesMenu,
    // memoizedVal,
  ];
};

export default HeaderStudentLogic;
