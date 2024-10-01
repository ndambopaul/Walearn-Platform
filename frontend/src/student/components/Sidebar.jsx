import React from 'react';
import Cookies from "js-cookie"

const Sidebar = () => {

  const logoutUser = () => {
    Cookies.remove("token")
    window.location.reload()
  }

  return (
    <div className="sidebar">
        <a href="#profile">Profile</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/student-courses">Courses</a>
        <a href="/student-assignments">Assignments</a>
        <a href="/student-grades">Grades</a>
        <a href="/student-attendances">Attendance</a>
        <a href="/student-payments">Payments</a>
        <a href="#settings">Settings</a>
        <a href="#logout" onClick={logoutUser}>Logout</a>
    </div>
  )
}

export default Sidebar