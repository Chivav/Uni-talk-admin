import React, { useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const navigate = useNavigate();
  const [contentDropdown, setContentDropdown] = useState(false);

  const toggleMenu = () => {
    if (menuRef.current && overlayRef.current) {
      menuRef.current.classList.toggle('translate-y-0');
      menuRef.current.classList.toggle('-translate-y-full');
      overlayRef.current.classList.toggle('hidden');
      overlayRef.current.classList.toggle('bg-black/50');
    }
  };

  const toggleContentDropdown = () => {
    setContentDropdown(!contentDropdown);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#007BFF] text-white p-2 px-3 w-full">
        <p className="font-bold">Uni Talk</p>
        <HiMiniBars3BottomRight
          className="text-[22px] font-bold cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="hidden fixed inset-0 z-40 transition duration-300"
        onClick={toggleMenu}
      ></div>

      {/* Sliding Nav Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-fit bg-[#007BFF] text-white z-50 -translate-y-full transition-transform duration-300 ease-in-out"
      >
        <div className="flex justify-end p-4 items-center">
          <button
            className="text-3xl font-bold cursor-pointer"
            onClick={toggleMenu}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center p-4 pb-8 space-y-4 font-bold">
          <li>
            <button
              onClick={() => {
                navigate('/dashboard');
                toggleMenu();
              }}
              className="hover:text-[#47DC17] transition duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/admin');
                toggleMenu();
              }}
              className="hover:text-[#47DC17] transition duration-200"
            >
              Admin
            </button>
          </li>
          <li className="flex flex-col items-center">
            <button
              onClick={toggleContentDropdown}
              className="hover:text-[#47DC17] transition duration-200 flex items-center gap-2"
            >
              Content
              {contentDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {contentDropdown && (
              <ul className="text-white rounded-md shadow-md p-3 flex justify-center items-center flex-col space-y-2 w-full">
                <li>
                  <button className="w-full text-left hover:text-[#007BFF] transition duration-200">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:text-[#007BFF] transition duration-200">
                    Resources
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:text-[#007BFF] transition duration-200">
                    Community
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/user');
                toggleMenu();
              }}
              className="hover:text-[#47DC17] transition duration-200"
            >
              User
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/logout');
                toggleMenu();
              }}
              className="hover:text-[#47DC17] transition duration-200"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
