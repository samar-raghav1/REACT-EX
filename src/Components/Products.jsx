import React, { useState } from 'react'
import Product from './Product'
import {motion} from 'framer-motion'

function Products() {
    var products=[
        {title:"arqitel",description:"",live:true,case:false},
        {title:"TTR",description:"",live:true,case:false},
        {title:"YIR 2022",description:"",live:true,case:true},
        {title:"YAHOO!!",description:"",live:true,case:true},
    ]

    const [pos,setPos]=useState(0);
    const mover=(val)=>{
      setPos(val*23)

    }
  return (
    <div className='mt-32 relative'>
        {products.map((val,index)=>{
         return <Product key={index} val={val} mover={mover} count={index} />
        })}
       <div
        className='absolute top-0 w-full h-full  pointer-events-none '>
           <motion.div
          initial={{y:pos , x:"-50%"}}
          animate={{y:pos+`rem`}}
          transition={{ease:[0.76,0,0.24,1],duration:0.6}}
           className="window absolute w-[32rem] h-[23rem] bg-sky-200 left-[60%] -translate-x-[50%] overflow-hidden ">
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}}  animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-100"></motion.div>
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}} animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-200"></motion.div>
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}} animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-300"></motion.div>
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}} animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-400"></motion.div>
         
        </motion.div>
        </div>

    </div>
  )
}

export default Products