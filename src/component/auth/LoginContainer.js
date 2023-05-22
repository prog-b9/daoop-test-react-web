import React from "react";
import FormInput from "../duplicateComponents/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../duplicateComponents/Button";
import { Link } from "react-router-dom";
import LoginLogic from "../../logic/auth/LoginLogic";
import ButtonLoading from "../duplicateComponents/ButtonLoading";
const LoginContainer = () => {
  const [
    username,
    password,
    handelUsername,
    handelPassword,
    submitLogin,
    showBtnLoad,
  ] = LoginLogic();
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('../../images/bg-3.jpg')",
      }}
    >
      <Link to={"/"}>
        <img
          src="../../images/logo.png"
          style={{ width: "110px", height: "70px" }}
          alt="شعار دؤوب"
        />
      </Link>
      <div className="login-width my-5">
        <form
          // onSubmit={submitLogin}
          className=" bg-white p-4 pb-5 style-shadow-large mx-3 position-relative"
          style={{
            borderRadius: "var(--radius)",
          }}
        >
          <div className="position-relative py-4 ">
            <h2 className="position-absolute fw-bold w-100 text-center">
              تسجيل الدخول
            </h2>
            <img
              src="../../images/bg-login-blob.png"
              className="position-absolute"
              style={{
                left: "50%",
                top: "100%",
                transform: "translate(-50%,-10%)",
                width: "190px",
                height: "250px",
              }}
              alt="blob"
            />
          </div>
          <div className="my-4">
            <FormInput
              type={"text"}
              onChange={handelUsername}
              value={username}
              // name={"username"}
              label={"أسم المستخدم"}
              placeholder={"أسم المستخدم"}
              idAndfor={"validationCustomUsername"}
              // isValid={"valid"}
              // msgError={msgUsername}
              isShowIcon={true}
              icon={
                <FontAwesomeIcon icon={faUser} color="var(--primary-color)" />
              }
            />
          </div>
          <div className="my-4">
            <FormInput
              type={"password"}
              onChange={handelPassword}
              value={password}
              // name={"password"}
              label={"كلمة المرور"}
              placeholder={"كلمة المرور"}
              idAndfor={"validationCustomPassword"}
              // isValid={"valid"}
              // msgError={msgPassword}
              isShowIcon={true}
              icon={
                <FontAwesomeIcon icon={faLock} color="var(--primary-color)" />
              }
            />
          </div>
          <div className="mt-4 py-2">
            {/* <Button
              onclick={submitLogin}
              type={"button"}
              title={"الدخول"}
              // dataBsDismiss={hideModal}
            /> */}
            {showBtnLoad ? (
              <ButtonLoading width={"100%"} title={"جاري الدخول"} />
            ) : (
              <Button
                onclick={submitLogin}
                type={"button"}
                title={"الدخول"}
                // dataBsDismiss={hideModal}
              />
            )}
          </div>
          {/* <div
            className="text-center text-danger w-100 fw-bold position-absolute bg-dange "
            style={{ fontSize: "15px", left: "0", bottom: "20px" }}
          >
            {msgAllError}
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
