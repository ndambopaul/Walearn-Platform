import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import "./AssignmentDetail.css";

import Cookies from "js-cookie"
import Dayjs from 'dayjs';

import { BACKEND_URL } from '../../services/constants';
import { toast } from 'react-toastify';

const AssignmentDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams();


    const [assignment, setAssignment] = useState(null);
    const [submissionLink, setSubmissionLink] = useState(null);

    useEffect(() => {
        const getAssignment = async() => {
            const response = await fetch(`${BACKEND_URL}/courses/assignments/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            });
            const data = await response.json();
            setAssignment(data);
            console.log(data)
        }
        getAssignment();
    }, [id])

    const submitAssignment = async(e) => {
        e.preventDefault();

        const submissionData = {
            assignment: id,
            submission_link: submissionLink
        }

        console.log(submissionData)
        try {
            const response = await fetch(`${BACKEND_URL}/students/submit-assignment/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('token')}`
                },
                body: JSON.stringify(submissionData)
            })
            if (response.ok) {
                toast.success("Assignment submitted successfully")
                navigate("/student-grades")
            } else {
                toast.error("Assignment could not be submitted")
            }
            
        } catch (error) {
            toast.error("Assignment could not be submitted")
        }
    }

  return (
    <Wrapper>
        <>
        <div className="card mb-4">
            <div className="card-header">
                Assignment: {assignment?.title}
            </div>
            <div className="card-body">
                <div className="assignment-info">
                    <p><strong>Course:</strong>{assignment?.course_title}</p>
                    <p><strong>Posted on:</strong> {Dayjs(assignment?.created_at).format("YYYY-MM-DD hh:mm")}</p>
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
                <form onSubmit={submitAssignment}>
                    <div className="mb-3">
                        <input className="form-control" type="text" id="project_link" name="project_link" placeholder='Project Link' onChange={(e) => setSubmissionLink(e.target.value)} />
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