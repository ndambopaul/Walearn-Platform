import React, { useState, useEffect } from 'react'
import Wrapper from './components/Wrapper'
import Dayjs from 'dayjs'

import { BACKEND_URL } from '../services/constants'


const StudentAssignments = () => {
    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        const getAssignments = async () => {
            const response = await fetch(`${BACKEND_URL}/students/assignments`)
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
                        <tr key={assignment._id}>
                            <td>{index + 1}</td>
                            <td>{assignment.title}</td>
                            <td>{Dayjs(assignment.due_date).format("YYYY-MM-DD")}</td>
                            <td className="status pending">{assignment.status}</td>
                            <td><a href="#">View Details</a></td>
                        </tr> 
                    ))}
                    
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentAssignments