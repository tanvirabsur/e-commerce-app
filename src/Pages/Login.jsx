import React, { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../authprovider/Authprovider';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';






const Login = () => {
    const { createUserWithGoogle } = use(AuthContext)
    const { login } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        login(formObject.email, formObject.password)
            .then(() => {
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(() => {
                console.log();
                Swal.fire({
                    title: 'Error!',
                    text: 'Login failed. Please check your information.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-5 mb-5 mx-auto">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>

                <p className="text-center mt-4">Don't have an account? <NavLink to={'/regester'} className={'text-purple-500'}>Regester</NavLink></p>

            </form>
            <button onClick={()=>{
                createUserWithGoogle()
                    .then(() => {
                        navigate(`${location.state ? location.state : '/'}`)
                    })
                    .catch((error) => {
                        console.error('Google login failed:', error);
                        Swal.fire({
                            title: 'Error!',
                            text: 'Google login failed. Please try again.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
            }} className="mx-auto block btn btn-active mb-5 mt-4 w-xs"><FcGoogle className='mx-auto' size={25} /></button>
        </div>


    );
};

export default Login;