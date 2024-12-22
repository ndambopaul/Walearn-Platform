import React, { useContext } from 'react';
import Wrapper from "../../components/Wrapper";
import { DataContext } from "../../context/DataContext";
import Dayjs from "dayjs";

const Grades = () => {
    const { grades } = useContext(DataContext);

    console.log(grades)

  return (
    <Wrapper>
       <div className="row">
      <div className="card">
        <div className="card-header">
            Assignments Submissions
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student</th>
                            <th scope="col">Assignment Title</th>
                            <th scope="col">Submitted At</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades && grades.map((grade, index) => (
                            <tr key={grade._id}>
                                <td>{index + 1}</td>
                                <td>{grade?.student_name}</td>
                                <td>{grade.assignment_title}</td>
                                <td>{Dayjs(grade.submitted_at).format("MMMM D, YYYY")}</td>
                                <td className="status pending">{grade.status}</td>
                                <td><a href="#" className="btn btn-primary btn-sm">Mark Now</a></td>
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

export default Grades