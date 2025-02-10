import React from 'react';
import { users } from './utils/user';
import Brucrums from '../../components/Brucrums';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { LuNotebookPen } from 'react-icons/lu';
import { filter } from '../../assets';

const User = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <Brucrums text1={'Home'} text2={'User'} />
            </div>
            <div>
                <div className='w-full h-15 justify-between gap-2 flex px-4 pt-6'>
                    <div className=' px-2 rounded-lg flex items-center w-full border border-gray-400'>
                        <CiSearch className='text-[20px]' />
                        <input type="search" className='w-full' />
                    </div>
                    <div className=' w-10 rounded-md flex justify-center items-center bg-[#007BFF]'>
                        <img src={filter} alt="" />
                    </div>
                </div>
                <div className='p-4 '>
                    <button onClick={() => navigate('/add-user')} className='rounded-xl w-full text-white bg-[#007BFF] p-3'>
                        + Add User
                    </button>

                    <div className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {users.map((user, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 mb-6 rounded-lg shadow-[0_0_10px_#0000007f] hover:bg-gray-100"
                                >
                                    <h3 className="font-semibold text-lg">{user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.type}</p>
                                    <p className="text-gray-600">{user.email}</p>
                                    <p className={`mt-2 ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                                        {user.status}
                                    </p>
                                    <hr />
                                    <div className='flex mt-2 justify-between items-center'>
                                        <div className='flex gap-2 items-center'>
                                            <button>Edit</button>
                                            < LuNotebookPen />
                                        </div>
                                        <button className='flex items-center gap-1'>
                                            <p>Delete</p>
                                            < RiDeleteBinLine />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
