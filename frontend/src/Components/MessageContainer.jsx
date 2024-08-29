import React, { useEffect } from "react"
import SendInput from "./SendInput"
import Messages from "./Messages"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../Redux/userSlice"

const MessageContainer = () => {
  const {SelectedUser, authUser} = useSelector(store => store.user);

  const dispatch = useDispatch();
  useEffect(()=>{
    return () => dispatch(setSelectedUser(null));
  }, [])
  return (
    <>
    {
      SelectedUser ? (
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
      ) : (
        <>
        <div className="md:min-w-[550px] lg:w-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl p-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Hi, {authUser?.fullName}</h1> 
        <h1 className="text-3xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent p-2">Let's Start Chit-Chat </h1>
        </div>
        </>
      )
    }
    </>
  )
}

export default MessageContainer
