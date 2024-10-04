import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import StudentGrades from './pages/grades/Grades'

import StudentCourses from './pages/courses/Courses'
import StudentPayments from './pages/payments/StudentPayments'

import StudentCourseDetails from './pages/courses/StudentCourseDetails'
import CourseModules from './pages/courses/CourseModules'
import CourseModuleParts from './pages/courses/CourseModuleParts'
import CourseTopics from './pages/courses/CourseTopics'
import CourseNotes from './pages/courses/CourseNotes'

import StudentAttendnaces from "./pages/attendance/StudentAttendances"

import StudentAssignments from './pages/assignments/Assignments'
import AssignmentDetail from './pages/assignments/AssignmentDetail'

import Dashboard from "./Dashboard"
import Register from './auth/Register'
import Login from './auth/Login'
import Profile from './pages/profile/Profile'

import ProtectedLayout from './ProtectedLayout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path='' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/student-grades' element={<StudentGrades />} />
            <Route path='/student-assignments' element={<StudentAssignments />} />
            <Route path='/student-assignments/:id' element={<AssignmentDetail />} />
            <Route path='/student-courses' element={<StudentCourses />} />
            <Route path='/student-courses/:id' element={<StudentCourseDetails />}  />
            <Route path='/course-modules/:id' element={<CourseModules />} />
            <Route path='/course-module-parts/:id' element={<CourseModuleParts />} />
            <Route path='/course-topics/:id' element={<CourseTopics />} />
            <Route path='/course-notes/:id' element={<CourseNotes />} />
            <Route path='/student-payments' element={<StudentPayments />} />
            <Route path='/student-attendances' element={<StudentAttendnaces />} />
          </Route>
      
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
