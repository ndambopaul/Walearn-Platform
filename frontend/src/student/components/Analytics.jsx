import React from 'react'

const Analytics = () => {
  return (
    <>
        <div className="card">
            <h3>Welcome Back, [Student Name]!</h3>
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
            
        </div>
    </>
  )
}

export default Analytics