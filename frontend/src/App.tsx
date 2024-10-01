import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginPage from "./Pages/Auth/LoginPage";
import LogoutPage from "./Pages/Auth/LogoutPage";
import RegistrationPage from "./Pages/Auth/RegistrationPage";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Profile from "./Pages/Profile/Profile";
import CreateJob from "./Pages/CreateJob/CreateJob";
import LandingPage from "./Pages/Auth/landingPage";
import JobQuestionnaire from "./Pages/CreateJob/jobQuestionnaire";
import JobPreview from "./Pages/CreateJob/jobPreview";
import Resume from "./Pages/Resume/Resume";
import ResumeViewer from "./components/Resume/ResumeViewer";
import Notifications from "./Pages/Notifications/Notifications";

const App = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
        <ToastContainer style={{ marginTop: "64px" }} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createjob"
            element={
              <ProtectedRoute>
                <CreateJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job_questionnaire"
            element={
              <ProtectedRoute>
                <JobQuestionnaire />
              </ProtectedRoute>
            }
          />

          <Route
            path="/job_preview"
            element={
              <ProtectedRoute>
                <JobPreview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resume"
            element={
              <ProtectedRoute>
                <Resume />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resumeviewer/:applicantId"
            element={
                <ResumeViewer />
            }
          />
          <Route
            path="/resume"
            element={
              <ProtectedRoute>
                <Resume />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<>Error 404</>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
