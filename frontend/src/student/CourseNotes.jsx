import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie"
import Wrapper from './components/Wrapper';

import { BACKEND_URL } from '../services/constants';

const CourseNotes = () => {
    const { id } = useParams();
    const [notesDetails, setNotesDetails] = useState(null);

    useEffect(() => {
      const getNotes = async () => {
        const response = await fetch(`${BACKEND_URL}/courses/course-material-details/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get('token')}`
          }
        });
        const data = await response.json();
        setNotesDetails(data)
      };

      getNotes();
    }, [id]);
  return (
    <Wrapper>
        <>
        <div className="card mb-4">
            <div className="card-header">
                {notesDetails?.title}
            </div>
        </div>

        <div className="card mb-4">
            <div className="card-body">
                <h4>Description</h4>
                <p>
                    {notesDetails?.content}
                </p>
            </div>
        </div>
        <div className="card mb-4">
            <div className="card-body">
                <h4>Additional Content</h4>
                <p>
                    {notesDetails?.additional_content}
                </p>
            </div>
        </div>
    </>
    </Wrapper>
  )
}

export default CourseNotes