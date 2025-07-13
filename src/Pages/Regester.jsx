import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../authprovider/Authprovider';


const Regester = () => {
    const {createUser,updateUser} = use(AuthContext)
    const navigate = useNavigate()

    const handleregester = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        createUser(formObject.email, formObject.password)
        .then((res)=>{
            const user = res.user;
            console.log(user);
            updateUser({displayName : formObject.name, photoURL: formObject.photourl})
            .then(()=>{
                
                navigate('/')
            })
        })
        .catch((err)=>{
            console.log(err);
        })

        console.log(formObject);
    }
    return (
        <div>
            <form onSubmit={handleregester} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mt-5 mb-5 p-4 mx-auto">
                <legend className="fieldset-legend">Regester</legend>

                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter your full name" />

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">photoURL </label>
                <input type="text" name='photourl' className="input" placeholder="photoURL" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Regester</button>
                <p className="text-center mt-4">Already have an account? <NavLink to={'/login'} className={'text-purple-500'}>Login</NavLink></p>
            </form>
        </div>
    );
};

export default Regester;