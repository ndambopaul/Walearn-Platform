import React, { useState, useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import Cookies from "js-cookie"
import { BACKEND_URL } from "../../services/constants";


const Courses = () => {
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
      <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course Type</th>
                            <th scope="col">Fees</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses && courses.map((course, index) => (
                            <tr key={course._id}>
                                <td>{index + 1}</td>
                                <td>{course?.title}</td>
                                <td>{course?.course_type}</td>
                                <td>{course?.price}</td>
                                <td className="status pending">{course.course_status}</td>
                                <td><a href="#" className="btn btn-primary btn-sm">Review Now</a></td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </Wrapper>
  );
};

export default Courses;
