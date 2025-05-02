import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width,start,para,hover="false"}) {
  
  return (
    <motion.div whileHover={{backgroundColor: hover ==="true" ? "#7443ff":"" , padding:"25px"}} className={`${width} min-h-[30rem] bg-zinc-800  flex flex-col justify-between p-5 rounded-xl`} >
       <div> <div className='w-full flex justify-between items-center'>
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium mt-5 '>Whatever</h1>
        </div>
        <div className="down w-full mt-60">
         {
          start && (<>
            <h1 className='text-6xl font-semibold traking-tight leading-none'>Start</h1>
            <button className='rounded-full py-2 px-5 mt-5 border-1 border-zinc-50 '>Contact us</button>
            </> )
         }
       {
          para && (<>
            <p className='text-zinc-500 text-sm font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </>)
         }
        
        </div>
    </motion.div>
  )
}

export default Card