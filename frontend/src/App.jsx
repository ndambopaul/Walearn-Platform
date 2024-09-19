import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CourseDetail from './pages/CourseDetail'

import StudentGrades from './student/Grades'
import StudentAssignments from './student/Assignments'
import StudentCourses from './student/Courses'

import InstructorCourses from './instructors/Courses';
import Students from './instructors/Students'
import Grades from './instructors/Grades'
import Assignments from './instructors/Assignments'

import Dashboard from './Dashboard'
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/:id' element={<CourseDetail />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/instructor-courses' element={<InstructorCourses />} />
          <Route path='/students' element={<Students />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/grades' element={<Grades />} />
          
        
          <Route path='/student-grades' element={<StudentGrades />} />
          <Route path='/student-assignments' element={<StudentAssignments />} />
          <Route path='/student-courses' element={<StudentCourses />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
