import React from 'react';
import Cookies from "js-cookie"

const Sidebar = () => {

  const logoutUser = () => {
    Cookies.remove("token")
    window.location.reload()
  }

  return (
    <div className="sidebar">
        <a href="/">Dashboard</a>
        <a href="/courses">Courses</a>
        <a href="/assignments">Assignments</a>
        <a href="/grades">Grades</a>
        <a href="/attendances">Attendance</a>
        <a href="/students">Students</a>
        <a href="/profile">Profile</a>
        <a href="#logout" onClick={logoutUser}>Logout</a>
    </div>
  )
}

export default Sidebar