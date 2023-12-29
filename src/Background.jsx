import React from 'react'
import { NavBar } from "./navBar/Nav_bar"
import { TabThemes } from './TabThemes'
import { useContext } from "react"
import { Home } from './pages/home/Home'
import ThemeContext from './contexts/Theme_context'
export const Background = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <main className={`h-screen w-full flex justify-center items-center bg-gradient-to-r  ${theme.bg_backGround_color}`}>
        <NavBar/>
        <TabThemes/>
        <Home/>
      </main>
    </>
  )
}
