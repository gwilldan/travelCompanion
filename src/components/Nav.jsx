import React from 'react'
import {FaSistrix} from "react-icons/fa"

function Nav() {
  return (
    <div className=' bg-blue-600 flex text-white items-center py-3 px-6 justify-between' >
        <h2>Travel Advisor</h2>

        <div className=' flex items-center gap-4'>
            <h2>Explore new places</h2>

            <div className=' flex items-center bg-blue-400 p-1 rounded-md'>
                <button className=' mx-2 text-white '><FaSistrix /></button>
                <input className=' bg-inherit text-white focus:outline-none' type="text" />
            </div>
        </div>
        
    </div>
  )
}

export default Nav