import React, { useState } from 'react';
import Brucrums from '../../components/Brucrums';
import { FaFileContract } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
    const [modal, setModal] = useState(null);
    const navigate = useNavigate()

    const handleOpenModal = () => {
        setModal(1); // Show confirmation modal first
    };

    const handleConfirm = () => {
        setModal(2); // Show success modal when "Yes" is clicked
        setTimeout(() => {
            setModal(null);
            navigate('/admin')
        }, 3000);
    };

    return (
        <div className="relative">
            <Brucrums text1={'Home'} text2={'Admin'} text3={'Add Admin'} />
            <div className='p-4'>
                <div className='flex flex-col my-6 gap-6'>
                    {["Fullname", "Email", "Mobile Numbers", "Password", "Role"].map((label, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <label>{label}</label>
                            <div className='flex items-center p-3 gap-2 border border-[#0000003d] rounded-lg'>
                                <FaFileContract />
                                <input placeholder={label} autoComplete="new-password" className='outline-none text-[14px] w-full h-full py-1' type={label === "Password" ? "password" : "text"} />
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleOpenModal} className='w-full my-3 text-white py-3 rounded-lg bg-blue-600'>Add Admin</button>
            </div>

            {/* Confirmation Modal */}
            {modal === 1 && (
                <div className="fixed  inset-0 flex items-center justify-center backdrop-blur-md  p-6  bg-opacity-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-md font-semibold mb-4">Are you sure you want to create this admin?</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={handleConfirm} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Yes</button>
                            <button onClick={() => setModal(null)} className="px-4 py-2 bg-gray-400 text-white rounded-lg">No</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {modal === 2 && (
                <div className="fixed  inset-0 flex items-center justify-center backdrop-blur-md  p-6  bg-opacity-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg font-semibold text-center">Admin Added Successfully</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddAdmin;
