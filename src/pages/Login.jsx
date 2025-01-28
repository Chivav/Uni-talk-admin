import React from 'react';
import Logo from '../components/Logo';
import { IoMailOutline } from "react-icons/io5";
import { GoLock } from "react-icons/go";


const Login = () => {
    return (
        <div className='p-6 py-12 flex flex-col min-h-screen w-full'>
            <div className='mt-16 justify-center items-center flex flex-col'>
                <Logo width={'80px'} />
                <p className='font-[700] text-[20px] mb-4'>Admin Login</p>
            </div>
            <p className='text-[#999999] text-[14px]'>Welcome back! Please log in to access your admin dashboard.</p>

            <div className='mt-6 w-full'>
                {/* Email Input */}
                <div>
                    <p className='font-bold mb-1 text-[18px]'>Email</p>
                    <div className='rounded-lg border-2 border-[#999999] flex items-center p-2 py-4'>
                        <IoMailOutline className='text-[#999] mt-1 text-[18px]' />
                        <input
                            type="email"
                            className='outline-none w-full ml-2'
                            autoComplete="off"
                            placeholder='Email'
                        />
                    </div>
                </div>

                <div className='mt-6'>
                    <p className='font-bold mb-1 text-[18px]'>Password</p>
                    <div className='rounded-lg border-2 border-[#999999] flex items-center p-2 py-4'>
                        <GoLock className='text-[#999] text-[18px]' />
                        <input
                            type="password"
                            className='outline-none w-full ml-2'
                            autoComplete="new-password"
                            placeholder='Password'
                        />
                    </div>
                </div>

                <div className='flex my-6'>
                    <label htmlFor="checkbox" className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="hidden peer"
                        />
                        <span className="w-5 text-white font-bold h-5 border-2 border-[#007BFF] rounded-sm flex items-center justify-center mr-2 peer-checked:bg-[#007BFF]">
                            ✔
                        </span>
                        <p className='text-[15px] self-center '>Remember me</p>
                    </label>
                </div>

                <button className='p-3 rounded-lg text-white font-bold text-[19px] text-main bg-[#007BFF] w-full'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
