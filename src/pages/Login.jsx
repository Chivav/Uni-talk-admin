import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] w-full p-60 m-auto'>
            <div className='grid grid-cols- gap-6  md:grid-cols-2 lg:grid-cols-3'>
                <form action="" className=' bg-blue-600 w-[25%]' >
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />

                    <button>Submit</button>
                </form>
                <form action="" className=' bg-blue-600 w-[25%]' >
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />

                    <button>Submit</button>
                </form>
                <form action="" className=' bg-blue-600 w-[25%]' >
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' autoComplete='off' />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
