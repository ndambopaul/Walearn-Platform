import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie"
import Dayjs from "dayjs"

import { BACKEND_URL } from '../../services/constants';
import Wrapper from '../../components/Wrapper';

const StudentAttendances = () => {
  const [attendances, setAttendances] = useState([])

  useEffect(() => {
    const getAttendances = async() => {
      const response = await fetch(`${BACKEND_URL}/students/attendances`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get('token')}`
        }
      })
      const data = await response.json()
      console.log(data)
      setAttendances(data)
    }
    getAttendances()
  }, [0])

  return (
    <Wrapper>
      <div className="card">
            <h2>Your Attendances</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Session Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {attendances.map((attendance, index) => (
                        <tr key={attendance.id}>
                            <td>{index + 1}</td>
                            <td>{attendance.course}</td>
                            <td>{Dayjs(attendance.session_date).format("YYYY-MM-DD")}</td>
                            <td className="status pending">{attendance.marked_as}</td>
                            <td></td>
                        </tr> 
                    ))}
                    
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentAttendances