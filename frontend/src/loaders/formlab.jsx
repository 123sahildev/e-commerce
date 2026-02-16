import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import gsap from "gsap";

export default function formlab() {
    const checkwarning = useSelector(state => state.contents.register);
    const colorref = checkwarning.message;
    const container = useRef(null);

    useEffect(() => {
      if ( checkwarning.status === true ) {
        gsap.to(container.current, 
          {duration : 0.3, opacity : 1, y : 35},
        );
        return
      }
      if ( checkwarning.status === false ) {
        gsap.to(container.current, 
          {duration : 0.3, opacity : 0, y : 0},

        );
        
        return
      }

    }, [checkwarning.status]);



  return (
    <div ref={container} className={` py-2 flex justify-self-center items-center, justify-center bg-white text-[14px] fixed top-0 z-100 rounded-[7px] ${colorref === "Email already exist" || colorref === "Incorrect email or password" ? 'text-[#ff0000e4]' : 'text-[#01ec30]'} shadow-[0px_2px_15px_1px_#cbcbcb92] font-bold font-[Aria] px-4 `}>
      {checkwarning.message}
      {checkwarning.message === "Email already exist" || checkwarning.message === "Incorrect email or password" && <FontAwesomeIcon   icon={faWarning} className="ml-1 mt-0.5 text-[red]"  />}
    </div>
  );
}
