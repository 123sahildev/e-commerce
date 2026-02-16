import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import photo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from '../reduxtool/slice'

export default function profile() {
    const username = useSelector(state => state.contents.profile);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
      let getProfile = async () => {
        const token = localStorage.getItem("token");
        // console.log('this is token', token);
        
        if (!token) {
          return
        }
        let response = await axios.post('http://10.215.54.229:5000/profile',
          {},
          {
            headers : {
              Authorization : `Bearer ${token}`
            }
          }
        );
        if (response.data.message === 'unauthorized') {
          return navigate('/')
        }
        dispatch(changeProfile({username : response.data.message}));
          // console.log("slicer profile header.jsx", response.status);
      }

      getProfile();
    }, []);
    
    const logout = () => {
      localStorage.clear();
      navigate('/')
    }

  return (
    <>  
        <div className='w-full h-20 bg-[darkblue] items-center absolute top-0 left-0 flex'>
            <div className='flex l:ml-4 ml-1.5 items-center gap-x-2'>
                <img src={photo} alt='' className={`l:w-14 l:h-14 h-12 w-12 rounded-[50%] p-2 bg-yellow-300`} />
                <p className='font-[Arial] text-[16px] text-white '>{username}</p>
            </div>
            <button onClick={logout} className='active:bg-[red] active:text-white text-[15px] l:text-[18px] px-3 l:px-5 bg-white rounded-[5px] l:rounded-[10px] l:duration-300 duration-0 l:hover:text-white cursor-pointer l:hover:bg-[#f95c51] py-1.5 absolute right-3 l:right-5 self-center font-[Arial] text-[red]'>Log out</button>
        </div>
    </>
  )
}
