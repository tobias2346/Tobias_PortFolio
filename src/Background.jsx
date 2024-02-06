import React from 'react'
import { NavBar } from "./navBar/Nav_bar"
import { TabThemes } from './TabThemes'
import { useContext } from "react"
import ThemeContext from './contexts/Theme_context'
import { AboutMe } from './pages/about/AboutMe'
import { Skills } from './pages/skills/Skills'
import { Home } from './pages/home/Home'

export const Background = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <>
    <div className='flex justify-center items-center bg-red-500'>
      <NavBar/>
      <TabThemes/>
      <main className='flex flex-nowrap'>
        <Home/>
        <AboutMe/>
        <Skills/>
      </main>
    </div>

    </>
  )
}
