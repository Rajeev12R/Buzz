import React from 'react'

const Message = () => {
  return (
    <>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://avatar.iran.liara.run/public/boy?username=Rajeev" />
    </div>
  </div>
  <div className="chat-header">
    Rajeev
    <time className="text-xs opacity-50 text-white">12:45</time>
  </div>
  <div className="chat-bubble">Yo Bro</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://avatar.iran.liara.run/public/boy?username=Rakesh" />
    </div>
  </div>
  <div className="chat-header">
    Rakesh
    <time className="text-xs opacity-50 text-white">12:46</time>
  </div>
  <div className="chat-bubble">Let's Party</div>
</div>
    </>
  )
}

export default Message