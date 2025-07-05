import React from 'react';

const handleregester = (e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
}

const Regester = () => {
    return (
        <div>
            <form onSubmit={handleregester} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Regester</legend>

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Regester</button>
            </form>
        </div>
    );
};

export default Regester;