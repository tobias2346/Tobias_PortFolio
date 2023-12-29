import React from 'react'
import js from '../../assets/javaScript.png'
import flutter from '../../assets/flutter.png'
import node from '../../assets/node.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import git from '../../assets/git.png'
import dart from '../../assets/dart.png'
import { Footerpages } from '../Footer_pages'
import { HeaderPages } from '../Header_pages'

export const Skills = () => {

  return (
    <>
    
        <main className={`w-10/12 h-5/6 flex flex-col justify-between  m-0 bg-sky-950 rounded shadow shadow-black`}>
            <HeaderPages/>
            <article className='w-full h-5/6 flex flex-col justify-center items-center'>
              <section className=' w-full h-1/2 flex justify-around items-center'>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={dart} className='h-full w-full' alt="" />
                  </div>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={git} alt="" />
                  </div>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={html} className='h-full w-full' alt="" />
                  </div>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={css} className='h-full w-full' alt="" />
                  </div>
              </section>
              <section className=' w-full h-1/2 flex justify-around items-center'>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={react} className='h-full w-full' alt="" />
                  </div>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={node} alt="" />
                  </div>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={js} className='h-full w-full' alt="" />
                  </div>
                  <div className=' w-[200px] h-[200px] hover:h-[250px] hover:w-[250px] ease-in duration-200'>
                    <img src={flutter} className='h-full w-full' alt="" />
                  </div>
              </section>
            </article>
            <Footerpages/>
        </main>

    </>
  )
}
