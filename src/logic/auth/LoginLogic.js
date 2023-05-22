/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/actions/auth/ActionAuth";
import { NotificationsToast } from "../../component/duplicateComponents/NotificationsToast";
// import { useNavigate } from "react-router-dom";

const LoginLogic = () => {
  const myDispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const [isLoading, setIsLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [showBtnLoad, setShowBtnLoad] = useState(false);

  // selector
  const responseAuthLogin = useSelector((state) => state.rootAuth.login);
  //   const loadingAuthLogin = useSelector((state) => state.rootAuth.loading);

//   const navigate = useNavigate();

  const handelUsername = (e) => {
    setUsername(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  //validation username and password

  const submitLogin = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      NotificationsToast("warn", " جميع الحقول مطلوبة");
      return;
    }

    setLoad(true);
    // this is show btn load if click btn wating give me data from API
    setShowBtnLoad(true);
    await myDispatch(
      authLogin({
        student_id: username,
        password: password,
      })
    );
    setLoad(false);
  };

  useEffect(() => {
    if (load === false) {
      //   if (responseAuthLogin) {
      //     console.log(responseAuthLogin);
      //   }
      //add token if respone good
      if (responseAuthLogin.data.token) {
        localStorage.setItem("tokenStudent", responseAuthLogin.data.token);
        localStorage.setItem(
          "AllDataStudent",
          JSON.stringify(responseAuthLogin.data.student)
        );
        NotificationsToast("done", " تم  الدخول");
        // this is show btn load if done give me data from API stop loading Btn
        setShowBtnLoad(false);
        // console.log(responseAuthLogin.data.student.student_id)
        // console.log(localStorage.getItem("AllDataStudent"));
        // navigate("/student/status");
      }
      // remove token if error user or pass
      else {
        localStorage.removeItem("tokenStudent");
        localStorage.removeItem("AllDataStudent");
        if (responseAuthLogin.data === "nothing here") {
          NotificationsToast("warn", " أسم المستخدم أو كلمة المرور خاطئة");
          setShowBtnLoad(false);
        } else {
          NotificationsToast("error", " هناك مشكلة في عمليةالدخول ");
          setShowBtnLoad(false);
        }
      }
    }
  }, [load]);

  return [
    username,
    password,
    handelUsername,
    handelPassword,
    submitLogin,
    showBtnLoad,
  ];
};

export default LoginLogic;
