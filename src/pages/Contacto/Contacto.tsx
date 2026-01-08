import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { BookOpen } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router"


export const Contacto = () => {

  const [dia, setDia] = useState<Date | undefined>()

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

        <div className="flex flex-row w-full h-full pt-24 px-14 gap-6">
          
        <div className=" w-full h-full overflow-hidden shadow-lg flex justify-center items-center rounded-lg bg-white p-4">
          <div className="aspect-square border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4348.013311176155!2d-0.5520086217364529!3d39.59319926035678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1765711792363!5m2!1ses!2ses" 
              width="450" 
              height="450" 
              style={{border:0}}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">

          <div className="space-y-2">
            <Label htmlFor="nomen">Nombre</Label>
            <Input className="border-gray-300" id="nomen" required />
          </div>
                
          <div className="space-y-2">
            <Label htmlFor="cognomen">Apellidos</Label>
            <Input className="border-gray-300" id="cognomen" required />
          </div>
                
          <div className="space-y-2 flex my-10">
          <Label className="mr-3 mt-1">Fecha de reunión</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start w-[200px]"
              >
                {dia
                  ? dia.toLocaleDateString("es-ES")
                  : "Selecciona fecha"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="bg-white">
              <Calendar
                mode="single"
                selected={dia}
                onSelect={setDia}
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>

          </div>

          <Button className="w-full h-10 mt-4 rounded-lg bg-orange-400 text-white font-bold shadow-md hover:bg-orange-300 hover:shadow-lg transition-all duration-200">
            Solicitar
          </Button>
              
        </form>

      </div>

    </div>
    
  )
  
}
