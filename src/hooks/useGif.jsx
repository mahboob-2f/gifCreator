import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'


const useGif = (tag) => {
    const api_key = import.meta.env.VITE_API_KEY;
    const TagUrl = `https://api.giphy.com/v1/gifs/random?api_key=D2HoV7T3cHiMFHS3JarAiWzIpTQMA2rX&tag=${tag}`;
    const RandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=yNiO4YdkAefLYZEH1vcBBrh8MAdHsWyf`;

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);



    const fetchData = async (tag) => {
        setLoading(true);

        const output = await axios.get(tag ? TagUrl : RandomUrl);
        const imageSource = output.data.data.images.downsized_large.url;
        setGif(imageSource);
        
        setLoading(false);
    }
    useEffect(() => {
        fetchData('car');
    }, []);
    return { gif, loading, fetchData };
}

export default useGif