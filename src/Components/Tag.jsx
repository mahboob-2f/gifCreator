import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Spinner } from './Spinner'
import useGif from '../../../formproject/src/hooks/useGif'

export const Tag = () => {
  const [tag,setTag] = useState('car');
  
  const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className='bg-blue-500 w-3/5 flex flex-col justify-between items-center border border-black rounded-lg'>
      <p className='
            underline text-2xl font-bold uppercase py-4
        '> Random {tag} GIF</p>
      <div>
        {
          loading ? ( <Spinner/>):(<img className='p-4 ' src={gif} alt=" gif" width={450} />)
        }
        
      </div>
      <div className='w-3/4'>
        <input 
          className='w-full  outline-none bg-white  py-2 rounded-lg
            transition-all duration-200 mb-4 text-center focus:border-[2px] text-lg font-semibold'
            onChange={(e)=> setTag(e.target.value)} value={tag}
        />
      </div>
      <div className='w-3/4   rounded flex justify-center items-center pb-6 cursor-pointer '>
        <button onClick={()=> fetchData(tag)}
          className='  border-[2px] cursor-pointer  hover:opacity-100 border-black bg-[white] opacity-80 w-full py-2 rounded-lg
            transition-all duration-200
              '>
          <span className='text-black font-bold'>GENERATE</span>
        </button>
      </div>

    </div>
  )
}
