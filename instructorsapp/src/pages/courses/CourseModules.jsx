import React from 'react';
import Wrapper from '../../components/Wrapper';

const CourseModules = () => {
  return (
    <Wrapper>
        <div className=''>
            <div className="row">
      <div className="card">
        <h4 className="card-header">Course Modules</h4>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Course</th>
                            <th scope="col">Module Name</th>
                            <th scope="col" colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Data Science 101</td>
                            <td>Final Project</td>
                            <td className="status pending">Pending Review</td>
                            <td><a href="#" className="btn btn-primary btn-sm">Review Now</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Machine Learning Basics</td>
                            <td>Midterm Exam</td>
                            <td className="status completed">Reviewed</td>
                            <td><a href="#" className="btn btn-primary btn-sm">View</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      </div>
            </div>
        
    </Wrapper>
  )
}

export default CourseModules