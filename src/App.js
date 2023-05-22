/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/authPage/LoginPage";
import StudentStatusPage from "./pages/student/status/StudentStatusPage";
import StudentFollowUpTasksPage from "./pages/student/followUp/StudentFollowUpTasksPage";
import StudentProfilePage from "./pages/student/profile/StudentProfilePage";
import StudentFollowUpGradePage from "./pages/student/followUp/StudentFollowUpGradePage";
import StudentFollowUpPollPage from "./pages/student/followUp/StudentFollowUpPollPage";
import FormsEnrollCoopTriningPage from "./pages/forms/FormsEnrollCoopTriningPage";
import FormsRequestExceptionPage from "./pages/forms/FormsRequestExceptionPage";
import StudentJoinRequestPage from "./pages/student/joinRequest/StudentJoinRequestPage";
import StudentJoinRequestDetailsPage from "./pages/student/joinRequest/StudentJoinRequestDetailsPage";
import StudentJoinRequestFillFormPage from "./pages/student/joinRequest/StudentJoinRequestFillFormPage";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* main */}
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* student */}
          {/* Students Routes */}
          <Route path="/student/profile" element={<StudentProfilePage />} />
          {/* //////////// Start Status ////////////*/}
          <Route path="/student/status" element={<StudentStatusPage />} />
          {/* //////////// Start follow up ////////////*/}
          <Route
            path="/student/follow-up-tasks"
            element={<StudentFollowUpTasksPage />}
          />
          <Route
            path="/student/follow-up-grade"
            element={<StudentFollowUpGradePage />}
          />
          <Route
            path="/student/follow-up-poll"
            element={<StudentFollowUpPollPage />}
          />
          {/* //////////// End follow up ////////////*/}
          {/* //////////// Start join Request ////////////*/}
          <Route
            path="/student/join-request"
            element={<StudentJoinRequestPage />}
          />
          <Route
            path="/student/join-request-details/:id"
            element={<StudentJoinRequestDetailsPage />}
          />
          <Route
            path="/student/join-request-fill-form/:id"
            element={<StudentJoinRequestFillFormPage />}
          />
          {/* //////////// End join Request ////////////*/}
          {/* //////////// Start Forms ////////////*/}
          <Route
            path="/student/forms-enroll-trining"
            element={<FormsEnrollCoopTriningPage />}
          />
          <Route
            path="/student/forms-request-exception"
            element={<FormsRequestExceptionPage />}
          />
          {/* <Route
            path="/sopervisor/forms-Guidance"
            element={<FormsGuidancePage />}
          />
          <Route
            path="/sopervisor/forms-direct"
            element={<FormsDirectTriningPage />}
          />
          <Route
            path="/sopervisor/forms-request-trining"
            element={<FormsRequestTriningPage />}
          />
        
          <Route
            path="/sopervisor/forms-trining-Process"
            element={<FormsTriningProcessPage />}
          />
          <Route
            path="/sopervisor/forms-trining-avalible"
            element={<FormsTriningAvalibleInCompanyPage />}
          /> */}
          {/* //////////// End Forms ////////////*/}
        </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </div>
  );
}

export default App;
