import React from 'react'

const EditAssignmentSubmission = () => {
  return (
    <div className="modal fade" id="editGradModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Edit Project Link</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" id="submissionLink" name='submissionLink' placeholder='Enter Project Link' required />
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default EditAssignmentSubmission