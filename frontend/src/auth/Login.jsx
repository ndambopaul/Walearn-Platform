import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { BACKEND_URL } from '../services/constants';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password
        }

        try {
            const response = await fetch(`${BACKEND_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            if (response.ok) {
                window.alert("Login was successful")
                const data = await response.json()
                const token = data.accessToken
                Cookies.set("token", token, {expires: (1/72)})
                navigate("/dashboard")
                window.location.reload()
        
            } else {
                window.alert("Invalid Credentials")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='container mt-4'>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <form onSubmit={handleLogin}>
                    <h3 className='text-center'>WALEARN LOGIN</h3>
                    <div className="mb-3">
                        <label className='form-label'>Email</label>
                        <input type='email' id='email' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Password</label>
                        <input type='password' id='password' name='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Login</button>
                        <br/>
                        <p>No account yet? <a href='/auth/register'>Register Here</a></p>
                    </div>
                </form>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login