import React from 'react';
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-[#007BFF] text-white p-2 px-3 w-gull'>
      <p className='font-bold'>Uni Talk</p>
      < HiMiniBars3BottomRight className='text-[22px] font-bold'/>
    </div>
  );
}

export default Navbar;
