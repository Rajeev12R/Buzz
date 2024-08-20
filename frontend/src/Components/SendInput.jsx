import React from 'react'
import { IoMdSend } from "react-icons/io";


const SendInput = () => {
  return (
    <form action="" className='px-4 my-2 h-screen'>
        <div className='w-full relative '>
        <input className='rounded-full text-black border block w-full p-3  border-[#acacac] outline-none' type="text" name="" placeholder='Send a message...' id="" />
        <button className='absolute flex text-black inset-y-0 end-3  items-center'>
        <IoMdSend/>
        </button>
        </div>

    </form>
  )
}

export default SendInput