import React from 'react';


const AddProduct = () => {
    const handleSubmit = (e)=>{
        e.preventDefult();
        const form = e.target;
        const formdata = new FormData(form);
        const formObject = Object.fromEntries(formdata.entries());
        console.log(formObject);
    }
    
    return (
        <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
            <legend className="fieldset-legend">AddProduct</legend>

            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" name='password' placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
             
        </form>
    );
};

export default AddProduct;