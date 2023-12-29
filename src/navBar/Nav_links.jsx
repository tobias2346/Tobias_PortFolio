import React from 'react'
import casa from '../assets/casa.png'
import perfil from '../assets/perfil.png'
import telefono from '../assets/telefono.png'
import habilidades from '../assets/habilidades.png'
import proyectos from '../assets/proyectos.png'

export const Nav_Links = () => {
  return (
    <>
      <section className=" w-full h-1/3 flex flex-col justify-around items-center p-1">
        <div className='  m-1 w-full h-1/5 flex items-center justify-center border-l-4 border-cyan-400 hover:bg-gray-200 animate-pulse'>
          <img src={casa} className='navIcons' alt="" />
        </div>
        <div className=' rounded m-1 w-full h-1/5 flex items-center justify-center hover:bg-gray-200'>
          <img src={perfil} className='navIcons' alt="" />
        </div>
        <div className=' rounded m-1 w-full h-1/5 flex items-center justify-center hover:bg-gray-200'>
          <img src={telefono} className='navIcons' alt="" />
        </div>
        <div className=' rounded m-1 w-full h-1/5 flex items-center justify-center hover:bg-gray-200'>
          <img src={proyectos} className='navIcons' alt="" />
        </div>
        <div className=' rounded m-1 w-full h-1/5 flex items-center justify-center hover:bg-gray-200'>
          <img src={habilidades} className='navIcons' alt="" />
        </div>
      </section>
    </>
  )
}
