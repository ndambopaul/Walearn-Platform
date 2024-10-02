import React, { useContext } from 'react';
import Wrapper from "../../components/Wrapper";

import { DataContext } from "../../context/DataContext";

const Students = () => {
    const { instructorDetails } = useContext(DataContext);

  return (
    <Wrapper>
        <div className="row">
      <div className="card">
        <div className="card-header">
            My Students
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {instructorDetails?.students && instructorDetails?.students.map((student, index) => (
                        <tr key={student._id}>
                            <td>{index + 1}</td>
                            <td>{student?.user.first_name} {student?.user.last_name}</td>
                            <td>{student?.user.phone_number}</td>
                            <td>{student?.user.email}</td>
                            <td>{student?.user.gender}</td>
                            <td>{student.status}</td>
                            <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
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

export default Students