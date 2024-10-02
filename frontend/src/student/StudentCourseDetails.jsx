import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from './components/Wrapper'


import { BACKEND_URL } from '../services/constants';

const StudentCourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const getCourse = async () => {
      const response = await fetch(`${BACKEND_URL}/courses/${id}`);
      const data = await response.json();
      setCourse(data);
    };
    getCourse();
  }, [id]);

  console.log(course);

  return (
    <Wrapper>
          <div className="card">
            <h2>Your Courses</h2>
            <div className="row">
                <div className="col" key={course?._id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{course?.title}</h5>
                        <p className="card-text">{course?.description}</p>
                        {course?.authors && course?.authors.map((author) => (
                            <p key={author._id} className="card-text"><small className="text-muted">Instructor: {author.first_name} {author.last_name}</small></p>
                        ))}
                        <p className="card-text"><small className="text-muted">Duration: {course?.course_period}</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col" key={course?._id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Week 1-2: Introduction to Python</h5>
                        <p className="card-text">{course?.description}</p>
                        {course?.authors && course?.authors.map((author) => (
                            <p key={author._id} className="card-text"><small className="text-muted">Instructor: {author.first_name} {author.last_name}</small></p>
                        ))}
                        <p className="card-text"><small className="text-muted">Duration: {course?.course_period}</small></p>
                    </div>
                    </div>
                </div>
            </div>
    </div>

    </Wrapper>
  )
}

export default StudentCourseDetails