import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie"

import Wrapper from './components/Wrapper';

import { BACKEND_URL } from '../services/constants';

const CourseTopics = () => {
    const { id } = useParams();
    const [topics, setTopics] = useState([])

    useEffect(() => {
      const getCourse = async () => {
        const response = await fetch(`${BACKEND_URL}/courses/course-materials/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get('token')}`
          }
        });
        const data = await response.json();
        console.log(data);
        setTopics(data);
      };
  
      getCourse();
    }, [id]);

  return (
    <Wrapper>
        <div className="card">
            <h2>Module Topics</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Topic Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic, index) => (
                        <tr key={topic._id}>
                        <td>{index + 1}</td>
                        <td>{topic.title}</td>
                        
                        <td><a href={`/course-notes/${topic._id}`} className='btn btn-info btn-sm'>View Details</a></td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default CourseTopics