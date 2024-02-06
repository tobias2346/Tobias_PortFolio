import React, { useState , useContext} from 'react'
import casa from '../assets/casa.png'
import perfil from '../assets/perfil.png'
import telefono from '../assets/telefono.png'
import habilidades from '../assets/habilidades.png'
import proyectos from '../assets/proyectos.png'
import ThemeContext from "../contexts/Theme_context"

export const Nav_Links = () => {
  const [currentPath, setCurrentPath] = useState('/home');

  const { theme } = useContext(ThemeContext);

  const handleClick = (path) => {
    setCurrentPath(path);
  };
  console.log(currentPath)
  return (
    <>
      <section className="w-full h-1/3 flex flex-col justify-around items-center p-1">
        
          <button className={` h-32 w-16 flex items-center justify-center ${currentPath === '/home' ? `translate-x-6 transition duration-150 ease-in-out rounded-full ${theme.bg_navBar_color} border-8 ${theme.border_page_color}` : ''}`} onClick={() => handleClick('/home')}>
          <img src={casa} alt="" className=' w-7'/>
          </button>
 
          <button className={` h-32 w-16 flex items-center justify-center ${currentPath === '/about' ? `translate-x-6 transition duration-150 ease-in-out  ${theme.bg_navBar_color} rounded-full border-8 ${theme.border_page_color}` : ''}`} onClick={() => handleClick('/about')}>
            <img src={perfil} alt="" className=' w-7'/>
          </button>
    
          <button className={` h-32 w-16 flex items-center justify-center ${currentPath === '/contact' ? `translate-x-6 transition duration-150 ease-in-out  ${theme.bg_navBar_color} rounded-full border-8 ${theme.border_page_color}` : ''}`} onClick={() => handleClick('/contact')}>
          <img src={telefono} alt="" className=' w-7'/>
          </button>
      
          <button className={` h-32 w-16 flex items-center justify-center ${currentPath === '/proyects' ? `translate-x-6 transition duration-150 ease-in-out  ${theme.bg_navBar_color} rounded-full border-8 ${theme.border_page_color}` : ''}`} onClick={() => handleClick('/proyects')}>
          <img src={proyectos} alt="" className=' w-7'/>
          </button>
      
          <button className={` h-32 w-16 flex items-center justify-center ${currentPath === '/skills' ? `translate-x-6 transition duration-150 ease-in-out  ${theme.bg_navBar_color} rounded-full border-8 ${theme.border_page_color}` : ''}`} onClick={() => handleClick('/skills')}>
          <img src={habilidades} alt="" className=' w-7'/>
          </button>
      </section>
    </>
  )
}
