

export interface Works {
  id: number,
  title: string,
  image: string[],
  description: string,
  date: number
}

export const works = [
  
  {
    id: 0,
    title: "Ramal",
    images: ["A1.png", "A2.jpg", "A3.jpg"],
    description: "Fotografía, Pintura, Dibujo, Edición",
    date: 2024,
  },

  {
    id: 1,
    title: "Saint",
    images: ["B2.png", "B1.png"],
    description: "Dibujo",
    date: 2022,
  },

  {
    id: 2,
    title: "Botanic",
    images: ["C1.jpg", "C2.jpg", "C3.jpg", "C4.jpg"],
    description: "Fotografía, Edición",
    date: 2023,
  },
]