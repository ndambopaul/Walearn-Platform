import React, { useState } from 'react';
import { BACKEND_URL } from '../services/constants';

const Register = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [gender, setGender] = useState(null);
    const [role, setRole] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const registerData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            phone_number: phoneNumber,
            gender: gender,
            role: role,
            password: password
        }

        try {
            const response = await fetch(`${BACKEND_URL}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            })

            if (response.ok) {
                window.alert("User account successfully created!!")
            } else {
                window.alert("Something went wrong!!")
            }
        } catch (error) {
            console.log(error)
        }
    
        console.log(registerData)

    }


  return (
    <div className='container mt-4'>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                        <label className='form-label'>First Name</label>
                        <input type='text' id='first_name' name='first_name' className='form-control' onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="col">
                        <label className='form-label'>First Name</label>
                        <input type='text' id='last_name' name='last_name' className='form-control' onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                        <label className='form-label'>Email</label>
                        <input type='email' id='email' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col">
                        <label className='form-label'>Username</label>
                        <input type='text' id='username' name='username' className='form-control' onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                        <label className='form-label'>Phone Number</label>
                        <input type='text' id='phone_number' name='phone_number' className='form-control' onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="col">
                        <label className='form-label'>Password</label>
                        <input type='password' id='password' name='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                        <label className='form-label'>Gender</label>
                        <select className='form-select' id='gender' name='gender' onChange={(e) => setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                        <div className="col">
                        <label className='form-label'>Role</label>
                        <select className='form-select' id='role' name='role' onChange={(e) => setRole(e.target.value)}>
                            <option value="STUDENT">Student</option>
                            <option value="INSTRUCTOR">Instructor</option>
                        </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">REGISTER</button>
                        <br/>
                        <p>Already have an account? <a href='/auth/login'>Login Here</a></p>
                    </div>
                </form>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Register