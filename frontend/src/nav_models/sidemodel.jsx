import React from 'react'

export default function SideModel({ modelref }) {
  return (
    <div onClick={() => modelref(false)} className=' z-5 w-full h-screen fixed top-22 left-0 l:hidden visible bg-[#2e2e2e88]'>
    </div>
  )
}
