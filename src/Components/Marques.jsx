import React from 'react'
import Marque from './Marque'

function Marques() {
    var images =[
        [
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ed1253edc0166ecbad_Lavendar-logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1b881b51b8bea94556c_Logo-lockup-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg"
      ],
       
        [
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ed1253edc0166ecbad_Lavendar-logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1b881b51b8bea94556c_Logo-lockup-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
        "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg"
      ]
        ]
       
      
  return (
   <div className='bg-white py-5 mt-32 w-full relative overflow-hidden'>
   {images.map((img,index) =>
             <Marque key={index} imgUrls={img} direction={index===0 ? "left":"right"}/>
   )}
    </div> 
  )
}

export default Marques