import React, { useContext } from 'react';
import Wrapper from '../../components/Wrapper';
import "./Profile.css"

import { DataContext } from '../../context/DataContext';
import { BACKEND_URL } from '../../services/constants';

const Profile = () => {
    const { studentDetails } = useContext(DataContext);
  return (
    <Wrapper>
   <div className="card">
   <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src={`${BACKEND_URL}/${studentDetails?.avatar}`} />
                <span className="font-weight-bold">{studentDetails?.first_name} {studentDetails?.last_name}</span><span className="text-black-50">{studentDetails?.email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder="first name" value={studentDetails?.first_name}/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder="surname" value={studentDetails?.last_name}/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder="enter phone number" value={studentDetails?.phone}/></div>
                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address line 1" value={studentDetails?.address}/></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value={studentDetails?.email}/></div>

                </div>
                <div className="row mt-3">
                <div className="col-md-6"><label className="labels">City</label><input type="text" className="form-control" placeholder="state" value={studentDetails?.city}/></div>
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value={studentDetails?.country}/></div>
                    
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        {/*
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value=""/></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div>
        */}
    </div>
   </div>
    </Wrapper>
  )
}

export default Profile