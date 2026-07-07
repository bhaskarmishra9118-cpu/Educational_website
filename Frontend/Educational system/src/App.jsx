import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Registeration from "./Pages/Registeration";
import MainLayout from "./layouts/MainLayout";
import PrivateRoute from "./routes/PrivateRoute";
import StudentRoute from "./routes/StudentRoute";
import TeacherRoute from "./routes/TeacherRoute";
import StudentDashboard from "./Pages/student/StudentDashboard";
import AskQuestion from "./Pages/student/AskQuestion";
import MyQuestions from "./Pages/student/MyQuestions";
import Profile from "./Pages/student/Profile";
import TeacherDashboard from "./Pages/teacher/TeacherDashboard";
import PendingQuestions from "./Pages/teacher/PendingQuestions";
import Earnings from "./Pages/teacher/Earnings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registeration />} />

      <Route
        path="/student/*"
        element={
          <PrivateRoute>
            <StudentRoute>
              <MainLayout />
            </StudentRoute>
          </PrivateRoute>
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="ask-question" element={<AskQuestion />} />
        <Route path="my-questions" element={<MyQuestions />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route
        path="/teacher/*"
        element={
          <PrivateRoute>
            <TeacherRoute>
              <MainLayout />
            </TeacherRoute>
          </PrivateRoute>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="questions" element={<PendingQuestions />} />
        <Route path="earnings" element={<Earnings />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
