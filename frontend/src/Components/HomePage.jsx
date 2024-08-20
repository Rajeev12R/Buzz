import React from 'react'
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

function HomePage() {
  return (
    <div className='flex w-full h-screen rounded-[10px] shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
      <Sidebar />
      <MessageContainer/>
    </div>
  )
}

export default HomePage;