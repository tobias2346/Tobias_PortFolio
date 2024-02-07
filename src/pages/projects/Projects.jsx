import React from 'react'
import { Footerpages } from '../Footer_pages'
import { HeaderPages } from '../Header_pages'

export const Projects = () => {

    return (
        <>
        <main className='h-screen w-screen flex justify-center items-center'>
          <div className={`w-10/12 h-5/6 flex flex-col justify-start items-center m-0 bg-gray-500 rounded shadow shadow-black`}>
            <HeaderPages/>
            <section className=' h-1/4 text-5xl flex items-center'>Miis proyectos</section>
            <section className='flex justify-around items-center w-full h-2/4 '>
              <div className='w-[300px] h-[500px] bg-red-100'></div>
              <div className='w-[300px] h-[500px] bg-red-100'></div>
              <div className='w-[300px] h-[500px] bg-red-100'></div>
              <div className='w-[300px] h-[500px] bg-red-100'></div>
            </section>
            <Footerpages/>
          </div>
        </main>
        </>
    )
}
