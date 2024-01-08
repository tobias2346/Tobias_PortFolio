
import { useContext } from "react"
import { Nav_Links } from './Nav_Links'
import { Nav_socialMedia } from './Nav_socialMedia'
import ThemeContext from '../contexts/Theme_context'

export const NavBar = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <nav className={`left-0 z-20 h-full w-16 ${theme.bg_navBar_color} flex flex-col justify-between fixed`}>
        <Nav_Links/>
        <Nav_socialMedia/>
      </nav>
    </>
  )
}
