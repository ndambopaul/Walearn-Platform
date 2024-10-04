import React, { useState } from 'react';
import { IoPencilOutline } from "react-icons/io5";
import { BACKEND_URL } from '../../services/constants';
import { toast } from 'react-toastify';
import Cookies from "js-cookie"

const EditAssignmentSubmission = ({ grade }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [submissionLink, setSubmissionLink] = useState(null)
  console.log(grade)

  const handleSubmit = async(e) => {
    e.preventDefault()

    const submissionData = {
      submission_link: submissionLink
    }

    try {
      const response = await fetch(`${BACKEND_URL}/students/assignments-submissions/${grade.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify(submissionData)
      })
      if (response.ok) {
        toast.success("Project Link Updated Successfully")
        window.location.reload()
      } else {
        toast.error("Something went wrong")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>

      <button className="btn btn-primary" onClick={() => setIsOpen(true)} data-bs-toggle='modal' data-bs-target='#editGradModal'><IoPencilOutline /></button>
      <div className="modal fade" id="editGradModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Edit Project Link</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" id="submissionLink" name='submissionLink' onChange={(e) => setSubmissionLink(e.target.value)} placeholder='Enter Project Link' required />
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
    </>
  )
}

export default EditAssignmentSubmission