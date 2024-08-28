import React from "react"
import SendInput from "./SendInput"
import Messages from "./Messages"
import { useSelector } from "react-redux"

const MessageContainer = () => {
  const {SelectedUser} = useSelector(store => store.user);
  return (
      <div className='md:min-w-[550px] flex flex-col'>
        <div className='flex items-center gap-3 bg-blue-400 rounded-xl px-4 py-2 m-2 cursor-pointer'>
          <div className='avatar online'>
            <div className='w-12 h-12 rounded-full'>
              <img src={SelectedUser?.profilePhoto} alt=''/>
            </div>
          </div>
          <div className="flex sm:h-[30px] md:h-[30px] lg:h-[30px] lg:w-screen  flex-1 flex-col">
            <div className="flex justify-between gap-2">
            <p>{SelectedUser?.fullName}</p>
            </div>
          </div>
        </div>
        <Messages />
        <SendInput />
    </div>
  )
}

export default MessageContainer
