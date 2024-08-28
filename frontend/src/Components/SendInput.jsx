import { useState } from "react";
import React from 'react'
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import { useDispatch , useSelector} from "react-redux";
import setMessages from "../Redux/messageSlice"


const SendInput = () => {

  const [message, setMessage] = useState("");
  const {SelectedUser} = useSelector(store => store.user);
  const {messages} = useSelector(store => store.message);
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/message/send/${SelectedUser?._id}`,{ message} , {
        headers: {
          "Content-Type": 'application/json',
        },
        withCredentials: true,
      });
      console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]))
      
    } catch (error) {
      console.log(error);
      
    }
    setMessage("");
  }
  return (
    <form onSubmit={onSubmitHandler} action="" className='px-4 my-2'>
        <div className='w-full relative '>
        <input className='rounded-full text-black border block w-full py-3 px-5  border-[#acacac] outline-none' type="text" name="" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Send a message...' id="" />
        <button type="submit" className='absolute flex text-black inset-y-0 end-0 pr-4  items-center'>
        <IoMdSend/>
        </button>
        </div>

    </form>
  )
}

export default SendInput