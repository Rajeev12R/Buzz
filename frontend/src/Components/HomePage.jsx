import React from 'react'
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

function HomePage() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] my-[10%] rounded-lg overflow-hidden shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
      <Sidebar />
      <MessageContainer/>
    </div>
  )
}

export default HomePage;