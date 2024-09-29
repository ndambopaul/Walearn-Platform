import React, { useContext } from 'react';
import Wrapper from './components/Wrapper';

import { UserContext } from "../context/UserContext"

const StudentDashboard = () => {
    const { user } = useContext(UserContext);

  return (
    <Wrapper>
        <div className="card">
            <h3>Welcome Back, {user.first_name} {user.last_name}!</h3>
            <p>Here's an overview of your current progress.</p>
        </div>

        <div className="grid-container">
            <div className="card">
                <h3>Enrolled Courses</h3>
                <p>You are currently enrolled in 4 courses.</p>
            </div>
            <div className="card">
                <h3>Assignments Due</h3>
                <p>You have 2 assignments due this week.</p>
            </div>
            <div className="card">
                <h3>Upcoming Events</h3>
                <p>No events scheduled.</p>
            </div>
            <div className="card">
                <h3>Recent Grades</h3>
                <p>Your latest grade: 92% on "Data Science Project".</p>
            </div>
        </div>
    </Wrapper>
  )
}

export default StudentDashboard