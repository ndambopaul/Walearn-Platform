import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import "./AssignmentDetail.css";

import Dayjs from 'dayjs';

import { BACKEND_URL } from '../services/constants';

const AssignmentDetail = () => {

    const { id } = useParams();

    const [assignment, setAssignment] = useState(null);

    useEffect(() => {
        const getAssignment = async() => {
            const response = await fetch(`${BACKEND_URL}/students/assignments/${id}`);
            const data = await response.json();
            console.log(data);
            setAssignment(data);
        }
        getAssignment();
    }, [id])

    console.log(`Assignment ID: ${id}`);

  return (
    <Wrapper>
        <>
        <div className="card mb-4">
            <div className="card-header">
                Assignment: {assignment?.title}
            </div>
            <div className="card-body">
                <div className="assignment-info">
                    <p><strong>Course:</strong>{assignment?.course.title}</p>
                    <p><strong>Posted on:</strong> {Dayjs(assignment?.createdAt).format("YYYY-MM-DD hh:mm")}</p>
                    <p><strong>Due date:</strong> {Dayjs(assignment?.date_due).format("YYYY-MM-DD hh:mm")}</p>
                </div>
            </div>
        </div>

        <div className="card mb-4">
            <div className="card-body">
                <h4>Description</h4>
                <p>
                    {assignment?.description}
                </p>
            </div>
        </div>

        
        <div className="card mb-4">
            <div className="card-body">
                <h4>Submit Your Assignment</h4>
                <form action="#" method="POST" encType="multipart/form-data">
                    <div className="mb-3">
                        <input className="form-control" type="text" id="project_link" name="project_link" placeholder='Project Link' />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">Submit Assignment</button>
                </form>
            </div>
        </div>
    </>
    </Wrapper>
  )
}

export default AssignmentDetail