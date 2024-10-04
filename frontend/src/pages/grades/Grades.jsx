import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/Wrapper'
import Cookies from "js-cookie"
import Dayjs from 'dayjs'
import { BACKEND_URL } from '../../services/constants';
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import EditAssignmentSubmission from './EditAssignmentSubmission';
import GradeDetails from './GradeDetails';


const StudentGrades = () => {
    const [grades, setGrades] = useState([])
    
    useEffect(() => {
        const getGrades = async() => {
            const response = await fetch(`${BACKEND_URL}/students/assignments-submissions`, {
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
    }, [grades])
  return (
    <Wrapper>
       
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
                    <tr key={grade.id}>
                        <td>{index + 1}</td>
                        <td>{grade?.course}</td>
                        <td>{grade?.assignment_title}</td>
                        <td>{Dayjs(grade?.assignment.due_date).format("YYYY-MM-DD HH:mm")}</td>
                        <td>{grade.grade}</td>
                        <td className="status">{grade.status}</td>
                        <td><GradeDetails grade={grade}/></td>
                        <td><EditAssignmentSubmission grade={grade} /></td>
                       
                </tr>
                ))}
                    
                  
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentGrades