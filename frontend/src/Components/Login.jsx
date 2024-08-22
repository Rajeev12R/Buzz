import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../Redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/login", user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
      if(res.data.success)
        navigate("/")
      dispatch(setAuthUser(res.data))
      
        // toast.success(res.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
    setUser({
      username: "",
      password: "",
    })
  }
  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className='w-full  rounded-[10px] p-8 shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
          <h1 className='text-3xl font-semibold text-center'>Login</h1>
          <br />
          <form action='' onSubmit={onSubmitHandler} className=''>
            <div className='flex flex-col'>
              <label htmlFor='' className='label p-2 mt-3'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                className='text-gray-950  rounded-lg p-2 w-[400px]'
                type='text'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                name=''
                id=''
                placeholder='Rajeev12'
              />
              <label htmlFor='' className='label p-2 mt-3'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input
                className='text-gray-950 rounded-lg p-2 w-[400px]'
                type='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                name=''
                id=''
                placeholder=''
              />
            </div>
            <div className='flex items-center justify-center rounded-3xl bg-[salmon] hover:bg-[#d56b5f] mt-[2.5rem] p-3 '>
              <button type='submit' className=''>
                Login
              </button>
            </div>
            <Link to='/register'>
              <h3 className='text-center text-[#032B44] hover:text-[#2d4453] pt-4'>
                Don't have an account yet? Sign Up
              </h3>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login;
