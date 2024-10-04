import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import Dayjs from 'dayjs'

const GradeDetails = ({ grade }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <button className="btn btn-primary" onClick={() => setOpenModal(true)}  data-bs-toggle='modal' data-bs-target='#gradeDetailsModal'><IoEyeOutline /></button>
    <div className="modal fade" id="gradeDetailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Grade Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p><b>Course:</b> {grade?.course}</p>
        <p><b>Assignment:</b> {grade.assignment_title}</p>
        <p><b>Marks:</b> {grade.score}</p>
        <p><b>Due Date:</b> {Dayjs(grade.assignment.due_date).format('MMMM DD, YYYY')}</p>
        <p><b>Status: </b>{grade.status}</p>
        {grade.comment && <p><b>Comment:</b> {grade.comment}</p>}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default GradeDetails