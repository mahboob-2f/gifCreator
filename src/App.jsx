import { Random } from "./Components/Random"
import {Tag} from "./Components/Tag"
import "./App.css"
import { useEffect } from "react";
import Toaster from 'react-hot-toast'
import toast from "react-hot-toast";


function App() {


  return (
    <>
      <div className="background min-h-screen w-full bg-cover relative p-10">
        <h1 className="bg-white w-29/30 mx-auto text-3xl font-bold  uppercase py-4 text-center
          rounded-[12px]  
        ">Random gifs</h1>
        <div className=" pt-10  flex flex-col justify-center  items-center  gap-y-10">
          <Random />
          <Tag />
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>

  )
}

export default App
