import React, {   use, useEffect, useState } from 'react';

import { NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../authprovider/Authprovider';

const Navbar = () => {
    const {  user,Logout } = use(AuthContext)
    
// Logout,
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localThem = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localThem);
    }, [theme]);

    return (
        <>
            <div className="navbar justify-between bg-base-100 shadow-sm  sticky z-50 top-0 mb-4">
                <div className="navbar-start">

                    <NavLink className={'text-xl font-bold'} to={'/'}>Ely<span className='text-blue-500'>qor</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/products'}>All Products</NavLink></li>
                        <li><NavLink to={'/addproduct'}>Add product</NavLink></li>
                        <li><NavLink to={'/myproducts'}>My Products</NavLink></li>
                        <li><NavLink to={'/cart'}>Cart</NavLink></li>
                    </ul>
                </div>
                {/*  */}

                {user ? <div className="navbar-end gap-5">
                    <label className="toggle text-base-content">
                        <input type="checkbox" onClick={handleToggle} />
                        <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="4"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M20 6 9 17l-5-5"></path>
                            </g>
                        </svg>
                        <svg
                            aria-label="disabled"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </label>

                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" 
                        className="btn btn-ghost btn-circle avatar  tooltip my-tooltip tooltip-bottom" 
                        // data-tooltip-id="my-tooltip" 
                        // data-tooltip-content={user?.displayName}
                        //     data-tooltip-place="top"
                            >
                            <Tooltip 
                            content={user?.displayName}
                            anchorSelect='.my-tooltip'
                            style={{height: '70px', width: '100px'}}
                            place="top"
                             />
                            <div className="w-10 rounded-full " >

                                <img

                                    alt="Tailwind CSS Navbar component"

                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <li className='lg:hidden'><NavLink to={'/'}>Home</NavLink></li>
                            
                            <li><NavLink to={'/products'}>All Products</NavLink></li>
                            <li className='lg:hidden'><NavLink to={'/addproduct'}>addproduct</NavLink></li>
                            <li><NavLink to={'/myproducts'}>My Products</NavLink></li>
                            {
                                user?.email && <li><NavLink to={'/user/profile'}>Profile</NavLink></li>
                            }
                            <li className='lg:hidden'><NavLink to={'/cart'}>My Cart</NavLink></li>
                            <li><a className='' onClick={Logout}>Logout</a></li>
                        </ul>
                    </div>
                </div> : <div><button className='btn btn-neutral btn-sm '><NavLink to={'/login'}>Login</NavLink></button></div>}

                {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div> */}

            </div>
        </>
    );
};

export default Navbar;