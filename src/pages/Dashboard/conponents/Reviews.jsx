import React from 'react';

const Reviews = () => {
    return (
        <div className='p-2 px-4 text-[14px] shadow-[0_0_10px_#0000003f] rounded-md'>
            <h4>Reviews</h4>

            {/* First Range: 80/100 */}
            <div>
                <label htmlFor="range2" className='flex justify-between mt-1'>
                    <p>Negative reviews</p>
                    <p>4%</p>
                </label>
                <input
                    id="range1"
                    type="range"
                    max="100"
                    value="80"
                    readOnly
                    className="w-full mt-2"
                />
            </div>

            {/* Second Range: 40/100 */}
            <div >
                <label htmlFor="range2" className='flex justify-between mt-1'>
                    <p>Positive reviews</p>
                    <p>80%</p>
                </label>
                <input
                    id="range2"
                    type="range"
                    max="100"
                    value="40"
                    readOnly
                    className="w-full mt-2"
                />
            </div>

            {/* Third Range: 2/100 */}
            <div >
                <label htmlFor="range2" className='flex justify-between mt-1'>
                    <p>Neutral Reviews </p>
                    <p>16%</p>
                </label>
                <input
                    id="range3"
                    type="range"
                    max="100"
                    value="2"
                    readOnly
                    className="w-full mt-2"
                />
            </div>
        </div>
    );
};

export default Reviews;
