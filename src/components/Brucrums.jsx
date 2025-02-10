import React from 'react';

const Brucrums = ({ text1, text2, text3 }) => {
    return (
        <div className='p-3 flex gap-2 shadow-[0_0_10px_#0000004f] mt-1'>
            <p className='font-[14px]'>{text1}</p>
            <div className='w-[2px] rotate-15 opacity-50  bg-black'> </div>
            <p className='font-[14px]'>{text2}</p>
            {
                text3 && (
                    <>
                        <div className='w-[2px] rotate-15 opacity-50  bg-black'> </div>
                        <p className='font-[14px]'>{text3}</p>
                    </>
                )
            }
        </div>
    );
}

export default Brucrums;
