import { motion } from 'framer-motion'
import React from 'react'

function Marque({imgUrls,direction}) {
  
  return (
    <div className='flex h-40  w-full  overflow-hidden  '>
   <motion.div initial={{x:direction==="left"?'0':'-100%'  }} animate={{x:direction==="left"?'-100%':'0'}} transition={{repeat: Infinity ,ease:'linear',duration:20}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
     {imgUrls.map((url,index) => <img src={url} key={index} className=''/>)}
     </motion.div>
     <motion.div initial={{x: direction==="left"?'0':'-100%' }} animate={{x: direction==="left"?'-100%':'0'}} transition={{repeat:Infinity,ease:'linear',duration:20 }} className="flex flex-shrink-0 gap-40 py-10 pr-40">
  
   {imgUrls.map((url ,index)=> <img src={url} key={index} className=' '/>)}
   </motion.div>


    </div>
  )
}

export default Marque