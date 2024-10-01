import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CourseDetail from './pages/CourseDetail'

import StudentGrades from './student/Grades'
import StudentAssignments from './student/Assignments'
import StudentCourses from './student/Courses'
import StudentPayments from './student/StudentPayments'
import StudentCourseDetails from './student/StudentCourseDetails'
import CourseModules from './student/CourseModules'
import CourseModuleParts from './student/CourseModuleParts'
import CourseTopics from './student/CourseTopics'
import CourseNotes from './student/CourseNotes'
import StudentAttendnaces from "./student/StudentAttendances"

import InstructorCourses from './instructors/Courses';
import Students from './instructors/Students'
import Grades from './instructors/Grades'
import Assignments from './instructors/Assignments'
import AssignmentDetail from './student/AssignmentDetail'

import Dashboard from './Dashboard'
import Register from './auth/Register'
import Login from './auth/Login'

import ProtectedLayout from './ProtectedLayout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedLayout />}>
          <Route path='/:id' element={<CourseDetail />} />
          <Route path='' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/instructor-courses' element={<InstructorCourses />} />
            <Route path='/students' element={<Students />} />
            <Route path='/assignments' element={<Assignments />} />
            <Route path='/grades' element={<Grades />} />
            
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
