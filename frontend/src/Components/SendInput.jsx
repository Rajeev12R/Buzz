import { useState } from "react";
import React from 'react';
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/messageSlice"; 

const SendInput = () => {
  const [message, setMessage] = useState("");
  const { SelectedUser } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${SelectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": 'application/json',
          },
          withCredentials: true,
        }
      );
      
      console.log('API Response:', res);
      const newMessage = res?.data?.newMessage;
      if (newMessage) {
        dispatch(addMessage(newMessage)); // Use addMessage to append the new message
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
    }
    
    setMessage(""); // Clear the input field
  };

  return (
    <form onSubmit={onSubmitHandler} className='px-4 my-2'>
      <div className='w-full relative'>
        <input
          className='rounded-full text-black border block w-full py-3 px-5 border-[#acacac] outline-none'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Send a message...'
        />
        <button type="submit" className='absolute flex text-black inset-y-0 end-0 pr-4 items-center'>
          <IoMdSend />
        </button>
      </div>
    </form>
  );
}

export default SendInput;
