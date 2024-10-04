import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie"
import Wrapper from '../../components/Wrapper';

import { BACKEND_URL } from '../../services/constants';

const CourseNotes = () => {
    const { id } = useParams();
    const [notesDetails, setNotesDetails] = useState(null);
    const [contentLinks, setContentLinks] = useState([])

    useEffect(() => {
      const getNotes = async () => {
        const response = await fetch(`${BACKEND_URL}/courses/contents/${id}`, {
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

    useEffect(() => {
      const getLinks = async () => {
        const response = await fetch(`${BACKEND_URL}/courses/contents-links/?content=${notesDetails?.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get('token')}`
          }
        });
        const data = await response.json();
        console.log(data)
        setContentLinks(data)
      };
      if (notesDetails?.id) {
        getLinks();
      }
    
    }, [notesDetails?.id]);

  return (
    <Wrapper>
        <>
        <div className="card mb-4">
            <div className="card-header" style={{ backgroundColor: "#008080", color: "white" }}>
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
        {notesDetails?.additional_content && <>
        <div className="card mb-4">
            <div className="card-body">
                <h4>Additional Content</h4>
                <p>
                    {notesDetails?.additional_content}
                </p>
            </div>
        </div>
        </>
      }

        <div className="card mb-4">
          <div className="table table-responsive table-sm">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>File Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {contentLinks?.map((link, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{link?.title}</td>
                    <td><a href={link?.content_link} className='btn btn-info btn-sm' target="_blank">Open Link</a></td>
                  </tr>
                ))}
              </tbody>
                
            </table>
          </div>
        </div>
    </>
    </Wrapper>
  )
}

export default CourseNotes