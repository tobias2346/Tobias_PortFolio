import React, {useContext} from 'react'
import { HeaderPages } from '../Header_pages'
import { Footerpages } from '../Footer_pages'
import logo from '../../assets/roundedProfilePf.png'
import ThemeContext from "../../contexts/Theme_context";

export const AboutMe = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main className="h-screen w-screen flex justify-center items-center ">
        <div className={`w-10/12 h-5/6 flex flex-col justify-start  m-0 ${theme.bg_page_color} rounded shadow shadow-black`}>
          <HeaderPages />
          <section className='h-full w-full flex justify-around items-center z-10'>
            <div className=' w-[500px] bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-200 h-[500px] flex justify-center items-center rounded-full'>
              <img src={logo} alt="" />
            </div>

            <div className=' w-2/5 h-3/4 '>
              <div className='h-1/5 w-full flex justify-start items-start'>
                <h1 className={` text-5xl font-extrabold ${theme.text_title_color}`}> Acerca de mi </h1>
              </div>
              <div className={` h-1/5 w-full flex justify-start items-start text-lg ${theme.text_subTitle_color}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nesciunt ea odit animi? Dolorum aliquam adipisci, voluptates eos aperiam maiores sit officiis delectus veniam illum, omnis nostrum accusamus rerum corporis!

                </p>
              </div>
            </div>
          </section>
          <Footerpages />
        </div>
      </main>
    </>
  )
}
