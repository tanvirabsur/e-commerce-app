import axios from 'axios';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    axios.post('http://localhost:8080/user', formObject, {
        withCredentials: true
    })
    .then(res => console.log(res.data))

    console.log(formObject);
}

const Login = () => {
    return (
        <div>
            <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" name='password' placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
            
        </form>
            <button className="mx-auto block btn btn-active mt-4 w-xs"><FcGoogle className='mx-auto' size={25} /></button>
        </div>
        
        
    );
};

export default Login;