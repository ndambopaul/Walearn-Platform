import React, { useContext } from 'react'
import Wrapper from "../../components/Wrapper";
import Dayjs from "dayjs";

import { DataContext } from "../../context/DataContext";

const Assignments = () => {
    const { assignments } = useContext(DataContext);
    
  return (
    <Wrapper>
        <div className="row">
      <div className="card">
        <div className="card-header">
            Course Assignments
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course</th>
                            <th scope="col">Assignment Title</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments && assignments.map((assignment, index) => (
                            <tr key={assignment._id}>
                                <td>{index + 1}</td>
                                <td>{assignment?.course.title}</td>
                                <td>{assignment.title}</td>
                                <td>{Dayjs(assignment.due_date).format("MMMM D, YYYY")}</td>
                                <td className="status pending">{assignment.status}</td>
                                <td><a href="#" className="btn btn-primary btn-sm">Review Now</a></td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      </div>
    </Wrapper>
  )
}

export default Assignments