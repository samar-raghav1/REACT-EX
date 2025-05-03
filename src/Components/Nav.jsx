import React from 'react'
import Button from './Button'
function Nav() {
  return (
    <>
    <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between border-b-2">
       <div className="nleft flex ">
       <img className="h-13 rounded-md"  src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png" alt="" />
         <div className="link flex ml-20 gap-14 mt-3">
            {["Home","Work","Culture","","News"].map((elem,index)=>(
                elem.length===0 ? <span key={index}  className="w-[2px] h-7 bg-zinc-800"></span> :
               
            <a className='text-sm flex item-center gap-1 'key={index} href='#'>
               {index===1 && (<span style={{boxShadow:"0 0 0.45em #00FF19"}} key={index} className='inline-block w-1 h-1 mt-2 bg-green-500 rounded-full'></span>)}
                
                {elem}
                </a>
                ))}
         </div>
         </div>
         <Button/>
      
    </div>
    </>
  )
}

export default Nav