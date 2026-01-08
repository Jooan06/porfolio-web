import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { BookOpen, Camera, Code, Paintbrush } from "lucide-react"
import { NavLink } from "react-router"



export const Home = () => {

  return (

    <div className="w-full h-screen bg-gradient-to-b from-gray-400 to-gray-200 flex flex-col justify-center items-center">
      
      <div className="w-full flex justify-end px-10 py-6 fixed top-0 right-0 z-50 bg-gray-300 bg-opacity-50">
        <NavigationMenu>

          <NavigationMenuList>

            <NavigationMenuItem>
              <Button className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl transition-all"> 
                <NavLink to="/"><BookOpen /></NavLink>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl transition-all"> 
                <NavLink to="/trabajos">Trabajos</NavLink>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl transition-all"> 
                <NavLink to="/about">Yo</NavLink>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl transition-all"> 
                <NavLink to="/contacto">Contacto</NavLink>
              </Button>
            </NavigationMenuItem>

          </NavigationMenuList>

        </NavigationMenu>

      </div> {/* Header Barra superior */}

      <div className="flex flex-row w-full h-full pt-24 px-16 gap-8">

        <div className="flex-1 flex flex-col justify-center items-center gap-6">

          <div className="w-64 h-40 bg-gray-500 rounded-xl shadow-lg">
            <img 
              className="w-full h-full object-cover rounded-xl"
              src="/porfolio-web/image/home/H1.jpg" 
              alt="" 
            />
          </div>

          <div className="w-64 h-40 bg-gray-500 rounded-xl shadow-lg">
            <img 
              className="w-full h-full object-cover rounded-xl"
              src="/porfolio-web/image/home/H2.JPG"
              alt=""
            />
          </div>

          <div className="w-64 h-40 bg-gray-500 rounded-xl shadow-lg">
            <img 
              className="w-full h-full object-none rounded-xl"
              src="/porfolio-web/image/home/H3.jpg" 
              alt="" 
            />
          </div>

        </div>

        <div className="w-[2px] bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

          <div className="flex-1 flex flex-col justify-center gap-6 text-gray-800 ml-10">

            <h1 className="text-4xl font-bold">Joan Núñez</h1>
            <p className="text-lg">
              Fotografía / Diseño Web / Pintura
            </p>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-gray-300"><Camera /></div>
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-gray-300"><Code /></div>
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-gray-300"><Paintbrush /></div>
            </div>

          </div>

      </div>

    </div>

  )
}
