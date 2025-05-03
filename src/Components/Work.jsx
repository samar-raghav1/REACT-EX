import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll} from "framer-motion"


function Work() {
const [images,setImages] = useState(
    [
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp",top:"50%",left:"50%",isActive:false},
      {url:"https://wallpaperaccess.com/full/4391723.jpg",top:"56%",left:"44%",isActive:false},
      {url:"https://wallpaperaccess.com/full/1385386.jpg",top:"45%",left:"56%",isActive:false},
      {url:"https://jbsoftware.ca/wp-content/uploads/web-design.jpg",top:"60%",left:"53%",isActive:false},
      {url:"https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg",top:"43%",left:"40%",isActive:false},
      {url:"https://th.bing.com/th/id/OIP.pVkS6u7znbLk5QLoJNYXkgHaDt?w=1200&h=600&rs=1&pid=ImgDetMain",top:"65%",left:"55%",isActive:false}
    ]);

   const {scrollYProgress} =useScroll();
   scrollYProgress.on("change",(data)=>{
    function imagesShow(arr){
      setImages((prev)=>
        prev.map((item,index)=>(
         arr.indexOf(index)===-1 ?{...item, isActive:false}:{isActive:true}
        )
      )
      )

    }
    console.log(Math.floor(data*100));
    switch(Math.floor(data*100)){
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0,1]);
        break;
      case 3:
        imagesShow([0,1,2,3]);
        break;
      case 4:
        imagesShow([0,1,2,3,4]);
        break;
      
    }
   })
   
  return (
    <div className='w-full text-white '>
        <div className='relative max-w-screen-xl m-auto text-center'>
            <h1 className='text-[30vw] ml-30 leading-none traking-tight select-none font-medium'>work</h1>
            <div className="absolute top-0 w-full h-full ">
                {images.map((elem,index)=>(elem.isActive && <img className='w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} key={index} style={{top:elem.top , left:elem.left}} alt="" />)
                 )}
            </div>
        </div>
       
    </div>
  )
}

export default Work