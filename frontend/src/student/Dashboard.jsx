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

        <div className="card">
            <div className="row">
                <div className="col">
                <div className="card">
                <h3>Enrolled Courses</h3>
                <p>You are currently enrolled in 4 courses.</p>
            </div>
                </div>
                <div className="col">
                <div className="card">
                <h3>Enrolled Courses</h3>
                <p>You are currently enrolled in 4 courses.</p>
            </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default StudentDashboard