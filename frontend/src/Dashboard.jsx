import React, { useContext } from 'react'

import { UserContext } from "./context/UserContext"
import StudentDashboard from './student/Dashboard';
import InstructorDashboard from "./instructors/InstructorDashboard";

const Dashboard = () => {
    const { user } = useContext(UserContext);

    console.log(user)

  return (
    <>
    {user.role === "INSTRUCTOR" ? (
        <InstructorDashboard />
    ) : (
        <StudentDashboard />
    )}
    </>
  )
}

export default Dashboard