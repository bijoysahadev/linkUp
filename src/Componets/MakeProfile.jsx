import React from 'react'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
    
const MakeProfile = ({mainClassname,profileImage,profileName,profilStatus,buttonText}) => {
  return (
   <div className={`flex items-center justify-between border-b border-black/30 pb-2 ${mainClassname} `} >
    <div className='flex items-center gap-x-3' >
          <div className='w-12 h-12  rounded-full' >
    <Image  src={profileImage} className={`w-full h-full rounded-full object-cover`} />
     
    </div>
    <div  >
        <h4  className='text-base text-black  font-semibold' > {profileName}</h4>
    <p  className='text-xs text-[#4D4D4D] font-normal' >{profilStatus}</p>

     </div>
    </div>
     <button className='text-sm text-white px-5 font-base py-0.5 rounded-md bg-[#5F35F5]' >{buttonText}</button>
    </div>
  )
}

export default MakeProfile