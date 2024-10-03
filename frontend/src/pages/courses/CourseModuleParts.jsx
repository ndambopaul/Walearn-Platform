import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../../services/constants';
import Wrapper from '../../components/Wrapper';
import Cookies from "js-cookie"

const CourseModuleParts = () => {
    const { id } = useParams()
    const [moduleParts, setModuleParts] = useState([])

    useEffect(() => {
        const getModuleParts = async() => {
            const response = await fetch(`${BACKEND_URL}/courses/module-topics/?module=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            })
            const data = await response.json()
            setModuleParts(data)
        }
        getModuleParts()
    }, [id])

  return (
    <Wrapper>
         <div className="card">
            <h2>Course Modules Parts</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Module Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {moduleParts.map((module, index) => (
                        <tr key={module._id}>
                        <td>{index + 1}</td>
                        <td>{module.title}</td>
                        
                        <td><a href={`/course-topics/${module.id}`} className='btn btn-info btn-sm'>View Details</a></td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default CourseModuleParts