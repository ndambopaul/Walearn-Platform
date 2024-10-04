import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { BACKEND_URL } from '../services/constants';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault();

        const loginData = {
            username: username,
            password: password
        }

        try {
            const response = await fetch(`${BACKEND_URL}/users/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            if (response.ok) {
                toast.success("Login was successful")

                const data = await response.json()
                const token = data.access
                Cookies.set("token", token, {expires: (1/72)})
                navigate("/")
                window.location.reload()
        
            } else {
                toast.error("Invalid Credentials")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 p-5 shadow-md rounded bg-white">
                <form onSubmit={handleLogin}>
                    <h3 className='text-center'>DEVS LOGIN</h3>
                    <div className="mb-3">
                        <label className='form-label'>Username</label>
                        <input type='text' id='username' name='username' className='form-control' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Password</label>
                        <input type='password' id='password' name='password' className='form-control' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                        <br/>
                        <p className='mt-3'>No account yet? <a href='/auth/register'>Register Here</a></p>
                    </div>
                </form>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login