import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';
import { FaEdit, FaEye, FaTrash, FaCopy, FaShareAlt } from 'react-icons/fa';

const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <input 
                type="search" 
                placeholder='Search here' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className='border-2 border-gray-600 bg-gray-700 text-white p-2 rounded-2xl min-w-[600px] mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            />
            <div className='flex flex-col gap-5 mt-5'>
                {filteredData.length > 0 && filteredData.map((paste) => {
                    return (
                        <div className="border border-gray-600 bg-gray-700 text-white p-4 rounded-lg" key={paste._id}>
                            <div className="font-bold text-lg">{paste.title}</div>
                            <div className="mt-2">{paste.content}</div>
                            <div className='flex flex-row gap-4 place-content-evenly mt-4'>
                                <button className='bg-blue-600 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-500'>
                                    <a className='flex items-center text-white' href={`/?pasteId=${paste?._id}`}>
                                        <FaEdit className='mr-2' /> Edit
                                    </a>
                                </button>
                                <button className='bg-blue-600 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-500'>
                                    <a className='flex items-center text-white' href={`/pastes/${paste?._id}`}>
                                        <FaEye className='mr-2' /> View
                                    </a>
                                </button>
                                <button 
                                    onClick={() => handleDelete(paste?._id)} 
                                    className='bg-red-600 text-white p-2 rounded-lg transition duration-300 hover:bg-red-500'>
                                    <div className='flex items-center'>
                                        <FaTrash className='mr-2' /> Delete
                                    </div>
                                </button>
                                <button 
                                    onClick={() => {
                                        navigator.clipboard.writeText(paste?.content);
                                        toast.success("Copied to Clipboard");
                                    }} 
                                    className='bg-green-600 text-white p-2 rounded-lg transition duration-300 hover:bg-green-500'>
                                    <div className='flex items-center'>
                                        <FaCopy className='mr-2' /> Copy
                                    </div>
                                </button>
                                <button className='bg-blue-600 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-500'>
                                    <div className='flex items-center'>
                                        <FaShareAlt className='mr-2' /> Share
                                    </div>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Paste
