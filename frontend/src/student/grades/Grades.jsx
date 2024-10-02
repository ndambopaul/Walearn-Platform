import React, { useState, useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import Cookies from "js-cookie"
import Dayjs from 'dayjs'
import { BACKEND_URL } from '../../services/constants';
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import EditAssignmentSubmission from '../components/EditAssignmentSubmission';
import GradeDetails from './GradeDetails';


const StudentGrades = () => {
    const [grades, setGrades] = useState([])
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        const getGrades = async() => {
            const response = await fetch(`${BACKEND_URL}/students/student-grades`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            });
            const data = await response.json();
            console.log(data)
            setGrades(data)
        }
        getGrades();
    }, [0])

  return (
    <Wrapper>
        <EditAssignmentSubmission />
        <div className="card">
            <h2>Your Grades</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Assignment Title</th>
                        <th>Due Date</th>
                        <th>Marks</th>
                        <th>Status</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                {grades.map((grade, index) => (
                    <tr key={grade._id}>
                        <td>{index + 1}</td>
                        <td>{grade?.course.title}</td>
                        <td>{grade?.assignment.title}</td>
                        <td>{Dayjs(grade?.assignment.due_date).format("YYYY-MM-DD HH:mm")}</td>
                        <td>{grade.grade}</td>
                        <td className="status">{grade.status}</td>
                        {/** 
                        <td><a href="#" className='btn btn-info btn-sm' data-bs-toggle="modal" data-bs-target="#gradeDetailsModal"><IoEyeOutline /></a></td>
                        */}
                        <td><a href="#" className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#editGradModal"><FaEdit /></a></td>
                       <td><GradeDetails grade={grade}/></td>
                </tr>
                ))}
                    
                  
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentGrades