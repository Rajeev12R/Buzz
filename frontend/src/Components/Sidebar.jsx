import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import OtherUsers from './OtherUsers';



const Sidebar = () => {
  return (
    <div className='border p-4 rounded-md border-zinc-400 flex flex-col'>
        <form action="">
            <div className=' flex items-center gap-2'>
            <input className='input input-bordered pl-5 pt-3 pr-5 pb-3  rounded-full text-sm text-black' type="search" placeholder='Search...' />
            <button type="submit" className='btn btn-circle rounded-full outline-none text-black hover:text-zinc-500 cursor-pointer p-1 hover:bg-[#ff9999]'><HiOutlineSearch className='w-6 h-6 outline-none'/></button>
            </div>
        </form>
        <div className="divider"></div>
        <OtherUsers/>
        <div className='p-3 flex items-center justify-center bg-blue-400 rounded-2xl font-semibold'><button type="submit">Logout</button></div>
    </div>
  )
}

export default Sidebar