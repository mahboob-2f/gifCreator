import { Random } from "./Components/Random"
import Tag from "./Components/Tag"
import "./App.css"
import { useEffect } from "react";
import Toaster from 'react-hot-toast'
import toast from "react-hot-toast";


function App() {


  return (
    <>
      <div className="background min-h-screen w-full  ">
        <h1 className="bg-white w-19/20 mx-auto text-3xl font-bold  uppercase py-4 text-center
          rounded-[12px] relative top-10
        ">Random gifs</h1>
        <div className=" relative top-20 flex flex-col justify-center  items-center  gap-y-10">
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
