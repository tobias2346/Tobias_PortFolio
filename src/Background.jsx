import React from 'react'
import { NavBar } from "./navBar/Nav_bar"
import { TabThemes } from './TabThemes'
import { useContext } from "react"
import ThemeContext from './contexts/Theme_context'
import { AboutMe } from './pages/about/AboutMe'
export const Background = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <main className={`h-screen w-full flex justify-center items-center bg-gradient-to-r  ${theme.bg_backGround_color}`}>
        <NavBar/>
        <TabThemes/>
        <AboutMe/>
      </main>
    </>
  )
}
