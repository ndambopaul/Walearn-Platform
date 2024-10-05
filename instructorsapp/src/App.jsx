import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedLayout from "./ProtectedLayout";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/assignments/Assignments";
import Students from "./pages/students/Students";
import Courses from "./pages/courses/Courses";
import CourseModules from "./pages/courses/CourseModules";

import Attendances from "./pages/attendance/Attendances";

import Grades from "./pages/grades/Grades";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-modules" element={<CourseModules />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/attendances" element={<Attendances />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
