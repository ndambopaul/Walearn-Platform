import React, { useContext } from "react";
import Wrapper from "../../components/Wrapper";

import { DataContext } from "../../context/DataContext";


const Courses = () => {
  const { instructorDetails } = useContext(DataContext);

  const courses = instructorDetails?.courses;
  const authorId = instructorDetails?.user._id

  var filteredCourses = [];
  if(courses) {
    filteredCourses = courses.filter(course => 
      course.authors.some(author => author._id === authorId)
    );
  }

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
                        {filteredCourses && filteredCourses.map((course, index) => (
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
