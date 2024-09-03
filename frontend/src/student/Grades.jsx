import React from 'react'
import Wrapper from './components/Wrapper'

const StudentGrades = () => {
  return (
    <Wrapper>
        <div className="card">
            <h2>Your Grades</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Assignment Title</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data Science 101</td>
                        <td>Project Proposal</td>
                        <td>September 5, 2024</td>
                        <td className="status pending">Pending</td>
                        <td><a href="#">View Details</a></td>
                    </tr>
                    <tr>
                        <td>Machine Learning Basics</td>
                        <td>Homework 3</td>
                        <td>September 10, 2024</td>
                        <td className="status completed">Completed</td>
                        <td><a href="#">View Details</a></td>
                    </tr>
                    <tr>
                        <td>Data Analytics</td>
                        <td>Final Report</td>
                        <td>September 1, 2024</td>
                        <td className="status overdue">Overdue</td>
                        <td><a href="#">View Details</a></td>
                    </tr>
                    <tr>
                        <td>Software Development</td>
                        <td>Unit 2 Quiz</td>
                        <td>September 8, 2024</td>
                        <td className="status pending">Pending</td>
                        <td><a href="#">View Details</a></td>
                    </tr>
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentGrades