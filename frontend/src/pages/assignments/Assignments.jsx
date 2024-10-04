import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/Wrapper'
import Dayjs from 'dayjs'
import { IoEyeOutline } from "react-icons/io5";

import Cookie from "js-cookie"

import { BACKEND_URL } from '../../services/constants'
import { Link } from 'react-router-dom'


const StudentAssignments = () => {
    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        const getAssignments = async () => {
            const response = await fetch(`${BACKEND_URL}/courses/assignments`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookie.get('token')}`
                }
            })
            const data = await response.json()
            console.log(data)
            setAssignments(data)
        }
        getAssignments()
    }, [])

  return (

    <Wrapper>
        <div className="card">
            <h2>Your Assignments</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Assignment Title</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment, index) => (
                        <tr key={assignment.id}>
                            <td>{index + 1}</td>
                            <td>{assignment.title}</td>
                            <td>{Dayjs(assignment.due_date).format("YYYY-MM-DD")}</td>
                            <td className="status pending">{assignment.active ? "Active" : "Inactive"}</td>
                            
                            <td>
                                <Link to={`/student-assignments/${assignment.id}`} className='btn btn-info btn-sm'>
                                <IoEyeOutline />
                                </Link>
                            </td>
                        </tr> 
                    ))}
                    
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentAssignments