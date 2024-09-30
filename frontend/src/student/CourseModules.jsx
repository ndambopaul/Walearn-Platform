import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../services/constants';

import Cookies from "js-cookie"

import Wrapper from './components/Wrapper';

const CourseModules = () => {
    const [modules, setModules] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const getModules = async () => {
            const response = await fetch(`${BACKEND_URL}/courses/course-modules/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            });
            const data = await response.json();
            console.log(data);
            setModules(data);
        };
        getModules(); 
    }, [id]);

  return (
    <Wrapper>
        <div className="card">
            <h2>Course Modules</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Module Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {modules.map((module, index) => (
                        <tr key={module._id}>
                        <td>{index + 1}</td>
                        <td>{module.title}</td>
                        
                        <td><a href={`/course-module-parts/${module._id}`} className='btn btn-info btn-sm'>View Details</a></td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default CourseModules