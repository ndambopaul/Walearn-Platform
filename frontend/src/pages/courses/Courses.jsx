import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/Wrapper'
import { BACKEND_URL } from "../../services/constants"
import Cookies from "js-cookie"

const StudentCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const response = await fetch(`${BACKEND_URL}/courses`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            });
            const data = await response.json();
            setCourses(data);
        };
        getCourses();
    }, []);

  return (
    <Wrapper>
        <div className="card">
            <h2>Your Courses</h2>
            <div className="row">
                {courses && courses.map((course) => (
                    <div className="col" key={course.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{course.title}</h5>
                            <p className="card-text">{course.description}</p>
                            {course.instructors && course.instructors.map((author) => (
                                <p key={author.id} className="card-text"><small className="text-muted">Instructor: {author.first_name} {author.last_name}</small></p>
                            ))}
                            <p className="card-text"><small className="text-muted">Duration: {course.course_period}</small></p>
                            <div className="">
                            <a href={`/student-courses/${course.id}`} className="btn btn-info me-2">Course Details</a>
                            <a href={`/course-modules/${course.id}`} className="btn btn-primary">Course Modules</a>
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