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
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}}  animate={{y:-pos+`rem`}} className="w-full h-full rounded-md bg-sky-100">
            <img className='w-full h-full rounded-md overflow-hidden' src="https://th.bing.com/th/id/OIP.pVkS6u7znbLk5QLoJNYXkgHaDt?w=1200&h=600&rs=1&pid=ImgDetMain" alt="" />
            </motion.div>
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}} animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-200">
             <img className='w-full h-full overflow-hidden' src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg" alt="" />
             </motion.div>
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}} animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-300">
             <img className='w-full h-full overflow-hidden' src="https://jbsoftware.ca/wp-content/uploads/web-design.jpg" alt="" />
             </motion.div>
          <motion.div  transition={{ease:[0.76,0,0.24,1],duration:0.5}} animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-400"> 
            <img className='w-full h-full overflow-hidden' src="https://wallpaperaccess.com/full/4391723.jpg" alt="" />
            </motion.div>
         
        </motion.div>
        </div>

    </div>
  )
}

export default Products