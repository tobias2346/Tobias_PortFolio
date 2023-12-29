import React, { useContext, useState } from 'react'
import ThemeContext from './contexts/Theme_context';

export const TabThemes = () => {
  
  const {themes, setTheme, theme} = useContext(ThemeContext);


    const [choisColors, setChoisColors] = useState(false)

    return (
    
    <>  
       {
        choisColors ?
        <main className={`flex justify-around rounded-bl-lg items-center w-80 h-14 fixed top-0 right-0 ${theme.bg_navBar_color}`}>

          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.yellowTheme)
          }}>
            <div className=' rounded-full w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-800'></div>
          </button>

          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.redTheme)
          }}>
            <div className=' rounded-full w-8 h-8  bg-gradient-to-r from-red-500 to-red-800'></div>
          </button>

      
          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.cyanTheme)
          }}>
            <div className=' rounded-full w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-800'></div>
          </button>
          
          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.greenTheme)
          }}>
            <div className=' rounded-full w-8 h-8 bg-gradient-to-r from-green-500 to-green-800'></div>
          </button>

       

          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.purpleTheme)
          }}>
            <div className=' rounded-full w-8 h-8  bg-gradient-to-r from-violet-500 to-violet-800'></div>
          </button>   
          
          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.blackTheme)
          }}>
            <div className=' rounded-full w-8 h-8 bg-black'></div>
          </button>
          <button onClick={() => {
            setChoisColors(false)
            setTheme(themes.whiteTheme)
          }}>
            <div className=' rounded-full w-8 h-8 bg-white'></div>
          </button>

        </main> 
        :
        <div className={` ${theme.bg_navBar_color} w-14 h-14 flex justify-center items-center fixed top-0 right-0 rounded-bl-lg`}>
          <button onClick={() => {
              setChoisColors(true)
            }}>
                <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${theme.logo_color}`}></div>
          </button>
        </div>
       }
     

    </>
  )
}
