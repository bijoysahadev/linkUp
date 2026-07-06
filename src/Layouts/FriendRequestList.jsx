import React from 'react'
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
const FriendRequestList = () => {
  return (
     <div> 
         <Searchbar />
         <div className='py-4  px-5  bg-red-300 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' >
             <TittleList className={`py-3`} tittle={`Group List`} />
            <div className='flex flex-col gap-3 h-[170px] overflow-y-scroll' >
             
              <MakeProfile mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
              <MakeProfile mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
              <MakeProfile mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
              <MakeProfile mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
              <MakeProfile mainClassname={`py-3 border-transparent`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
            </div>
          </div>
    </div>
  )
}

export default FriendRequestList