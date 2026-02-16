import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
import { registerPass, registerFail, hidewarning } from "../reduxtool/slice.js"

export default function register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const container = useRef(null);
    const heading = useRef(null);
    const { register, handleSubmit, reset, formState : { errors } } = useForm()

    useEffect(() => {
      gsap.from(container.current, {duration : 1.2, y : 15, opacity : 0})
      gsap.from(heading.current, {duration : 1.2, x : -15, opacity : 0})

    }, [])


    const submit = async(data) => {
      let response = await axios.post('http://10.215.54.229:5000/register',
        data
      );
      
      if (response.data.message === "Email already exits") {
          dispatch(registerFail());
          setTimeout(() => {
            dispatch(hidewarning())
          
          }, 3000);
          return
      }
        dispatch(registerPass())
        
        setTimeout(() => {
          navigate('/login')
          dispatch(hidewarning())
        
        }, 3000);
        


        reset()

    }

  return (
    <>
        <form  onSubmit={handleSubmit(submit)} ref={container} className=" rounded-[10px] flex flex-col pt-4 justify-self-center absolute top-15 l:top-10 bg-[white] pb-10 l:pb-5 px-20">
          <h1 ref={heading} className="  flex mb-3 font-bold font-[Arial] mx-auto text-[24px] text-[#151515]">Register Now</h1>
          <div className="flex flex-col w-max justify-self-center mb-5">
            <label htmlFor="username">Username</label>
            <input type="text" {...register("username")}  id="username" className="l:h-10 h-9 w-64 l:w-73 l:bg-[#c9c9c9aa] bg-[#efefef]  rounded-[5px] px-3 font-[Arial] text-[15px] l:text-[17px]" />
          </div>
          <div className="flex flex-col w-max justify-self-center mb-5">
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email" className="l:h-10 h-9 w-64 l:w-73 bg-[#efefef] l:bg-[#c9c9c9aa]  rounded-[5px] px-3 font-[Arial] text-[15px] l:text-[17px]" />
          </div>
          <div className="flex flex-col w-max justify-self-center ">
            <label htmlFor="password">Password</label>
            <input type="password" {...register("password", {required : "cha raha hai message"})} id="password" className="l:h-10 h-9 w-64 l:w-73 bg-[#efefef] l:bg-[#c9c9c9aa]  rounded-[5px] px-3 font-[Arial] text-[15px] l:text-[17px]" />
          </div>
          {errors.password && <small className=" text-[12px] font-mono text-[red] mt-0 justify-self-center">password must not be empty</small>}
          <button type="submit" className="l:w-73 w-64 h-9 l:h-11 rounded-[5px] bg-[purple] text-[18px] l:text-[22px] mt-9 text-white font-bold font-[Arial]">Register</button>
          <div className="mt-10 flex items-center mx-auto">
            <label className="w-17 l:w-24 border l:border-[#888888aa] border-[#c9c9c9aa]"></label>
            <FontAwesomeIcon icon={faFacebook} className="ml-2 text-[#6c6c6c] scale-[1.3]" />
            <FontAwesomeIcon icon={faTwitter} className="ml-3 text-[#6c6c6c] l:text-[#575757] scale-[1.3]" />
            <FontAwesomeIcon icon={faInstagram} className="ml-3 text-[#6c6c6c] l:text-[#575757] mr-2 scale-[1.3]" />
            <label className="w-17 l:w-24 border border-[#c9c9c9aa] l:border-[#888888aa]"></label>

          </div>
          <div className="mt-5 flex mx-auto items-center flex-row w-max">
            <p className="text-[14px] l:text-[16px] font-[Arial]">Already hava account?</p>
            <Link to={"/login"} className="ml-1 font-[Arial] l:text-[15px] text-[11px] text-[#049bff]">Sign in</Link>
          </div>
        </form>
      </>  
  )
}
