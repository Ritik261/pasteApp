import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../Redux/pasteSlice';

const Home = () => {
    const[title, setTitle] =useState('');
    const[value, setValue] =useState('');

    const [searParam, setSearchParam] = useSearchParams();
    const pasteId = searParam.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(()=>{
        if(pasteId){
            const paste = allPastes.find((p)=> p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }

    },[pasteId])

    function createPaste(){
        const paste = {
            title: title,
            content: value,
            _id : pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if(pasteId){
            //update
            dispatch(updateToPastes(paste))


        }
        else{
            //create
            dispatch(addToPastes(paste))
        }

        //

        setTitle('')
        setValue('')
        setSearchParam({})
    }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className='flex flex-row gap-7 place-content-between'>
            <input 
                type="text" 
                placeholder='Enter title here' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className='border-2 border-gray-600 bg-gray-700 text-white p-2 rounded-lg w-[66%] mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            
            <button 
                onClick={createPaste} 
                className='bg-blue-600 text-white p-2 rounded-lg mt-2 pl-4 transition duration-300 hover:bg-blue-500'>
                { 
                    pasteId ? "Update My Paste" : "Create My Paste"
                }
            </button>
        </div>
        <div className='mt-8'>
            <textarea 
                className='border-2 border-gray-600 bg-gray-700 text-white rounded-lg mt-4 min-w-[500px] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                value={value} 
                placeholder='Enter content here' 
                onChange={(e) => setValue(e.target.value)} 
                rows={20} />
        </div>
    </div>
  )
}

export default Home
