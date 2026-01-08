import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { BookOpen } from "lucide-react"
import { NavLink } from "react-router"


export const About = () => {

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

      </div>  

      <div className="max-w-4xl mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 px-8">

        <img 
          src="/porfolio-web/image/about/clean.jpg" 
          className="rounded-2xl shadow-lg w-100 h-110 object-cover object-top-left" 
        />

        <div className="space-y-6 mt-5">
          <h1 className="text-3xl font-bold">Sobre mí</h1>
          <p className="text-lg font-light">
            Soy estudiante de cuarto año de Bellas Artes en la Universidad Politécnica de Valencia.
          </p>

          <div>
            <h2 className="font-semibold text-xl">Estudios</h2>
            <div className="list-disc pl-5 font-light">
              <li>Grado en Bellas Artes</li>
              <li>Bachillerato artístico</li>
            </div>
          </div>

          <section>
            <h2 className="font-semibold text-xl">Habilidades</h2>
            <p className="font-light">Fotografía · Pintura · Photoshop · Dibujo</p>
          </section>
        </div>
      </div>

    </div>
    

  )

}
