import React from 'react'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import whatsApp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'

export const Nav_socialMedia = () => {
  return (
    <>
      <section className='w-full h-1/5 flex flex-col justify-around items-center'>
        <div className=' rounded m-1 w-full flex items-center justify-center hover:bg-gray-200'>
          <div className=" w-1/2 flex justify-center items-center" ><img src={whatsApp} alt="" /></div>
        </div>
        <div className=' rounded m-1 w-full flex items-center justify-center hover:bg-gray-200'>
          <div className=" w-1/2 flex justify-center items-center" ><img src={linkedin} alt="" /></div>
        </div>
        <div className=' rounded m-1 w-full flex items-center justify-center hover:bg-gray-200'>
          <div className=" w-1/2 flex justify-center items-center" ><img src={instagram} alt="" /></div>
        </div>
        <div className=' rounded m-1 w-full flex items-center justify-center hover:bg-gray-200'>
          <div className=" w-1/2 flex justify-center items-center" ><img src={gmail} alt="" /></div>
        </div>
      </section>
    </>
  )
}
