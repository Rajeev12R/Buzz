import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

const Message = ({message}) => {
  const scroll = useRef();
  const {authUser} = useSelector(store => store.user);
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior: "smooth"})
  }, [message])
    const {SelectedUser} = useSelector(store => store.user)
  return (
    <>
<div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? 'chat-end': 'chat-start'}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={message?.senderId === authUser?._id ? authUser?.profilePhoto : SelectedUser?.profilePhoto} />
    </div>
  </div>
  <div className="chat-bubble">{message.message}</div>
</div>
    </>
  )
}

export default Message