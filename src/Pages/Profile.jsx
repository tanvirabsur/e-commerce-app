import React, { use, useState } from 'react';
import { FaUser, FaEnvelope, FaEdit, FaSave } from 'react-icons/fa';
import { AuthContext } from '../authprovider/Authprovider';
const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { user } = use(AuthContext)

    const toggleEdit = async () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549989476-69a92fa57c36?q=80&w=2070&auto=format&fit=crop')" }}></div>
                    <img src={user?.photoURL} alt="User Avatar" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[25%] h-28 rounded-full border-8 border-white shadow-lg" />
                </div>
                <div className="pt-20 p-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">{user?.displayName}</h2>
                    <p className="text-gray-500">{user?.email}</p>
                </div>
                <div className="p-6">
                    <div className="flex justify-end mb-4">
                        <button type='submit' onClick={toggleEdit} className={`btn ${isEditing ? 'btn-secondary' : 'btn-primary'} gap-2`}>
                            {isEditing ? <FaSave /> : <FaEdit />}
                            {isEditing ? 'Save' : 'Edit Profile'}
                        </button>
                    </div>
                    <form className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text flex items-center gap-2"><FaUser />Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered w-full" disabled={!isEditing} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text flex items-center gap-2"><FaEnvelope />Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" disabled />
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text flex items-center gap-2"><FaMapMarkerAlt />District</span>
                                </label>
                                <input type="text" name="district"  className="input input-bordered w-full" disabled={!isEditing} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text flex items-center gap-2"><FaMapMarkerAlt />Upazila</span>
                                </label>
                                <input type="text"  name="upazila" className="input input-bordered w-full" disabled={!isEditing} />
                            </div>
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text flex items-center gap-2"><FaTint className='text-red-500' />Blood Group</span>
                            </label>
                            <input type="text" name="blood-group"  className="input input-bordered w-full" disabled={!isEditing} />
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;