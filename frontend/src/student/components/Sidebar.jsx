import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <a href="#profile">Profile</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/student-courses">My Courses</a>
        <a href="/student-assignments">Assignments</a>
        <a href="/student-grades">Grades</a>
        <a href="#settings">Settings</a>
        <a href="#logout">Logout</a>
    </div>
  )
}

export default Sidebar