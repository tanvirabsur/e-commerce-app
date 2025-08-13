import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../authprovider/Authprovider';
import axios from 'axios';
import { useState } from 'react';


const Regester = () => {
    const { createUser, updateUser } = use(AuthContext)
    const [loading, setLoading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState("https://img.daisyui.com/images/profile/demo/spiderperson@192.webp");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    // console.log(import.meta.env.VITE_URL);
    const uploadImage = async (e) => {
        let img = e.target.files[0]

        if (!img) return;

        setLoading(true);
        setMessage("");
        setUploadedUrl("");

        const formData = new FormData()
        formData.append('file', img)
        formData.append('upload_preset', 'regester-img')
        // formData.append('cloud_name', 'dcc3yu4ae')
        // const uri = import.meta.env.VITE_URL 

        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/dcc3yu4ae/image/upload`, formData)
            console.log(res.data);
            setUploadedUrl(res.data.secure_url);
            setMessage(" Uploaded Successfully!");
        } catch (err) {
            setMessage(" Upload Failed!");
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    const handleregester = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        formData.append('profile', uploadedUrl)
        const formObject = Object.fromEntries(formData.entries());

        createUser(formObject.email, formObject.password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                updateUser({ displayName: formObject.name, photoURL: formObject.profile })
                    .then(() => {
                        axios.post(`https://assignment-11-server-six-sage.vercel.app/adduser`, formObject)
                            .then((res) => {
                                // console.log(res.data);
                                if (res.data.acknowledged) {
                                    navigate('/')
                                }


                            })


                    })
            })
            .catch((err) => {
                console.log(err);
            })



        console.log(formObject);
    }
    return (
        <div>
            <form onSubmit={handleregester} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mt-5 mb-5 p-4 mx-auto">
                <legend className="fieldset-legend">Regester</legend>

                {uploadedUrl && (
                    <img
                        src={uploadedUrl}
                        alt="Uploaded"
                        className="w-40 h-40 object-cover rounded-full shadow-md mx-auto"
                    />
                )}
                {message && <p className="text-sm font-semibold text-center text-blue-500">{message}</p>}
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter your full name" />

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                {/* <label className="label">photo url</label>
                <input type="file" onChange={uploadImage} name='photourl' className="input" placeholder="photoURL" /> */}
                <label className="label">Photo</label>
                <div className="flex flex-col items-center gap-4">
                    {/* Upload Button */}
                    <label className="cursor-pointer input w-full  px-4 py-2 rounded-md hover:bg-blue-500/50 hover:text-white transition">
                        Upload Photo
                        <input type="file" className="hidden" onChange={uploadImage} />
                    </label>

                    {/* Loader */}
                    {loading && (
                        <div className="flex items-center gap-2 text-blue-600">
                            <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
                            Uploading...
                        </div>
                    )}



                </div>


                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn bg-blue-500 text-white mt-4">Regester</button>
                <p className="text-center mt-4">Already have an account? <NavLink to={'/login'} className={'text-purple-500'}>Login</NavLink></p>
            </form>
        </div>
    );
};

export default Regester;