import { useContext } from "react"
import { Footerpages } from "../Footer_pages";
import { HeaderPages } from "../Header_pages";
import ThemeContext from "../../contexts/Theme_context";

export const Home = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
    <main className="h-screen w-screen flex justify-center items-center ">
      <div className={`w-10/12 h-5/6 flex flex-col justify-between  m-0 ${theme.bg_page_color} rounded shadow-lg`}>
        <HeaderPages />
        <section className=" h-5/6 w-full flex justify-center items-center z-10">
          <title className="z-10 h-2/3 w-1/2 flex flex-col justify-around items-center">
            <h1 className={`text-8xl h-1/4 ${theme.text_title_color}`}>Tobias Belfiore</h1>

            <h4 className={`text-5xl h-1/4 ${theme.text_subTitle_color}`}>Frontend web developer</h4>

            <p className={`text-lg h-1/4 ${theme.text_subTitle_color}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, laudantium maiores minus dolorem eum qui ab sequi suscipit! Quam earum a aut animi quis, porro iusto consequuntur unde vitae ipsam.
            </p>

            <div className="w-2/3 h-1/4 flex justify-around items-center">

              <button className={`border-solid border-2 rounded-md ${theme.bg_main_color} border-cyan-400 w-1/3 h-2/5 ${theme.text_title_color}rounded-md`}>Acerca de mi
              </button>
              <button className={`border-solid border-2  w-1/3 h-2/5 ${theme.text_subTitle_color} rounded-md border-cyan-400 hover:bg-cyan-400  hover:text-black hover:border-none`}>
                Contacto
              </button>

            </div>
          </title>
        </section>
        <Footerpages/>
      </div>
    </main>

    </>
  )
}
