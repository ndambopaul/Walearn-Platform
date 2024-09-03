import React from 'react';
import Wrapper from './components/Wrapper';

const InstructorDashboard = () => {
  return (
    <Wrapper>
        <div className="mt-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome, [Teacher Name]</h1>
    </div>
    <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-bg-light">
                <div className="card-body">
                    <h5 className="card-title">Courses Taught</h5>
                    <p className="card-text">You are teaching 4 courses.</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-bg-light">
                <div className="card-body">
                    <h5 className="card-title">Assignments Pending Review</h5>
                    <p className="card-text">You have 10 assignments pending review.</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-bg-light">
                <div className="card-body">
                    <h5 className="card-title">Messages</h5>
                    <p className="card-text">You have 3 new messages.</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-bg-light">
                <div className="card-body">
                    <h5 className="card-title">Upcoming Deadlines</h5>
                    <p className="card-text">2 deadlines this week.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-header">
            Assignments to Review
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Course</th>
                            <th scope="col">Assignment Title</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data Science 101</td>
                            <td>Final Project</td>
                            <td>September 10, 2024</td>
                            <td className="status pending">Pending Review</td>
                            <td><a href="#" className="btn btn-primary btn-sm">Review Now</a></td>
                        </tr>
                        <tr>
                            <td>Machine Learning Basics</td>
                            <td>Midterm Exam</td>
                            <td>September 12, 2024</td>
                            <td className="status completed">Reviewed</td>
                            <td><a href="#" className="btn btn-primary btn-sm">View</a></td>
                        </tr>
                        <tr>
                            <td>Software Development</td>
                            <td>Module 3 Assignment</td>
                            <td>September 8, 2024</td>
                            <td className="status pending">Pending Review</td>
                            <td><a href="#" className="btn btn-primary btn-sm">Review Now</a></td>
                        </tr>
                        <tr>
                            <td>Data Analytics</td>
                            <td>Quiz 2</td>
                            <td>September 9, 2024</td>
                            <td className="status overdue">Overdue</td>
                            <td><a href="#" className="btn btn-primary btn-sm">Review Now</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
    </Wrapper>
  )
}

export default InstructorDashboard