import React from 'react'
import { setSelectedUser } from '../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const {SelectedUser} = useSelector(store=>store.user);

    const selectUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    }
  return (
    <>
    <div className='mb-2'>
        <div onClick={()=> selectUserHandler(user)} className={` ${SelectedUser?._id === user?._id ? 'bg-[#ff9999]': ''} flex items-center gap-3 hover:bg-[#ff9999] rounded-xl p-2 cursor-pointer`}>
            <div className="avatar online">
                <div className="w-12 h-12 rounded-full">
                    <img src={user?.profilePhoto} alt="" />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col flex-1">
                    <p>{user?.fullName}</p>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default OtherUser