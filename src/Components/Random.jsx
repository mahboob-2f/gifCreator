import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Random = () => {
  const [gif, setGif] = useState('');

  

  const api_key = import.meta.env.VITE_API_KEY;
  // console.log(api_key);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=D2HoV7T3cHiMFHS3JarAiWzIpTQMA2rX`;
  // const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const output = await response.json();
  //       console.log(output.data.images.downsized_large.url);
  //       const imageSource = output.data.images.downsized_large.url;
  //       setGif(imageSource);
  //      } catch (e) {
  //       toast.error("something went wrong");
  //       console.log("something went wrong");
  //     }
  //   }
  // useEffect(() => {
    
  //   fetchData();
  // },[]);
  const clickHandler = () => {
    // fetchData();
  }
  const fetchData = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=D2HoV7T3cHiMFHS3JarAiWzIpTQMA2rX`;
    const output = await axios.get(url);
    console.log(output);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-[#4ADE80] w-1/2 flex flex-col justify-between items-center border border-black rounded-lg'>
      <p className='
            underline text-2xl font-bold uppercase py-4
        '>A Random GIF</p>
      <div>
        <img src={gif} alt=" gif" width={450} />
      </div>
      <div className='w-3/4   rounded flex justify-center items-center pb-6'>
        <button onClick={clickHandler}
          className='  bg-[white] opacity-80 w-full py-2 rounded-lg'>
          <span className='text-black font-bold'>GENERATE</span>
        </button>
      </div>

    </div>
  )
}
