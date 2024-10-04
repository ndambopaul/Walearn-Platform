import React, { useContext } from 'react';
import Wrapper from './components/Wrapper';

import { DataContext } from "./context/DataContext"

const StudentDashboard = () => {
    const { studentDetails } = useContext(DataContext);

  return (
    <Wrapper>
        <div className="card">
            <h3>Welcome Back, {studentDetails?.first_name} {studentDetails?.last_name}!</h3>
            <p>Here's an overview of your current progress.</p>
        </div>

        <div className="card">
            <div className="row">
                <div className="col">
                <div className="card">
                <h3>Enrolled Courses</h3>
                <p>You are currently enrolled in {studentDetails?.courses_count} courses.</p>
            </div>
                </div>
                <div className="col">
                <div className="card">
                <h3>Sessions Attended</h3>
                <p>You have currently attended {studentDetails?.attendances_count} sessions.</p>
            </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default StudentDashboard