import React, {useState} from 'react'
import { NavBar } from "./navBar/Nav_bar"
import { TabThemes } from './TabThemes'
import { useContext } from "react"
import ThemeContext from './contexts/Theme_context'
import { AboutMe } from './pages/about/AboutMe'
import { Skills } from './pages/skills/Skills'
import { Home } from './pages/home/Home'
import { Projects } from './pages/projects/Projects'
export const Background = () => {

  const {theme} = useContext(ThemeContext);

  const [pages, setPages] = useState(0)
  console.log(pages * 100)

  const next = (num) => {
    setPages(num)
  }

  const components = [
    <Home/>,
    <AboutMe/>,
    <Projects/>,
    <Skills/>
  ]
  
  return (
    <>
    <main className={`flex relative bg-gradient-to-r ${theme.bg_backGround_color} `}>
      <TabThemes/>
      <NavBar next={next}/>
      <div className='flex flex-nowrap'>
        {components[pages]}
      </div>
    </main>
    </>
  )
}
