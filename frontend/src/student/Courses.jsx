import React, { useContext } from 'react'
import Wrapper from './components/Wrapper'
import { DataContext } from '../context/DataContext'

const StudentCourses = () => {
    const { studentDetails } = useContext(DataContext)
  return (
    <Wrapper>
        <div className="card">
            <h2>Your Courses</h2>
            <div className="row">
                {studentDetails?.courses.map((course) => (
                    <div className="col" key={course._id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{course.title}</h5>
                            <p className="card-text">{course.description}</p>
                            {course.authors && course.authors.map((author) => (
                                <p key={author._id} className="card-text"><small className="text-muted">Instructor: {author.first_name} {author.last_name}</small></p>
                            ))}
                            <p className="card-text"><small className="text-muted">Duration: {course.course_period}</small></p>
                            <div className="">
                            <a href={`/student-courses/${course._id}`} className="btn btn-info me-2">Course Details</a>
                            <a href={`/course-modules/${course._id}`} className="btn btn-primary">Course Modules</a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    </Wrapper>
  )
}

export default StudentCourses