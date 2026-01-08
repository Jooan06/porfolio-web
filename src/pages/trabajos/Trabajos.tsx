import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { BookOpen } from "lucide-react"

import { NavLink } from "react-router"
import { useState } from "react"

import { works } from "./data"


import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



export const Trabajos = () => {

  const listaWorks = works.slice()

  const [selectedWork, setSelectedWork] = useState<any>()
  const [open, setOpen] = useState(false)

  return (
    
    <>
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

    

      <div className="pt-28 px-10">
        <div className="grid grid-cols-3 gap-6 justify-items-center">
      
        {
          listaWorks.map( works => (
        
          <Card 
            className="cursor-pointer bg-slate-200 bg-opaciy-90 border-slate-300 shadow-accent w-[400px] h-[300px] hover:bg-[#bebac2]/70 hover:text-slate-600 transition-colors"
            key={ works.id }
          >
            <CardContent 
                  onClick={() => {
                    setSelectedWork(works)
                    setOpen(true)
                  }}
                  className="flex flex-col items-center justify-center gap-1 h-full px-0"
                  >
                  <img 
                    src={`/porfolio-web/image/works/${ works.images[0] }`}
                    className="w-75 h-50 object-cover object-center border border-[#83828c]"
                    alt=""
                  />
                  <h1 className="font-bold text-lg mt-2">{ works.title }</h1>
                  <p className="font-light text-lg">{ works.date }</p>
                </CardContent>
          </Card>
          ))
        }

        </div>  
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[500px] sm:w-[540px] bg-gray-200">
          {selectedWork && (
            <>

              <Carousel 
                className="mt-6 w-full max-w-md mx-auto"
                plugins={[Autoplay({delay: 2000})]}
              >
                
                <CarouselContent>
                  {selectedWork.images.map((img: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className="p-1 mt-4">
                        <img
                          src={`/porfolio-web/image/works/${img}`}
                          alt=""
                          className="w-full h-[350px] object-cover rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

              </Carousel>

              <div className="px-4">

                <p className="mt-2 text-sm text-muted-foreground">
                  {selectedWork.date}
                </p>

                <p className="mt-1 text-lg font-medium">
                  {selectedWork.title}
                </p>

                <p className="mt-3 text-sm text-muted-foreground">
                  {selectedWork.description}
                </p>
                  
              </div>
              
            </>
          )}
        </SheetContent>
      </Sheet>
      
    </div>

    </>
    
  )
  
}
