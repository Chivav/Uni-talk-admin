import React from 'react';
import { blog } from '../../../assets';

const Blogs = () => {
    return (
        <div>
            <img className='m-auto' src={blog} alt="" />
            <p>Total Blogs</p>
            <p>4,456</p>
        </div>
    );
}

export default Blogs;
