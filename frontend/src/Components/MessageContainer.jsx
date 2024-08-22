import React from "react"
import SendInput from "./SendInput"
import Messages from "./Messages"

const MessageContainer = () => {
  return (
      <div className='md:min-w-[550px] flex flex-col'>
        <div className='flex items-center gap-3 bg-blue-400 rounded-xl px-4 py-2 m-2 cursor-pointer'>
          <div className='avatar online'>
            <div className='w-12 h-12 rounded-full'>
              <img src='https://avatar.iran.liara.run/public/boy?username=Rajeev' alt=''/>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between gap-2">
            <p>Rajeev</p>
            </div>
          </div>
        </div>
        <Messages />
        <SendInput />
    </div>
  )
}

export default MessageContainer
