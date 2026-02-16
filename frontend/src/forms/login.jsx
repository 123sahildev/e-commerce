import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginFail, loginPass, hidewarning } from "../reduxtool/slice";
import { useDispatch } from "react-redux";
import { changeProfile } from "../reduxtool/slice";


export default function login() {
    const navigate = useNavigate();
    const container = useRef(null);
    const heading = useRef(null);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState : { errors }, reset } = useForm();

    useEffect(() => {
        gsap.from(container.current, {duration : 1.5, opacity : 0, y : 15});
        gsap.from(heading.current, {duration : 1.5, opacity : 0, x : -15});

    }, []);

    // const goProfile = async () => {
    //   const token = localStorage.getItem("token");
    //   if (!token) {
    //     return
    //   }
    //   let response = await axios.post('http://10.215.54.229:5000/profile', {token : token});
    //   dispatch(changeProfile({username : response.data.message}));
    //     console.log("slicer profile header.jsx", response.data.message);
    // }

    const submit = async (data) => {
        let response = await axios.post('http://10.215.54.229:5000/login',data);  
        console.log(response.data.message);

        if (response.data.message === "Email does'nt exist" ){
          console.log("login.jsx request fail hogaya");
          
          dispatch(loginFail());
              setTimeout(() => {
                dispatch(hidewarning());
              }, 3000);
            return
        }
        console.log("login.jsx request pass hogaya");
        localStorage.setItem("token", response.data.message);

        dispatch(loginPass());
        // goProfile()
        setTimeout(() => {
          dispatch(hidewarning());
          navigate('/profile');

        }, 3000);

        reset();
    return

    }
  
  return (
       <>
        <form  onSubmit={handleSubmit(submit)} ref={container} className="flex pt-10 px-7 pb-5 absolute top-15 justify-self-center flex-col" >
        <h1 ref={heading} className="flex w-full bg-[#00ffff45] l:bg-[#00ffff53] items-center justify-center mb-3 font-bold font-[Arial] mx-auto text-[24px] text-[#151515]">Login</h1>
            <div className="flex flex-col w-max justify-self-center mb-5">
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email" className="l:h-10 h-9 w-64 l:w-73 bg-[#efefef] l:bg-[#c9c9c9aa] rounded-[5px] px-3 font-[Arial] text-[15px] l:text-[17px]" />
          </div>
          <div className="flex flex-col w-max justify-self-center mb-5">
            <label htmlFor="password">Password</label>
            <input type="password" {...register("password")} id="password" className="l:h-10 h-9 w-64 l:w-73 bg-[#efefef] l:bg-[#c9c9c9aa]  rounded-[5px] px-3 font-[Arial] text-[15px] l:text-[17px]" />
          </div>
          <button type="submit" className="l:w-73 w-64 h-9 l:h-10 rounded-[5px] bg-[purple] text-[18px] l:text-[22px] mt-5 text-white font-bold font-[Arial]">Login</button>
          <div className="mt-10 flex items-center mx-auto">
            <label className="w-17 l:w-24 border l:border-[#888888aa] border-[#c9c9c9aa]"></label>
            <FontAwesomeIcon icon={faFacebook} className="ml-2 text-[#6c6c6c] scale-[1.3]" />
            <FontAwesomeIcon icon={faTwitter} className="ml-3 text-[#6c6c6c] l:text-[#575757] scale-[1.3]" />
            <FontAwesomeIcon icon={faInstagram} className="ml-3 text-[#6c6c6c] l:text-[#575757] mr-2 scale-[1.3]" />
            <label className="w-17 l:w-24 border border-[#c9c9c9aa] l:border-[#888888aa]"></label>

          </div>
          <div className="mt-5 flex mx-auto items-center flex-row w-max">
            <p className="text-[14px] l:text-[16px] font-[Arial]">Don't have an account?</p>
            <Link to={"/register"} className="ml-1 font-[Arial] l:text-[15px] text-[11px] text-[#049bff]">Register</Link>
          </div>
        </form>
       </>
  );
}