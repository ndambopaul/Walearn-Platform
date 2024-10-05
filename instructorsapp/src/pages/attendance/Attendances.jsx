import React, { useContext } from 'react';
import Wrapper from '../../components/Wrapper';
import Dayjs from "dayjs"

import { BACKEND_URL } from '../../services/constants';
import { DataContext } from '../../context/DataContext';

const Attendances = () => {
    const { attendances } = useContext(DataContext);
  return (
    <Wrapper>
         <div className="row">
      <div className="card">
        <div className="card-header">
            Students Attendance
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student</th>
                            <th scope="col">Course</th>
                            <th scope="col">Session Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendances && attendances.map((attendance, index) => (
                            <tr key={attendance._id}>
                                <td>{index + 1}</td>
                                <td>{attendance?.student_name}</td>
                                <td>{attendance?.course}</td>
                                <td>{Dayjs(attendance.due_date).format("MMMM D, YYYY")}</td>
                                <td className="status pending">{attendance.marked_as}</td>
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

export default Attendances