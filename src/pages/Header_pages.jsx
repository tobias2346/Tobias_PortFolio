import React from 'react'
import { useContext } from "react"
import ThemeContext from '../contexts/Theme_context';


export const HeaderPages = () => {

  const {theme} = useContext(ThemeContext);

  return (
  <>
      <header className=" h-20 w-full flex justify-between items-center">
        <section className="w-2/12 flex justify-center">
          <h1 className={`text-2xl ${theme.text__page_header_color}`}>Folio</h1>
        </section>
        <section className=" flex justify-around items-center w-5/12 h-2/3 rounded-3xl shadow-sm shadow-black" >
          <div className={` w-1/4 h-1/2 flex justify-center items-center ${theme.text__page_header_color}`} >Linkedin</div>
          <div className={` w-1/4 h-1/2 flex justify-center items-center ${theme.text__page_header_color}`} >Instagram</div>
          <div className={` w-1/4 h-1/2 flex justify-center items-center ${theme.text__page_header_color}`} >WhatsApp</div>
          <div className={` w-1/4 h-1/2 flex justify-center items-center ${theme.text__page_header_color}`} >Gmail</div>
        </section>
        <section className="w-2/12 flex justify-center">
          <h1 className={`${theme.text__page_header_color} text-2xl`}>Skill</h1>
        </section>
      </header>
    </>
  )
}
