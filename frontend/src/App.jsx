import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CourseDetail from './pages/CourseDetail'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/:id' element={<CourseDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
