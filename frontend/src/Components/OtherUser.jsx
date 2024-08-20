import React from 'react'

const OtherUser = () => {
  return (
    <div className='mb-2'>
        <div className='flex items-center gap-3 hover:bg-[#ff9999] rounded-xl p-2 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 h-12 rounded-full">
                    <img src="https://avatar.iran.liara.run/public/boy?username=Rajeev" alt="" />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col flex-1">
                    <p>Rajeev</p>
                </div>
            </div>
        </div>
        <div className=''>

        </div>

    </div>
  )
}

export default OtherUser