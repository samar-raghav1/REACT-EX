import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl py-10 flex gap-32 mx-auto'>
        <div className="basis-1/2">
        <h1 className='text-[11.5rem] font-semibold leading-none traking-tight'>refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-5">
        <div className='basis-1/3 '>
            <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
           { ["Instagram","Twitter (x?)","LinkedIn"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600 '>{item}</a>)}
            </div>
        <div className='basis-1/3 '>
            <h4 className='mb-10 text-zinc-500 capitalize'>Stemap</h4>
           { ["Home","Work","Carrier","Contact"].map((item,index)=><a key={index} className='block mt-2  text-zinc-300 '>{item}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col '>
                    <p className='text-right '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo voluptatem omnis fuga cupiditate?</p>
                    <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='mt-6' alt="" />
            </div>
            </div>
    </div>
  )
}

export default Footer