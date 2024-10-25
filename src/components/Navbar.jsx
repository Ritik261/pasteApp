import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaClipboardList } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
    return (
        <div className='bg-gray-900 p-4 shadow-md'> {/* Dark background for the navbar */}
            <div className='flex flex-row gap-4 place-content-evenly'>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                        `flex items-center text-white p-2 rounded-lg transition duration-300 ${isActive ? 'bg-blue-600' : 'hover:bg-blue-500 hover:text-white'}`
                    }
                >
                    <FaHome className='mr-2' /> Home
                </NavLink>
                <NavLink 
                    to='/pastes' 
                    className={({ isActive }) => 
                        `flex items-center text-white p-2 rounded-lg transition duration-300 ${isActive ? 'bg-blue-600' : 'hover:bg-blue-500 hover:text-white'}`
                    }
                >
                    <FaClipboardList className='mr-2' /> Paste
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
