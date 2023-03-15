import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Axios from "axios"
import {Nav, List, Map} from "./compIndex"


function App() {

  const [apiData, setApiData] = useState("");

  return (

    <div className=" xl:h-screen flex flex-col">
      <div className=' sticky'><Nav /></div>

      <div className=' xl:flex h-[100%]'>
        <div className=' xl:bg-white w-[30%] xl:border-2 h-full'><List /></div>
        <div ><Map /></div>
      </div>

    </div>
  )
}

export default App
