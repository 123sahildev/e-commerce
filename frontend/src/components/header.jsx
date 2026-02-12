import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faNavicon, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function header({ sideModel, setSideModel }) {
  return (
    <>
      <div className='w-full flex items-center fixed z-10  h-13 l:h-18 bg-[#26ff00]'>
        <Link to={"/cart"} className='absolute right-3'><FontAwesomeIcon icon={faCartArrowDown} className='text-[white] text-[35px] l:text-[50px] hover:text-[whitesmoke]' /></Link>

        <div className='absolute right-16 l:right-20 flex flex-row items-center'>
          <Link to={"/register"}><button className='px-1 l:py-1 items-center rounded-[50%] bg-[#0f0f0f5d]'><FontAwesomeIcon  icon={faUser} className='text-white text-[15px] l:text-[25px] ' /></button></Link>
          <p className='font-[Arial] l:text-[17px] text-[#171717] text-[12px] l:ml-2 ml-1'>Sign in</p>
        </div>
      </div>
      <div className={`fixed top-13 z-10 h-9 flex l:hidden items-center w-full bg-[#ff9d00]`}>
        <button onClick={() => setSideModel(!sideModel)} className='duration-300 active:bg-[#4f4f4f35] ml-2  rounded-2xl flex items-center justify-center px-1.5 py-2'><FontAwesomeIcon icon={faNavicon} className='text-[18px] ' /></button>
      </div>
    </>
    
  )
}
