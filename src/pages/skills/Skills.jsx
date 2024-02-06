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
import ThemeContext from "../../contexts/Theme_context";
import { useContext } from "react"

export const Skills = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
    <main className="h-screen w-screen flex justify-center items-center">
      <div className={`w-10/12 h-5/6 flex flex-col justify-between  m-0 ${theme.bg_page_color} rounded shadow shadow-black`}>
        <HeaderPages />
        <article className='w-full h-5/6 flex justify-center items-center'>
          <section className=' w-1/2 h-full flex flex-col justify-between items-center'>
            <section className=' flex justify-center items-center w-full h-1/2'>
              <div className=' w-[250px] h-[250px] ease-in duration-200 '>
                <img src={react} className='h-full w-full' alt="" />
              </div>
            </section>
            <section className='w-full h-1/2 flex flex-col justify-around items-center '>
              <div className='w-full h-1/2 flex justify-around items-center'>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200 flex justify-center'>
                  <img src={dart} className='h-full w-full' alt="" />
                </div>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200 felx justify-center items-center'>
                  <img src={git} alt="" />
                </div>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200'>
                  <img src={html} className='h-full w-full' alt="" />
                </div>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200'>
                  <img src={css} className='h-full w-full' alt="" />
                </div>
              </div>
              <div className='w-full h-1/2 flex justify-around items-center'>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200'>
                  <img src={react} className='h-full w-full' alt="" />
                </div>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200'>
                  <img src={node} alt="" />
                </div>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200'>
                  <img src={js} className='h-full w-full' alt="" />
                </div>
                <div className=' w-[120px] h-[120px] hover:h-[150px] hover:w-[150px] ease-in duration-200'>
                  <img src={flutter} className='h-full w-full' alt="" />
                </div>
              </div>

            </section>
          </section>
          <section className=' w-1/2 h-full flex flex-col justify-around items-center'>
            <section>
            </section>
            <section>
            </section>
          </section>
        </article>
        <Footerpages />
      </div>
      </main>

    </>
  )
}
