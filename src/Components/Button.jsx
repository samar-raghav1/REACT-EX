import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Button({title="Get Started"}) {
  return (
    <>
   <div className="max-w-35 px-3 py-2 bg-zinc-100 text-black rounded-full flex gap-4">
    <span className='font-medium text-sm '>{title}</span>
    <FaArrowRight />
   </div>
    </>
  )
}

export default Button