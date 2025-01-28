import React from 'react';
import Totaluser from './conponents/Totaluser';
import Community from './conponents/Community';
import Blogs from './conponents/Blogs';
import Reviews from './conponents/Reviews';
import { recent_activity } from './util/recent';

const Dashboard = () => {
  return (
    <div className=''>

      <div className='flex my-6 rounded-2xl text-[13px]  bg-[#007BFF] text-white w-[88%] m-auto p-4 py-6 items-center gap-4 text-center justify-center' >
        <div className="">
          <Totaluser />
        </div>
        <div className="h-16 w-[2px] bg-white"></div>
        <div className="">
          <Community />
        </div>
        <div className="h-16 w-[2px] bg-white"></div>
        <div className="">
          <Blogs />
        </div>
      </div>
      <div className='p-6'>
        <Reviews />
      </div>

      <div className="p-6 mb-10 py-2 max-w-screen-sm mx-auto">
        <div className='flex justify-between items-center'>

          <h3 className="text-lg font-bold my-4 text-center">Recent Activity</h3>
          <p className='text-[#007BFF]'>See all</p>
        </div>
        <div className="overflow-y-auto max-h-96  shadow-md rounded-lg">
          <table className="table-auto w-full text-sm ">
            <thead className="bg-gray-100 sticky top-0">
              <tr className='text-[12px]'>
                <th className="border border-gray-300 p-3 text-left">Name</th>
                <th className="border border-gray-300 p-2 text-left">Email</th>
                <th className="border border-gray-300 p-2 text-left">Activity</th>
              </tr>
            </thead>
            <tbody>
              {recent_activity.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[10px]">
                  <td className="border border-gray-300 p-3 truncate max-w-[100px]">
                    {item.name || 'N/A'}
                  </td>
                  <td className="border border-gray-300 p-2 truncate max-w-[120px]">
                    {item.email || 'N/A'}
                  </td>
                  <td className="border border-gray-300 p-2 truncate max-w-[150px]">
                    {item.activity || 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
