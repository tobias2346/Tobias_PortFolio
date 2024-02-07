import React, { useEffect, useState } from 'react'
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
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Skills = () => {

  const { theme } = useContext(ThemeContext);

  const [skill, setSkill] = useState(0)

  const data = [
    {
      img : dart,
      bg : 'rgb(21, 106, 218)'
    },
    {
      img : git,
      bg : 'rgb(185, 88, 22)'
    },
    {
      img : html,
      bg : 'rgb(185, 109, 22)'
    },
    {
      img : css,
      bg : 'rgb(0, 191, 255)'
    },
    {
      img : react,
      bg : 'rgb(16, 144, 161)'
    },
    {
      img : node,
      bg : 'rgb(0, 128, 0)'
    },
    {
      img : js,
      bg : 'rgb(218, 204, 21)'
    },
    {
      img : flutter,
      bg : 'rgb(22, 166, 185)'
    }
  ]
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
    <main className="h-screen w-screen flex justify-center items-center ">
      <div className={`w-10/12 h-5/6 flex flex-col justify-between m-0 ${theme.bg_page_color} rounded shadow shadow-black `}>
        <HeaderPages />

        <article className='w-full h-5/6 flex justify-center items-center z-10'>

          <div className=' h-[20%] w-[70%] absolute rounded-full top-50 -z-10' style={{backgroundColor : data[skill].bg, filter : 'blur(200px)'}} data-aos-duration="2000" data-aos="zoom-in"></div>

          <section className=' w-1/2 h-3/4 flex justify-around items-center flex-wrap '>
          {
            data.map((element, i) => (
              <button key={i} className='w-1/6 mx-4'
              onClick={() => {
                setSkill(i)
              }}>
                <img src={element.img} alt="arhey" />
              </button>
            ))
          }
          </section>
          <section className='w-1/2 h-full flex flex-col justify-around items-center relative '>

            <div className=' w-1/3 h-1/3'>
              <img src={data[skill].img} alt="gyu" />
            </div>
            <div className=' w-3/4 h-1/2 flex flex-col justify-center items-center'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus explicabo fugit tempore culpa iure facere possimus tempora ea maxime, sint praesentium temporibus laboriosam minus accusamus neque illuitationem, impedit corporis odio culpa eius. Unde!</p>
            </div>
          </section>
        </article>
        <Footerpages />
      </div>
    </main>
    </>
  )
}
