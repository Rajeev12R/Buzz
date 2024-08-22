import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })
  const navigate = useNavigate()
  const handleCheckbox = (gender) => {
    setUser({...user, gender})
  } 
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/register", user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if(res.data.success)
          navigate("/login");
          toast.success(res.data.message);
    } catch (error) {
      console.log(error)
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-full rounded-[10px] p-8 shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
          <h1 className='text-3xl font-semibold text-center'>Signup</h1>
          <br />
          <form action='' onSubmit={onSubmitHandler} className=''>
            <div className='flex flex-col'>
              <label htmlFor='' className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input
                className='text-gray-950 rounded-lg p-2 w-[400px]'
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                type='text'
                placeholder='Rajeev'
              />
              <label htmlFor='' className='label p-2 mt-3'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                className='text-gray-950  rounded-lg p-2 w-[400px]'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type='text'
                placeholder='Rajeev12'
              />
              <label htmlFor='' className='label p-2 mt-3'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input
                className='text-gray-950 rounded-lg p-2 w-[400px]'
                type='password'
                value={user.password}
                placeholder="123"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label htmlFor='' className='label p-2 mt-3'>
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input
                className='text-gray-950 rounded-lg p-2 w-[400px]'
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                type='password'
                placeholder="123"
              />
              <label className='label p-2 flex items-center'>
                <span className='text-base label-text pr-8 mr-4 pt-3'>
                  Gender
                </span>
                <div className='flex items-center pt-3'>
                  <input
                    type="checkbox"
                    checked={user.gender === "male"}
                    onChange={()=> handleCheckbox("male")}
                    className='w-4 h-4 radio-blue'
                  />
                  <label htmlFor='male' className='ml-2 text-base label-text'>
                    Male
                  </label>
                </div>
                <div className='flex items-center ml-4 pt-3'>
                  <input
                    type='checkbox'
                    checked={user.gender === "female"}
                    onChange={()=> handleCheckbox("female")}
                    className='w-4 h-4 radio-pink'
                  />
                  <label htmlFor='female' className='ml-2 text-base label-text'>
                    Female
                  </label>
                </div>
              </label>
            </div>
            <div className='flex items-center justify-center rounded-3xl bg-[salmon] hover:bg-[#d56b5f] mt-4 p-3 '>
              <button type='submit' className=''>
                Signup
              </button>
            </div>
            <Link to='/login'>
              <h3 className='text-center text-[#032B44] hover:text-[#2d4453] pt-4'>
                Already have an account?
              </h3>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
